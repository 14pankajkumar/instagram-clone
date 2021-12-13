import faker from "faker";
import { useEffect, useState } from "react";

const Suggestions = () => {
  const [suggestions, setSuggestions] = useState([]);

  const url =
  "https://scontent.fdel25-2.fna.fbcdn.net/v/t1.6435-9/163513282_1764300493774796_226045888999478509_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=8CWYfdGdyg0AX9ASC0I&_nc_ht=scontent.fdel25-2.fna&oh=6d47c8aab4a74f799d8ae34316afdbca&oe=61DDB574";

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

          {
              suggestions.map(profile => {
                  return (
                      <div key={profile.id} className="flex items-center justify-between mt-3">
                          <img 
                          className="w-10 h-10 rounded-full border p-[2px]"
                          src={url} 
                          alt="" 
                          />

                          <div className="flex-1 ml-4">
                              <h2 className="font-semibold text-sm">{profile.username}</h2>
                              <h3 className="text-sm text-gray-400">Work at {profile.company.name}</h3>
                          </div>

                          <button className="text-blue-400 text-sm font-bold">Follow</button>
                      </div>
                  )
              })
          }
      </div>
  )
};

export default Suggestions;