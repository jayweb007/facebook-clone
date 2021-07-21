import Image from "next/image";
import { PlusCircleIcon } from "@heroicons/react/solid";

function StoryProfileCard({ name, src }) {
  return (
    <div
      className="relative h-52 w-[120px] cursor-pointer  overflow-x p-3
    transition duration-200 ease-in hover:scale-105 hover:animate-pulse"
    >
      <div className="absolute h-[35px] w-[35px] z-50 bottom-[30px] left-[26px] lg:left-[42px] rounded-full border-none border-blue-500 ">
        {/* <Image
          src={src}
          width={30}
          height={30}
          objectFit="cover"
          className="rounded-full"
        /> */}
        <PlusCircleIcon className=" h-[35px] w-[35px] border-2 bg-white border-gray-50 rounded-full text-blue-600 " />
      </div>
      <Image
        src={src}
        layout="fill"
        className="object-cover filter brightness-75 rounded-2xl lg:rounded-3xl "
      />
      <div className="absolute z-1 bottom-0 left-0 rounded-bl-2xl rounded-br-2xl h-[50px] w-full bg-white">
        <p className="ml-[8px] mt-[24px] text-xs break-words lg:text-sm lg:ml-[18px] leading-tight text-black font-semibold">
          Create Story
        </p>
      </div>
      {/* <p
        className="absolute z-50 top-[150px] left-3 text-sm break-words 
      lg:text-base lg:left-1 leading-tight text-white font-normal"
      >
        {name}
      </p> */}
    </div>
  );
}

export default StoryProfileCard;
