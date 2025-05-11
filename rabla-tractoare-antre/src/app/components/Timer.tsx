'use client';
import { useEffect, useState, createContext, useContext } from "react"
import { TimerIcon } from "../icons/timerIcon";

interface TimerContextType {
  time: number;
  running: boolean;
  startTimer: () => void;
  stopTimer: () => void;
  resetTimer: () => void;
  format: (time: number) => string;
}

const TimerContext = createContext<TimerContextType | null>(null);

export const useTimer = (): TimerContextType => {
  const context = useContext(TimerContext);
  if (!context) {
    throw new Error("useTimer must be used within a TimerProvider");
  }
  return context;
};

export default function Timer({ children }: { children: React.ReactNode }) {
  const [time, setTime] = useState(0);
  const [running, setIsRunning] = useState(true);

  const resetTimer = () => {
    setTime(0);
    setIsRunning(true);
  };

  const stopTimer = () => {
    setIsRunning(false);
  };

  const startTimer = () => {
    setIsRunning(true);
  };

  const format = (time: number) => {
    let minutes: string | number = Math.floor(time / 60);
    let seconds: string | number = Math.floor(time % 60);

    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    return minutes + ':' + seconds;
  };

  const bg = running ? 'bg-nextRed' : 'bg-primaryGreen';

  useEffect(() => {
    let interval: NodeJS.Timeout | undefined;

    if (running) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else if (!running && interval) {
      clearInterval(interval);
      interval = undefined;
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [running]);

  return (
    <TimerContext.Provider value={{ time, running, startTimer, stopTimer, resetTimer, format }}>
      <div className="w-full flex flex-col items-center">
        <div className={`${bg} fixed py-2 px-5 pl-2 pr-4 rounded-full border-[2px] border-neutral-200 top-5 left-5 flex justify-between items-center gap-4 z-50`}>
          <div className="py-3 px-3 bg-white/20 rounded-full">
            <TimerIcon width="32" height="32" color="#ffffff" />
          </div>
          <div className="flex flex-row gap-2">
            <div className="flex flex-row justify-center items-center py-2 pr-1 text-2xl">
              <p className="text-white">{format(time)}</p>
            </div>
          </div>
        </div>
        {children}
      </div>
    </TimerContext.Provider>
  );
}
