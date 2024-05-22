import { useEffect } from "react";

interface IntersectionObserverOptions {
  root?: Element | Document | null;
  rootMargin?: string;
  threshold?: number | number[];
}

const useIntersectionObserver = (
  callback: (entry: IntersectionObserverEntry) => void,
  element: Element | null,
  options: IntersectionObserverOptions,
  enabled: boolean
): void => {
  useEffect(() => {
    if (!element || !enabled) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        callback(entry);
      });
    }, options);

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [element, options, enabled, callback]);
};

export default useIntersectionObserver;
