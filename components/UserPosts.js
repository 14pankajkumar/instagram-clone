import { collection, onSnapshot, query, where } from "firebase/firestore";
import { useSession } from "next-auth/react";
import { useState } from "react";
import { useEffect } from "react/cjs/react.development";
import { db } from "../firebase";
import UserPost from "./UserPost";

const UserPosts = () => {
  const [posts, setPosts] = useState([]);
  const { data: session } = useSession();

  useEffect(
    () =>
      onSnapshot(
        query(collection(db, "posts"), where("email", "==", `${session.user.email}`)),
        (snapshot) => {
          setPosts(snapshot.docs);
        }
      ),
    [db]
  );

  return (
    <div className="my-8 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify-center md:p-6 xl:p-6">
      {posts.map((post) => {
        return (
          <UserPost
            key={post.id}
            id={post.id}
            username={post.data().username}
            userImg={post.data().profileImg}
            image={post.data().image}
            caption={post.data().caption}
          />
        );
      })}
    </div>
  );
};

export default UserPosts;
