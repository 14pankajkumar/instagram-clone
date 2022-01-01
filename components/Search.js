import { collection, onSnapshot, query, where } from "firebase/firestore";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { db } from "../firebase";

const Search = ({ searchValue }) => {
  const [suggestions, setSuggestions] = useState([]);
  const { data: session } = useSession();

  useEffect(
    () =>
      onSnapshot(
        query(
          collection(db, "users"),
          where("username", "==", `${searchValue}`)
        ),
        (snapshot) => {
          setSuggestions(snapshot.docs);
        }
      ),
    [db, searchValue]
  );

  return (
    <div className="absolute bg-white rounded-lg mt-20 border drop-shadow-2xl p-7 w-80">
      <div className="flex justify-between text-sm mb-5">
        <h3 className="text-sm font-bold text-gray-400">Search results</h3>
      </div>

      {suggestions.map((profile) => {
        return (
          <div
            key={profile.id}
            className="flex items-center justify-between mt-3"
          >
            <img
              className="w-10 h-10 rounded-full border p-[2px]"
              src={profile.data().profileImg}
              alt=""
            />

            <div className="flex-1 ml-4">
              <h2 className="font-semibold text-sm">
                {profile.data().username}
              </h2>
              <h3 className="text-sm text-gray-400">
                {/* Work at {profile.company.name || profile.company} */}
              </h3>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Search;
