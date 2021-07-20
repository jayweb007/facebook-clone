import Image from "next/image";

function StoryProfileCard({ name, src }) {
  return (
    <div
      className="relative h-52 w-[120px] cursor-pointer  overflow-x p-3
    transition duration-200 ease-in hover:scale-105 hover:animate-pulse"
    >
      <div className="absolute h-[45px] w-[45px] rounded-full border-4 border-blue-500 z-50 top-3 left-3">
        <Image
          src={src}
          width={40}
          height={40}
          objectFit="cover"
          className="rounded-full"
        />
      </div>
      <Image
        src={src}
        layout="fill"
        className="object-cover filter brightness-75 rounded-2xl lg:rounded-3xl "
      />
      <p className="absolute z-50 top-[165px] left-0 right-0 px-1 self-center leading-tight text-left inline-block  text-white font-thin">
        {name}
      </p>
    </div>
  );
}

export default StoryProfileCard;
