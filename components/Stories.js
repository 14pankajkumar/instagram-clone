import faker from "faker";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { avatar } from "../fakedata";
import Story from "./Story";

const Stories = () => {
  const { data: session } = useSession();
  const [suggestions, setSuggestions] = useState([]);
  useEffect(() => {
    const suggestions = [...Array(20)].map((_, i) => ({
      ...faker.helpers.contextualCard(),
      id: i,
    }));
    setSuggestions(suggestions);
  }, []);

  return (
    <div className="flex space-x-2 p-6 my-8 bg-white mt8 border-gray-200 border rounded-sm overflow-x-scroll scrollbar-thin scrollbar-thumb-black">
      {session && (
        <Story img={session.user.image} username={session.user.username} />
      )}
      {(suggestions && avatar).map((profile) => {
        return (
          <Story
            key={profile.id}
            img={profile.image}
            username={profile.username}
          />
        );
      })}
    </div>
  );
};

export default Stories;
