import Image from "next/image";

function StoryCard({ name, src, profile }) {
  return (
    <div
      className="relative h-52 w-[120px] cursor-pointer overflow-x p-3
    transition duration-200 ease-in hover:scale-105 hover:animate-pulse "
    >
      <div className="absolute h-[45px] w-[45px] rounded-full border-4 border-blue-500 z-50 top-3 left-3">
        <Image
          src={profile}
          width={40}
          height={40}
          objectFit="cover"
          className="rounded-full"
        />
      </div>
      <Image
        src={src}
        layout="fill"
        className="object-cover cursor-pointer filter brightness-75 rounded-2xl lg:rounded-3xl "
      />
      <p
        className="absolute z-50 top-[150px] left-3 text-sm break-words 
      lg:text-base lg:left-1 leading-tight text-white font-normal"
      >
        {name}
      </p>
    </div>
  );
}

export default StoryCard;
