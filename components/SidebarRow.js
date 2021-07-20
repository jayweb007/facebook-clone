import Image from "next/image";

function SidebarRow({ src, Icon, title }) {
  return (
    <div className="flex items-center p-2 space-x-2 cursor-pointer hover:bg-gray-200 rounded-lg ">
      {src && (
        <Image
          src={src}
          width={30}
          height={30}
          layout="fixed"
          className="cursor-pointer rounded-full"
        />
      )}
      {Icon && <Icon className="h-8 w-8 text-blue-500" />}
      <p className="hidden sm:inline-flex font-medium">{title}</p>
    </div>
  );
}

export default SidebarRow;
