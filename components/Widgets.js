import { SearchIcon } from "@heroicons/react/outline";
import { DotsHorizontalIcon, VideoCameraIcon } from "@heroicons/react/solid";
import Contact from "./Contact";

const contacts = [
  { src: "https://links.papareact.com/f0p", name: "Jeff Bezoz" },
  { src: "https://links.papareact.com/kxk", name: "Elon Musk" },
  { src: "https://links.papareact.com/zvy", name: "Bill Gates" },
  { src: "https://links.papareact.com/snf", name: "Mark Zuckerberg" },
  { src: "https://links.papareact.com/d0c", name: "Harry Potter" },
  { src: "https://links.papareact.com/6gg", name: "The Queen" },
  { src: "https://links.papareact.com/r57", name: "James Bond" },
];

function Widgets() {
  return (
    <div className="hidden md:flex flex-col w-60 p-2 mt-5">
      <div className="flex items-center text-gray-500 mb-1 justify-between ">
        <h2 className="text-lg">Contacts</h2>
        <div className="flex">
          <VideoCameraIcon
            className=" p-1 h-8 w-8 text-gray-500 
                rounded-full cursor-pointer hover:bg-gray-200"
          />
          <SearchIcon
            className=" p-1 h-8 w-8 text-gray-500 
                rounded-full cursor-pointer hover:bg-gray-200"
          />
          <DotsHorizontalIcon
            className=" p-1 h-8 w-8 text-gray-500 
                rounded-full cursor-pointer hover:bg-gray-200"
          />
        </div>
      </div>

      {contacts.map((contact) => (
        <Contact key={contact.src} src={contact.src} name={contact.name} />
      ))}
    </div>
  );
}

export default Widgets;
