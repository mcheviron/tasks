import Card from "./Card";
import Image from "next/image";
import logo from "@/assets/images/logo.png";
import SidebarLink from "./SidebarLink";

type Icon = "Settings" | "User" | "Grid" | "Calendar";
export interface LinkInterface {
  label: string;
  icon: Icon;
  link: string;
}

const links = [
  { label: "Home", icon: "Grid" as Icon, link: "/home" },
  { label: "Calendar", icon: "Calendar" as Icon, link: "/calendar" },
  { label: "Profile", icon: "User" as Icon, link: "/profile" },
  { label: "Settings", icon: "Settings" as Icon, link: "/settings" },
];

const Sidebar = () => {
  return (
    <Card className="h-full w-40 flex items-center justify-between flex-wrap">
      <div className="w-full flex justify-center items-center">
        <Image src={logo} alt="Able logo" priority className="w-14" />
      </div>
      {links.map((link, index) => (
        <SidebarLink key={index} {...link} />
      ))}
    </Card>
  );
};

export default Sidebar;
