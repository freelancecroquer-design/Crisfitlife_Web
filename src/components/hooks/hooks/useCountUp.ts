import { useState, useEffect, useRef } from "react";

/**
 * Animates a number from 0 to `target` over `duration` ms.
 * Starts when `inView` becomes true.
 */
export function useCountUp(target: number, inView: boolean, duration = 2000): number {
    const [count, setCount] = useState(0);
    const startedRef = useRef(false);

    useEffect(() => {
        if (!inView || startedRef.current) return;
        startedRef.current = true;

        const startTime = performance.now();
        const step = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.round(eased * target));
            if (progress < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
    }, [inView, target, duration]);

    return count;
}
