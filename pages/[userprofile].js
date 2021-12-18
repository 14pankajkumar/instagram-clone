import { getSession, useSession } from "next-auth/react";
import Head from "next/head";
import Header from "../components/Header";
import Modal from "../components/Modal";
import UserFeed from "../components/UserFeed";

const UserProfile = ({ usernameURL }) => {
  const { data: session } = useSession();
  return (
    <div className="bg-gray-50 h-screen overflow-y-scroll scrollbar-hide">
      <Head>
        <title>{session?.user?.username} Instagram 2.0</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      {/* User Feed */}
      {/* {session && usernameURL === session.user.username ? (
        <UserFeed />
      ) : (
        <div className="flex justify-center mt-56">
          <h1 className="font-bold text-2xl">Please Sign In</h1>
        </div>
      )} */}

      {/* Modal */}
      <Modal />
    </div>
  );
};

export default UserProfile;

export async function getServerSideProps(context) {
  const usernameURL = context.query.userprofile;
  return {
    props: {
      session: await getSession(context),
      usernameURL,
    },
  };
}
