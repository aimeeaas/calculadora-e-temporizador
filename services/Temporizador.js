import React, { useState } from "react";
import { useRef } from 'react';

export default function Temporizador() {
    const [time, setTime] = useState(0);
    const [running, setRunning] = useState(false);
    const intervalRef = useRef(null);

    const startTimer = () => {
        if (!running) {
            setRunning(true);
            intervalRef.current = setInterval(() => {
                setTime(prev => prev + 1);
            }, 1000);
        }
    };

    const stopTimer = () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }

        setRunning(false);
    };

    const resetTimer = () => {
        stopTimer();
        setTime(0);
    };

    const formatTimer = (seconds) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;

        return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`
    };

    return { time,running, startTimer, stopTimer, resetTimer, formatTimer};
}