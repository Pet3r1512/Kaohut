import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ReactNode } from "@tanstack/react-router";

export type RoleCardProps = {
  id: string;
  title: string;
  color: string;
  bgColor: string;
  titleHoverBg: string;
  icon: ReactNode;
};

export default function RoleCard({ props }: { props: RoleCardProps }) {
  const { id, title, bgColor, color, icon, titleHoverBg } = props;
  return (
    <Card
      key={id}
      className="cursor-pointer lg:hover:scale-105 transition-all duration-150 ease-linear group flex flex-row md:flex-col"
    >
      <CardHeader
        className={`w-1/3 md:w-full flex justify-center items-center ${color} lg:group-hover:p-0 p-4 lg:rounded-t-lg md:h-36 lg:h-48 transition-all duration-150 ease-linear`}
      >
        <div
          className={cn(
            "rounded-full lg:group-hover:rounded-none lg:group-hover:rounded-t-lg lg:group-hover:size-full lg:group-hover:p-10 transition-all duration-150 ease-linear p-2 md:p-3.5 lg:p-6 text-white flex items-center justify-center",
            bgColor,
          )}
        >
          {icon}
        </div>
      </CardHeader>
      <CardContent
        className={`text-center p-4 ${titleHoverBg} rounded-b-lg lg:group-hover:text-white transition-all duration-150 ease-linear flex items-center justify-center`}
      >
        <CardTitle>{title}</CardTitle>
      </CardContent>
    </Card>
  );
}
