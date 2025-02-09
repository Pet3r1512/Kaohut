import { CirclePlus, LayoutPanelTop, Play } from "lucide-react";
import FeatureCard, { Feature } from "./FeatureCard";

export default function Features() {
  const ICON_SIZE = 56;
  const features: Feature[] = [
    {
      name: "play",
      desc: "",
      icon: <Play size={ICON_SIZE} />,
      href: "/play/join/game",
      className: "bg-[#fb8500]",
      mainColor: "#fb8500",
    },
    {
      name: "create",
      desc: "",
      icon: <CirclePlus size={ICON_SIZE} />,
      href: "",
      className: "bg-[#6d23b6]",
      mainColor: "#6d23b6",
    },
    {
      name: "template",
      desc: "",
      icon: <LayoutPanelTop size={ICON_SIZE} />,
      href: "",
      className: "bg-[#006d77]",
      mainColor: "#006d77",
    },
  ];
  return (
    <div className="flex flex-col md:flex-row md:items-center gap-5 max-w-full">
      {features.map((feat: Feature, index: number) => {
        return <FeatureCard feature={feat} key={index} />;
      })}
    </div>
  );
}
