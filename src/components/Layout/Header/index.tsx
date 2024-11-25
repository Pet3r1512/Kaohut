import Sidebar from "../Sidebar";
import FullLogo from "../Logo/FullLogo";
import NavBar from "./NavBar";
import Settings from "./Settings";
import Auth from "./Auth";

export default function Header() {
  return (
    <section className="sticky top-0 z-30 !backdrop-filter !backdrop-blur-xl flex justify-center lg:h-24">
      <header className="p-5 max-w-[100rem] mx-auto flex items-center justify-between fixed w-full">
        <Sidebar />
        <div className="flex items-center gap-x-7">
          <FullLogo />
          <NavBar />
        </div>
        <div className="flex items-center gap-x-3.5">
          <Settings />
          <VerticalLine />
          <Auth />
        </div>
      </header>
    </section>
  );
}

function VerticalLine() {
  return <div className="w-0.5 h-8 dark:bg-white bg-black" />;
}
