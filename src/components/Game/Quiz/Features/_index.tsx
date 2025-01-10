import { CirclePlus, LayoutPanelTop } from "lucide-react";
import FeatureCard, { Feature } from "./FeatureCard";

export default function Features() {
  const ICON_SIZE = 56;
  const features: Feature[] = [
    {
      name: "Create Quiz",
      desc: "Create fun, interactive quizzes to enage and inspire learning",
      icon: <CirclePlus size={ICON_SIZE} />,
      href: "",
      className: "bg-[#6d23b6]",
      mainColor: "#6d23b6",
    },
    {
      name: "Choose Template",
      desc: "Use templates for quick and easy Kaohut Quiz creation",
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
