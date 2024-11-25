import Sidebar from "../Sidebar";
import FullLogo from "../Logo/FullLogo";
import NavBar from "./NavBar";
import Settings from "./Settings";

export default function Header() {
  return (
    <section className="sticky top-0 z-30 !backdrop-filter !backdrop-blur-xl flex justify-center lg:h-24">
      <header className="p-5 max-w-[100rem] mx-auto flex items-center justify-between fixed w-full">
        <Sidebar />
        <div className="flex items-center gap-x-7">
          <FullLogo />
          <NavBar />
        </div>
        <Settings />
      </header>
    </section>
  );
}
