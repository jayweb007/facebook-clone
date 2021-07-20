import { useSession } from "next-auth/client";
import StoryCard from "./StoryCard";
import StoryProfileCard from "./StoryProfileCard";

const stories = [
  {
    id: 2,
    name: "Dayo Buttons",
    src: "https://links.papareact.com/4zn",
    profile: "https://links.papareact.com/kxk",
  },
  {
    id: 3,
    name: "Kelechi Ophara Fashion",
    src: "https://links.papareact.com/k2j",
    profile: "https://links.papareact.com/f0p",
  },
  {
    id: 4,
    name: "Mary Jane",
    src: "https://links.papareact.com/xql",
    profile: "https://links.papareact.com/xql",
  },
  {
    id: 5,
    name: "Martha Benson",
    src: "https://links.papareact.com/4u4",
    profile: "https://links.papareact.com/zvy",
  },
];

function Stories() {
  const [session] = useSession();
  return (
    <div className="flex justify-center space-x-3 mx-auto ">
      <StoryProfileCard src={session.user.image} name={session.user.name} />
      {stories.map((story) => (
        <StoryCard
          key={story.id}
          name={story.name}
          src={story.src}
          profile={story.profile}
        />
      ))}
    </div>
  );
}

export default Stories;
