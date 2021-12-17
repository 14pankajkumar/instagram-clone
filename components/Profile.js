import { useSession } from "next-auth/react";

const Profile = () => {
  const { data: session } = useSession();

  return (
    <div className="flex space-x-2 p-6 my-8 items-center bg-white mt8 border-gray-200 border rounded-sm">
      <div>
        <img
          className="h-34 w-34 rounded-full p-[1.5px] border-red-500 border-2 object-contain cursor-pointer hover:scale-110 transition transform duration-200 ease-out"
          src={session.user.image}
          alt=""
        />
      </div>

      <div className="pl-10">
        <h2 className="font-bold">{session.user.name}</h2>
        <h3 className="text-sm text-gray-400">{session.user.username}</h3>
      </div>
    </div>
  );
};

export default Profile;
