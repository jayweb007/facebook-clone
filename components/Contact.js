import Image from "next/image";

function Contact({ src, name }) {
  return (
    <div
      className="relative flex items-center space-x-3
    cursor-pointer p-2 rounded-md hover:bg-gray-200 "
    >
      <Image
        className="rounded-full"
        objectFit="cover"
        src={src}
        width={35}
        height={35}
        layout="fixed"
      />
      <p className="text-sm font-normal">{name}</p>
      <div
        className="absolute bottom-2 left-5 bg-green-500 
      h-2 w-2 rounded-full border-white border "
      />
    </div>
  );
}

export default Contact;
