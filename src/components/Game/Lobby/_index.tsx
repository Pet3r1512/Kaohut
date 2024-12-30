import Pin from "./Pin";
import Settings from "./Settings";
import Waiting from "./Waiting";

export default function Lobby() {
  return (
    <section className="p-5 flex flex-col h-screen w-screen bg-[url('/images/bricks_dark.png')] bg-cover">
      <Pin pin="123 456" />
      <Waiting />
      <Settings />
    </section>
  );
}
