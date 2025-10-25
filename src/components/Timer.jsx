import { useEffect, useRef, useState } from "react";
import { Modal } from "./Modal";
import "../modal.css";

export const Timer = () => {
    const [seconds, setSeconds] = useState(10);
    const [isRunning, setIsRunning] = useState(true);
    const timerRef = useRef(null);

    useEffect(() => {
        if (isRunning && seconds > 0) {
            timerRef.current = setInterval(() => {
                setSeconds(prevSeconds => {
                    if (prevSeconds <= 1) {
                        clearInterval(timerRef.current);
                        setIsRunning(false);
                        return 0;
                    }
                    return prevSeconds - 1;
                });
            }, 1000);
        }

        return () => {
            if (timerRef.current) {
                clearInterval(timerRef.current);
            }
        };
    }, [seconds, isRunning]);

   

    return (
        <div>
            <p>Time remaining: {seconds} seconds left</p>
            {seconds === 0 && (
                <>
                    <p>Time's up!</p>
                </>
            )}
            <Modal isRunning={isRunning} />
        </div>
    );
}