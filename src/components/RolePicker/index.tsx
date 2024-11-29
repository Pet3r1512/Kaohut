import { ArrowLeftRight, User } from "lucide-react";
import { useState } from "react";
import Rights from "./Rights";
import { cn } from "@/lib/utils";

export default function RolePickerContainer() {
  const [role, setRole] = useState<"teacher" | "student" | null>(null);

  return (
    <section className="flex h-screen w-screen">
      <div className="bg-white h-screen w-1/2 flex items-center justify-center">
        {role !== null && role === "student" && (
          <Rights className="text-primary" role={role} />
        )}
        <button
          onClick={() => {
            setRole("teacher");
          }}
          className={cn(
            "lg:text-3xl font-bold text-white bg-primary px-5 py-2.5 rounded-2xl transition-transform duration-700",
            role === "student" ? "hidden" : "block",
            role === "teacher"
              ? "text-white translate-y-[-25vh]"
              : "text-white bg-primary",
          )}
        >
          Teacher
        </button>
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary p-5 rounded-full transition-all duration-500 ease-linear">
        {role === null ? (
          <User className="size-12 !text-white" />
        ) : (
          <ArrowLeftRight
            onClick={() => {
              setRole(role === "student" ? "teacher" : "student");
            }}
            className="size-12 !text-white"
          />
        )}
      </div>
      <div className="bg-primary h-screen w-1/2 flex items-center justify-center">
        {role !== null && role === "teacher" && (
          <Rights className="text-white" role={role} />
        )}
        <button
          onClick={() => {
            setRole("student");
          }}
          className={cn(
            "lg:text-3xl font-bold text-primary bg-white px-5 py-2.5 rounded-2xl transition-transform duration-700",
            role === "teacher" ? "hidden" : "block",
            role === "student"
              ? "text-primary translate-y-[-25vh]"
              : "text-primary bg-white",
          )}
        >
          Student
        </button>
      </div>
    </section>
  );
}
