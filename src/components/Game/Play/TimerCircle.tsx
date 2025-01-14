import { CountdownCircleTimer } from "react-countdown-circle-timer";

interface TimerCircleProps {
  duration?: number;
  onComplete: () => void;
}

export default function TimerCircle({
  duration = 10,
  onComplete,
}: TimerCircleProps) {
  const renderTime = ({ remainingTime }: { remainingTime: number }) => {
    return (
      <div className="timer">
        <div className="value text-3xl font-bold text-white">
          {remainingTime}
        </div>
      </div>
    );
  };

  return (
    <CountdownCircleTimer
      size={75}
      isPlaying
      duration={duration}
      colors={["#38b000", "#F7B801", "#A30000", "#A30000"]}
      colorsTime={[10, 6, 3, 0]}
      onComplete={() => {
        onComplete();
        return { shouldRepeat: false };
      }}
    >
      {renderTime}
    </CountdownCircleTimer>
  );
}
