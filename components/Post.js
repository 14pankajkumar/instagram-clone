import {
  BookmarkIcon,
  ChatIcon,
  DotsHorizontalIcon,
  EmojiHappyIcon,
  HeartIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/outline";
import { HeartIcon as HeartIconFilled } from "@heroicons/react/solid";

const Post = ({ id, username, userImg, image, caption }) => {
  return (
    <div className="bg-white my-7 border rounded-sm">
      {/* Headre */}
      <div className="flex items-center p-5">
        <img
          className="rounded-full h-12 w-12 object-contain border p-1 mr-3"
          src={userImg}
          alt=""
        />
        <p className="flex-1 font-bold">{username}</p>
        <DotsHorizontalIcon className="h-5" />
      </div>

      {/* image */}
      <img className="object-cover w-full" src={image} alt="" />

      {/* Buttons */}
      <div className="flex justify-between px-4 py-4">
      <div className="flex space-x-4">
        <HeartIcon className="btn" />
        <ChatIcon className="btn" />
        <PaperAirplaneIcon className="btn rotate-45" />
      </div>

      <BookmarkIcon className="btn"/>
      </div>

      {/* captions */}
      <p className="p-5 truncate">
        <span className="font-bold mr-1" >{username} </span>
        {caption}
      </p>

      {/* comments */}

      {/* input box */}
      <form className="flex items-center p-4">
        <EmojiHappyIcon className="h-7"/>
        <input
          placeholder="Add a comment..." 
          type="text" 
          className="border-none flex-1 focus:ring-0 outline-none" 
        />
        <button className="font-semibold">Post</button>
      </form>
    </div>
  );
};

export default Post;
