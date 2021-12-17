import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { getSession } from "next-auth/react";
import Head from "next/head";
import { useState } from "react";
import Feed from "../components/Feed";
import Header from "../components/Header";
import Modal from "../components/Modal";
import { db } from "../firebase";

const Home = () => {
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
