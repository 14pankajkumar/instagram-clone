import { useSession } from "next-auth/react";
import MiniProfile from "./MiniProfile";
import Profile from "./Profile";
import UserPosts from "./UserPosts";

const UserFeed = () => {
  const { data: session } = useSession();
  return (
    <main>
      <div className="grid grid-cols-1 md:grid-cols-2 md:max-w-3xl xl:grid-cols-3 xl:max-w-6xl mx-auto">
        {/* user Profile */}
        <section className="col-span-2">
        <Profile />
      </section>

        {session && (
        <section className="hidden xl:inline-grid md:col-span-1">
          <div className="">
        {/* Mini Profile */}
        <MiniProfile />
        </div>
        </section>
      )}

      </div>
      <div>
        {/* user posts */}
        <UserPosts />
      </div>
    </main>
  );
};

export default UserFeed;
