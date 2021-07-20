import InputBox from "./InputBox";
import Posts from "./Posts";
import Stories from "./Stories";

function Feed({ posts }) {
  return (
    <div
      className="flex-grow h-screen pb-44 pt-6 mx-1 xl:mr-28 
    overflow-y-auto scrollbar-hide"
    >
      <div className="mx-auto max-w-[500px] md:max-w-lg lg:max-w-2xl ">
        <Stories />
        <div className="mx-5">
          <InputBox />
          <Posts posts={posts} />
        </div>
      </div>
    </div>
  );
}

export default Feed;
