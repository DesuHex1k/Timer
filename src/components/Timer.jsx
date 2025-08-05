import { useState, useEffect, useRef } from "react";

export default function Timer({ initialSeconds }) {
    const [secondsLeft, setSecondsLeft] = useState(initialSeconds);
    const [isRunning, setIsRunning] = useState(false);
    const intervalRef = useRef(null);
    const audioRef = useRef(null);

    const startTimer = () => {
        if (!isRunning) setIsRunning(true);
    };

    const pauseTimer = () => setIsRunning(false);

    const resetTimer = () => {
        setIsRunning(false);
        setSecondsLeft(initialSeconds);
    };

    useEffect(() => {
        if (isRunning) {
            intervalRef.current = setInterval(() => {
                setSecondsLeft((prev) => {
                    if (prev <= 1) {
                        clearInterval(intervalRef.current);
                        setIsRunning(false);
                        if (audioRef.current) {
                            audioRef.current.play();
                        }
                        alert("⏰ Time's up!");
                        return 0;
                    }
                    return prev - 1;
                });
            }, 1000);
        }
        return () => clearInterval(intervalRef.current);
    }, [isRunning]);

    const formatTime = (totalSeconds) => {
        const hrs = Math.floor(totalSeconds / 3600);
        const mins = Math.floor((totalSeconds % 3600) / 60);
        const secs = totalSeconds % 60;

        if (hrs > 0) {
            return `${String(hrs).padStart(2, "0")}:${String(mins).padStart(
                2,
                "0"
            )}:${String(secs).padStart(2, "0")}`;
        } else {
            return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
        }
    };

    return (
        <div className="flex flex-col items-center mt-8 fade-in">
            <audio ref={audioRef} src="/sounds/alarm.mp3" preload="auto" />
            <div className="text-6xl font-extrabold mb-6 text-blue-600 select-none">
                {formatTime(secondsLeft)}
            </div>
            <div className="flex space-x-4">
                <button
                    onClick={startTimer}
                    className="px-6 py-2 bg-green-500 hover:bg-green-600 text-white rounded-md transition"
                >
                    Start
                </button>
                <button
                    onClick={pauseTimer}
                    className="px-6 py-2 bg-yellow-400 hover:bg-yellow-500 text-white rounded-md transition"
                >
                    Pause
                </button>
                <button
                    onClick={resetTimer}
                    className="px-6 py-2 bg-red-500 hover:bg-red-600 text-white rounded-md transition"
                >
                    Reset
                </button>
            </div>
        </div>
    );
}
