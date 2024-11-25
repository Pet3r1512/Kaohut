import Sidebar from "../Sidebar";
import FullLogo from "../Logo/FullLogo";
import NavBar from "./NavBar";
import Settings from "./Settings";

export default function Header() {
  return (
    <header className="p-5 max-w-[100rem] mx-auto flex items-center justify-between">
      <Sidebar />
      <div className="flex items-center gap-x-7">
        <FullLogo />
        <NavBar />
      </div>
      <Settings />
    </header>
  );
}
