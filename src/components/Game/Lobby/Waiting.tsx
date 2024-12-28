export default function Waiting() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center">
      <div className="p-3 rounded-xl bg-red-400 w-fit">
        <p className="text-white text-2xl font-bold cursor-default">
          Waiting for players...
        </p>
      </div>
    </div>
  );
}
