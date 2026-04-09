import { useEffect, useRef, useState } from "react";

interface ScrollTriggerOptions {
    threshold?: number;
    rootMargin?: string;
    resetOnExit?: boolean;
}

export function useMobileScrollTrigger<T extends HTMLElement>(
    optionsOrThreshold?: number | ScrollTriggerOptions
) {
    const options: ScrollTriggerOptions =
        typeof optionsOrThreshold === "number"
            ? { threshold: optionsOrThreshold }
            : optionsOrThreshold || {};

    const {
        threshold = 0.15,
        rootMargin = "0px 0px -15% 0px",
        resetOnExit = true
    } = options;

    const ref = useRef<T>(null);
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        let observer: IntersectionObserver | null = null;
        const mediaQuery = window.matchMedia("(max-width: 768px)");

        const handleMobileChange = (e: MediaQueryListEvent | MediaQueryList) => {
            if (e.matches) {
                startObserver();
            } else {
                stopObserver();
                setIsActive(false);
            }
        };

        const startObserver = () => {
            if (observer || !ref.current) return;

            observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        setIsActive(true);
                    } else if (resetOnExit) {
                        setIsActive(false);
                    }
                },
                { threshold, rootMargin }
            );
            observer.observe(ref.current);
        };

        const stopObserver = () => {
            if (observer) {
                observer.disconnect();
                observer = null;
            }
        };

        // Initial check
        handleMobileChange(mediaQuery);
        mediaQuery.addEventListener("change", handleMobileChange);

        return () => {
            mediaQuery.removeEventListener("change", handleMobileChange);
            stopObserver();
        };
    }, [threshold, rootMargin, resetOnExit]);

    return { ref, isActive };
}
