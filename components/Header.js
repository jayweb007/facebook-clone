import Image from "next/image";
import {
  PlayIcon,
  FlagIcon,
  ShoppingCartIcon,
  SearchIcon,
} from "@heroicons/react/outline";
import {
  HomeIcon,
  UserGroupIcon,
  ViewGridIcon,
  ChatIcon,
  ChevronDownIcon,
  BellIcon,
} from "@heroicons/react/solid";
import HeaderIcon from "./HeaderIcon";
import { signOut, useSession } from "next-auth/client";

function Header() {
  const [session, loading] = useSession();

  return (
    <div className="flex sticky top-0 z-50 bg-white items-center p-2 md:px-5 shadow-md ">
      {/* Left */}
      <div className="flex items-center ">
        <Image
          src="https://links.papareact.com/5me"
          width={40}
          height={40}
          layout="fixed"
          className="cursor-pointer hover:opacity-90 "
        />
        <div className="flex items-center ml-2 p-2 bg-gray-100 rounded-full ">
          <SearchIcon className="h-6 text-gray-600 cursor-pointer hover:text-gray-400 " />
          <input
            className="hidden md:inline-flex bg-transparent ml-2 outline-none placeholder-gray-500 "
            type="text"
            placeholder="Search Facebook"
          />
        </div>
      </div>

      {/* Center */}
      <div className="flex justify-center flex-grow">
        <div className="flex space-x-6 md:space-x-2 ">
          <HeaderIcon active Icon={HomeIcon} />
          <HeaderIcon Icon={FlagIcon} />
          <HeaderIcon Icon={PlayIcon} />
          <HeaderIcon Icon={ShoppingCartIcon} />
          <HeaderIcon Icon={UserGroupIcon} />
        </div>
      </div>
      {/* Right */}
      <div className="flex items-center sm:space-x-2 justify-end ">
        <Image
          onClick={signOut}
          src={session.user.image}
          width="40"
          height="40"
          layout="fixed"
          className="cursor-pointer rounded-full hover:opacity-80 "
        />
        <p className=" font-normal pr-3 pl-1 hidden sm:inline-flex md:inline-flex ">
          {session.user.name}
        </p>
        <ViewGridIcon className="icon" />
        <ChatIcon className="icon" />
        <BellIcon className="icon" />
        <ChevronDownIcon className="icon" />
      </div>
    </div>
  );
}

export default Header;
