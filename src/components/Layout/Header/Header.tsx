import ThemeToggle from "@/components/Theme/ThemeToggle";
import Link from "next/link";
import Sidebar from "../Sidebar";
import FullLogo from "../Logo/FullLogo";

export default function Header() {
  return (
    <header className="p-5 max-w-7xl mx-auto">
      <Sidebar />
      <FullLogo />
    </header>
  );
}
