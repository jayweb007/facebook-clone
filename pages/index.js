import Head from "next/head";
import Header from "../components/Header";
import { getSession } from "next-auth/client";
import Login from "../components/Login";
import SideBar from "../components/SideBar";
import Feed from "../components/Feed";
import Widgets from "../components/Widgets";
import { db } from "../firebase";

export default function Home({ session, posts }) {
  if (!session) return <Login />;

  return (
    <div className="h-screen bg-gray-100 overflow-hidden">
      <Head>
        <title>Facebook-clone by Jayweb007</title>
        <link rel="icon" href="/jayweb.png" />
      </Head>

      {/* MAINBODY */}
      {/* Header */}
      <Header />
      <main className="flex">
        <SideBar />

        <Feed posts={posts} />
        <Widgets />
      </main>
      {/* MAINBODY END*/}
    </div>
  );
}

export async function getServerSideProps(context) {
  //Get the user
  const session = await getSession(context);

  //For fast load of POSTS from firestore Database
  const posts = await db.collection("posts").orderBy("timestamp", "desc").get();

  const docs = posts.docs.map((post) => ({
    id: post.id,
    ...post.data(),
    timestamp: null,
  }));

  return {
    props: {
      session,
      posts: docs,
    },
  };
}
