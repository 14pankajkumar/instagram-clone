import { getSession, useSession } from "next-auth/react";
import Head from "next/head";
import { useRouter } from "next/router";
import Header from "../components/Header";
import MenuModal from "../components/MenuModal";
import Modal from "../components/Modal";
import UserFeed from "../components/UserFeed";

const UserProfile = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const { userprofile } = router.query;

  return (
    <div className="bg-gray-50 h-screen overflow-y-scroll scrollbar-hide">
      <Head>
        <title>{userprofile || session?.user?.username} - Instagram 2.0</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      {/* User Feed */}
      {session && session.user.username === userprofile ? (
        <UserFeed />
      ) : (
        <div className="flex justify-center mt-56">
          <h1 className="font-bold text-2xl">Please Sign In</h1>
        </div>
      )}

      {/* Modal */}
      <Modal />

      {/* menu modal */}
      <MenuModal />
    </div>
  );
};

export default UserProfile;

export async function getServerSideProps(context) {
  return {
    props: {
      session: await getSession(context),
    },
  };
}
