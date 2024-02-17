'use client';

import { useCallback, useMemo, useState } from "react";

const useIntersectionObserver = (
    root: Element | null = null,
    rootMargin: string = "0px",
    threshold: number = 1.0
): { isIntersecting: boolean , observer: IntersectionObserver } => {

    const [isIntersecting, setIsIntersecting] = useState<boolean>(false);

    /*
        - root: if null, the browser viewport is specified automatically
        - rootMargin: the margin around the root element
        - threshold: indicated at what percentage (0.1 means 10%) of the target's visibility the observer's callback should be executed
    */
    let options: IntersectionObserverInit = useMemo(() => ({ root, rootMargin, threshold }), [root, rootMargin, threshold]);

    /*
        The callback function is called when these circumstances occur:
        - The target element intersects either the device's viewport or a specified element
        - The first time the observer is invoked to observe a target element
    */
    const callback = useCallback((entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
        entries.forEach((entry: IntersectionObserverEntry) => {
            setIsIntersecting(entry.isIntersecting);
        });
    }, []);

    return {
        observer: new IntersectionObserver(callback, options),
        isIntersecting
    }
};

export default useIntersectionObserver;