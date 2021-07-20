import { useSession } from "next-auth/client";
import {
  UserGroupIcon,
  ChevronDownIcon,
  ShoppingBagIcon,
} from "@heroicons/react/outline";
import {
  CalendarIcon,
  DesktopComputerIcon,
  UsersIcon,
  ClockIcon,
} from "@heroicons/react/solid";
import SidebarRow from "./SidebarRow";

function SideBar() {
  const [session] = useSession();

  return (
    <div className="hidden p-2 mt-5 max-w-[600px] xl:inline xl:min-w-[300px]">
      <SidebarRow src={session.user.image} title={session.user.name} />
      <SidebarRow Icon={UsersIcon} title="Friends" />
      <SidebarRow Icon={UserGroupIcon} title="Groups" />
      <SidebarRow Icon={ShoppingBagIcon} title="Marketplace" />
      <SidebarRow Icon={DesktopComputerIcon} title="Watch" />
      <SidebarRow Icon={CalendarIcon} title="Events" />
      <SidebarRow Icon={ClockIcon} title="Memories" />
      <SidebarRow Icon={ChevronDownIcon} title="See More" />
    </div>
  );
}

export default SideBar;
