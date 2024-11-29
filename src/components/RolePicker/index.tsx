import { User } from "lucide-react";

export default function RolePickerContainer() {
  return (
    <section className="flex h-screen w-screen">
      <div className="bg-white h-screen w-1/2 flex items-center justify-center">
        <button className="lg:text-3xl font-bold text-white bg-primary px-5 py-2.5 rounded-2xl">
          Teacher
        </button>
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary p-5 rounded-full">
        <User className="size-12" />
      </div>
      <div className="bg-primary h-screen w-1/2 flex items-center justify-center">
        <button className="lg:text-3xl font-bold text-primary bg-white px-5 py-2.5 rounded-2xl">
          Student
        </button>
      </div>
    </section>
  );
}
