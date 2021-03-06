import { collection, onSnapshot, query, where } from "firebase/firestore";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { db } from "../firebase";
import FollowBtn from "./FollowBtn";

const Suggestions = () => {
  const [suggestions, setSuggestions] = useState([]);
  const { data: session } = useSession();

  useEffect(
    () =>
      onSnapshot(
        query(
          collection(db, "users"),
          where("email", "!=", `${session.user.email}`)
        ),
        (snapshot) => {
          setSuggestions(snapshot.docs);
        }
      ),
    [db]
  );

  return (
    <div className="mt-4 ml-10">
      <div className="flex justify-between text-sm mb-5">
        <h3 className="text-sm font-bold text-gray-400">Suggestions for you</h3>
        <button className="text-gray-500 font-semibold">See All</button>
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
            <FollowBtn id={profile.id} />
          </div>
        );
      })}
    </div>
  );
};

export default Suggestions;
