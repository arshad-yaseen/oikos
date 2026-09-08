"use client";

import { type ComponentProps, useEffect, useRef } from "react";

export type CodeBlockViewportProps = Omit<ComponentProps<"div">, "ref">;

const UNLOCK_DELAY = 150;

/** Drops pointer events while the page scrolls, so a trackpad gesture is never trapped inside. */
export function Viewport(props: CodeBlockViewportProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) {
      return;
    }

    let timer = 0;
    const unlock = () => {
      element.style.pointerEvents = "";
    };
    const handleScroll = () => {
      element.style.pointerEvents = "none";
      clearTimeout(timer);
      timer = window.setTimeout(unlock, UNLOCK_DELAY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timer);
      unlock();
    };
  }, []);

  return <div ref={ref} {...props} />;
}
