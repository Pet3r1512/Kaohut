import ThemeToggle from "@/components/Theme/ThemeToggle";
import Sidebar from "../Sidebar";
import FullLogo from "../Logo/FullLogo";
import NavBar from "./NavBar";

export default function Header() {
  return (
    <header className="p-5 max-w-[100rem] mx-auto bg-white flex items-center">
      <Sidebar />
      <div className="flex items-center gap-x-7">
        <FullLogo />
        <NavBar />
      </div>
    </header>
  );
}
