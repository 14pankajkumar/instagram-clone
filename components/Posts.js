import Post from "./Post";

const Posts = () => {
  const url =
    "https://scontent.fdel25-2.fna.fbcdn.net/v/t1.6435-9/163513282_1764300493774796_226045888999478509_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=8CWYfdGdyg0AX9ASC0I&_nc_ht=scontent.fdel25-2.fna&oh=6d47c8aab4a74f799d8ae34316afdbca&oe=61DDB574";
  const posts = [
    {
      id: "123",
      username: "pankaj",
      userimage: url,
      image: url,
      caption: "This is DOPE",
    },
    {
      id: "123",
      username: "pankaj",
      userimage: url,
      image: url,
      caption: "This is DOPE",
    },
    {
      id: "123",
      username: "pankaj",
      userimage: url,
      image: url,
      caption: "This is DOPE",
    },
    {
      id: "123",
      username: "pankaj",
      userimage: url,
      image: url,
      caption: "This is DOPE",
    },
    {
      id: "123",
      username: "pankaj",
      userimage: url,
      image: url,
      caption: "This is DOPE",
    },
  ];
  return (
    <div>
      {posts.map((post) => {
        return (
          <Post
            key={post.id}
            id={post.id}
            username={post.username}
            userImg={post.userimage}
            image={post.image}
            caption={post.caption}
          />
        );
      })}
    </div>
  );
};

export default Posts;
