import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/play/multi/$quizId/")({
  component: RouteComponent,
});

function RouteComponent() {
  const { quizId } = Route.useParams();

  return (
    <section className="p-5 flex flex-col h-screen w-screen bg-gradient-to-br from-[#d9a7c7] via-[#e1eec3] to-[#fffcdc] justify-center items-center text-white">
      <div className="flex flex-col justify-center size-4/5 rounded-2xl shadow-2xl bg-[#669bbc] p-5 lg:p-10 gap-y-5 lg:gap-y-10">
        <p className="lg:text-7xl font-bold italic">Multiplayer Mode</p>
        <p className="lg:text-xl font-semibold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione vel
          corrupti aperiam magnam, quisquam cumque id alias natus possimus
          perferendis voluptate repellat perspiciatis? Sunt esse distinctio
          exercitationem beatae dolorum accusantium.
        </p>
        <div className="flex flex-col bg-white text-primary p-3.5 rounded-xl">
          <div className="flex items-center justify-between">
            <p className="lg:text-3xl font-extrabold">This is Quiz Name</p>
            <Link
              to={`/play/multi/${quizId}/waiting`}
              className="lg:text-xl font-bold bg-secondary px-3.5 py-2 rounded-xl text-white lg:hover:bg-secondary/80 transition-all duration-150 ease-linear"
            >
              Create Room
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
