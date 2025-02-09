/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

interface TimerCircleProps {
  duration?: number;
  onComplete: () => void;
  setTimeLeft: React.Dispatch<React.SetStateAction<number>>;
  handleClickMultiplayer?: any;
}

export default function TimerCircle({
  duration = 10,
  onComplete,
  setTimeLeft,
  handleClickMultiplayer,
}: TimerCircleProps) {
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [setTimeLeft]);

  const renderTime = ({ remainingTime }: { remainingTime: number }) => {
    return (
      <div className="timer">
        <div className="value text-xl font-bold text-white">
          {remainingTime}
        </div>
      </div>
    );
  };

  useEffect(() => {
    if (!handleClickMultiplayer) return;
    const interval = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime === 1) {
          handleClickMultiplayer(Math.floor(Math.random() * 4));
        }
        return prevTime - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [handleClickMultiplayer, setTimeLeft]);

  return (
    <CountdownCircleTimer
      size={50}
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
