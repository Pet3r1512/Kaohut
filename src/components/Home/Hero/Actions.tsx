import StartNowBtn from "./Actions/StartNowBtn";
import ExploreBtn from "./Actions/ExploreBtn";

export default function Actions() {
  return (
    <div
      data-testid="actions-btns"
      className="flex items-center gap-x-5 font-semibold"
    >
      <StartNowBtn />
      <ExploreBtn />
    </div>
  );
}
