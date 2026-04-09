import { useState, useEffect, useRef } from "react";

export function useCountUp(target: number, active: boolean, duration = 2000) {
    const [count, setCount] = useState(0);
    const rafId = useRef<number | null>(null);
    const startTime = useRef<number | null>(null);

    useEffect(() => {
        if (!active) return;

        const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);

        const tick = (ts: number) => {
            if (!startTime.current) startTime.current = ts;
            const elapsed = ts - startTime.current;
            const progress = Math.min(elapsed / duration, 1);
            setCount(Math.round(easeOut(progress) * target));
            if (progress < 1) {
                rafId.current = requestAnimationFrame(tick);
            }
        };

        rafId.current = requestAnimationFrame(tick);
        return () => {
            if (rafId.current) cancelAnimationFrame(rafId.current);
            startTime.current = null;
        };
    }, [target, active, duration]);

    return count;
}
