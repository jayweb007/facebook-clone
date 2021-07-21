import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "../firebase";
import Post from "./Post";

function Posts({ posts }) {
  const [realtimePosts] = useCollection(
    db.collection("posts").orderBy("timestamp", "desc")
  );

  return (
    <div>
      {realtimePosts
        ? realtimePosts?.docs.map((post) => (
            <Post
              key={post.id}
              id={post.id}
              name={post.data().name}
              email={post.data().email}
              message={post.data().message}
              image={post.data().image}
              likeicon={post.data().like}
              timestamp={post.data().timestamp}
              postImage={post.data().postImage}
            />
          ))
        : posts.map((post) => (
            <Post
              key={post.id}
              id={post.id}
              name={post.name}
              email={post.email}
              message={post.message}
              image={post.image}
              likeicon={post.like}
              timestamp={post.timestamp}
              postImage={post.postImage}
            />
          ))}
    </div>
  );
}

export default Posts;
