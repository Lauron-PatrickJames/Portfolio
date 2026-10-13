import { useEffect, useRef, useState } from "react";

const options: IntersectionObserverInit = {
  threshold: 0.15,
  rootMargin: "0px 0px -40px 0px"
};

/** Returns a ref and whether the element has scrolled into view (once). */
export function useReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [visible, setVisible] = useState(
    () => typeof window !== "undefined" && !("IntersectionObserver" in window)
  );

  useEffect(() => {
    const element = ref.current;
    if (!element || visible) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true);
        observer.disconnect();
      }
    }, options);

    observer.observe(element);
    return () => observer.disconnect();
  }, [visible]);

  return { ref, visible };
}
