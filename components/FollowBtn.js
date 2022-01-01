import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  onSnapshot,
  setDoc,
} from "firebase/firestore";
import { useSession } from "next-auth/react";
import { useState } from "react";
import { useEffect } from "react/cjs/react.development";
import { db } from "../firebase";

const FollowBtn = ({ id }) => {
  const { data: session } = useSession();
  const [follows, setFollows] = useState([]);
  const [hasFollowed, setHasFollowed] = useState(false);

  const followUser = async () => {
    if (hasFollowed) {
      await deleteDoc(doc(db, "users", id, "follower", session.user.uid));
    } else {
      await setDoc(doc(db, "users", id, "follower", session.user.uid), {
        username: session.user.username,
      });
    }
  };

  useEffect(
    () =>
      onSnapshot(collection(db, "users", id, "follower"), (snapshot) => {
        setFollows(snapshot.docs);
      }),
    [db]
  );

  useEffect(
    () =>
      setHasFollowed(
        follows.findIndex((follow) => follow.id === session?.user?.uid) !== -1
      ),
    [follows]
  );

  return (
    <div>
      <button onClick={followUser} className="text-blue-400 text-sm font-bold">
        {hasFollowed ? "Unfollow" : "Follow"}
      </button>
    </div>
  );
};

export default FollowBtn;
