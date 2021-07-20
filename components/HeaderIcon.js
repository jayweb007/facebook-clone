function HeaderIcon({ Icon, active }) {
  return (
    <div
      className={`flex items-center cursor-pointer md:px-10 sm:h-12 
      rounded-lg md:hover:bg-gray-100 active:border-b-2 active:border-blue-500 group 
      ${active && "md:border-b-2 md:border-blue-500"}`}
    >
      <Icon
        className={`h-6 sm:h-7 mx-auto text-gray-500 group-hover:text-blue-500 ${
          active && "text-blue-500"
        }`}
      />
    </div>
  );
}

export default HeaderIcon;
