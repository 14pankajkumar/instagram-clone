import faker from "faker";
import { useEffect, useState } from "react";
import { avatar } from "../fakedata";

const Suggestions = () => {
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const suggestions = [...Array(5)].map((_, i) => ({
      ...faker.helpers.contextualCard(),
      id: i,
    }));

    setSuggestions(suggestions);
  }, []);

  return (
    <div className="mt-4 ml-10">
      <div className="flex justify-between text-sm mb-5">
        <h3 className="text-sm font-bold text-gray-400">Suggestions for you</h3>
        <button className="text-gray-500 font-semibold">See All</button>
      </div>

      {(suggestions && avatar.slice(0,5)).map((profile) => {
        return (
          <div
            key={profile.id}
            className="flex items-center justify-between mt-3"
          >
            <img
              className="w-10 h-10 rounded-full border p-[2px]"
              src={profile.image}
              alt=""
            />

            <div className="flex-1 ml-4">
              <h2 className="font-semibold text-sm">{profile.username}</h2>
              <h3 className="text-sm text-gray-400">
                Work at {profile.company.name || profile.company}
              </h3>
            </div>

            <button className="text-blue-400 text-sm font-bold">Follow</button>
          </div>
        );
      })}
    </div>
  );
};

export default Suggestions;
