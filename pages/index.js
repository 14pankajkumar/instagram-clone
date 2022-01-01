import {
  addDoc,
  collection,
  doc,
  getDoc,
  onSnapshot,
  query,
  setDoc,
  where,
} from "firebase/firestore";
import { getSession, useSession } from "next-auth/react";
import Head from "next/head";
import { useEffect, useState } from "react";
import Feed from "../components/Feed";
import Header from "../components/Header";
import MenuModal from "../components/MenuModal";
import Modal from "../components/Modal";
import { db } from "../firebase";

const Home = ({ docSnap }) => {
  const { data: session } = useSession();

  useEffect(async () => {
    if (!session) return;

    // to get a sigle document
    const docRef = doc(db, "users", session.user.uid);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      // console.log("Document Data", docSnap.data());
      return;
    } else {
      const userRef = collection(db, "users");
      await setDoc(doc(userRef, session.user.uid), {
        username: session.user.username,
        email: session.user.email,
        name: session.user.name,
        profileImg: session.user.image,
      });
    }
  }, [db]);

  return (
    <div className="bg-gray-50 h-screen overflow-y-scroll scrollbar-hide">
      <Head>
        <title>Instagram 2.0</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <Header />

      {/* Feed */}
      <Feed />

      {/* Modal */}
      <Modal />

      {/* menu modal */}
      <MenuModal />
    </div>
  );
};

export default Home;

export async function getServerSideProps(context) {
  return {
    props: {
      session: await getSession(context),
    },
  };
}
