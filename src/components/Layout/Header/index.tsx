import Authentication from "./Authentication";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <section className="sticky top-0 z-30 !backdrop-filter !backdrop-blur-xl flex justify-center lg:h-24">
      <header className="p-5 max-w-[100rem] mx-auto flex items-center justify-between fixed w-full">
        <Sidebar />
        {/* <FullLogo className="lg:hidden" /> */}
        <div className="lg:flex items-center gap-x-7 hidden">
          {/* <FullLogo /> */}
          <Navbar />
        </div>
        <div className="lg:flex items-center gap-x-3.5 hidden">
          {/* <Settings />
          <VerticalLine /> */}
          <Authentication />
        </div>
      </header>
    </section>
  );
}

function VerticalLine() {
  return <div className="w-0.5 h-8 dark:bg-white bg-black" />;
}
