import Head from "next/head";
import Header from "../components/Header";

const Home = () => {
  return (
    <div className="">
      <Head>
        <title>Instagram 2.0</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>This is instagram 2.0</h1>

      {/* Header */}
      <Header />

      {/* Feed */}

      {/* Modal */}
    </div>
  );
};

export default Home;
