import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";
import { cn } from "@/lib/utils";

export function useInView<T extends HTMLElement>(threshold = 0.18) {
  const ref = useRef<T | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setShown(true);
            io.disconnect();
          }
        }
      },
      { threshold, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(node);
    return () => io.disconnect();
  }, [threshold]);

  return { ref, shown };
}

type RevealVariant = "rise" | "fade" | "scale" | "mask";

export function Reveal({
  children,
  delay = 0,
  as: Tag = "div",
  variant = "rise",
  className,
}: {
  children: ReactNode;
  delay?: number;
  as?: ElementType;
  variant?: RevealVariant;
  className?: string;
}) {
  const { ref, shown } = useInView<HTMLDivElement>();
  return (
    <Tag
      ref={ref}
      data-shown={shown}
      style={{ ["--reveal-delay" as string]: `${delay}ms` }}
      className={cn("reveal", `reveal-${variant}`, className)}
    >
      {children}
    </Tag>
  );
}

/**
 * Wraps a list of children and reveals them one after another with a shared
 * easing curve — no per-child delay bookkeeping at the call site.
 */
export function Stagger({
  children,
  step = 90,
  delay = 0,
  variant = "rise",
  as: Tag = "div",
  className,
}: {
  children: ReactNode;
  step?: number;
  delay?: number;
  variant?: RevealVariant;
  as?: ElementType;
  className?: string;
}) {
  const { ref, shown } = useInView<HTMLDivElement>(0.12);
  return (
    <Tag
      ref={ref}
      data-shown={shown}
      style={{
        ["--stagger-step" as string]: `${step}ms`,
        ["--reveal-delay" as string]: `${delay}ms`,
      }}
      className={cn("stagger", `stagger-${variant}`, className)}
    >
      {children}
    </Tag>
  );
}

/** Subtle vertical parallax driven by scroll position. */
export function useParallax<T extends HTMLElement>(strength = 0.06) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        const rect = node.getBoundingClientRect();
        const offset = (rect.top + rect.height / 2 - window.innerHeight / 2) * -strength;
        node.style.setProperty("--parallax", `${offset.toFixed(2)}px`);
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [strength]);

  return ref;
}

/**
 * Counts a numeric figure up once it scrolls into view. Text around the number
 * (%, +, " yrs") is preserved so statistics keep their editorial formatting.
 */
export function useCountUp(target: string, duration = 1600) {
  const { ref, shown } = useInView<HTMLParagraphElement>(0.4);
  const [value, setValue] = useState(target);

  useEffect(() => {
    if (!shown) return;
    const match = target.match(/[\d.,]+/);
    if (!match) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const raw = match[0];
    const decimals = raw.includes(".") ? (raw.split(".")[1] ?? "").length : 0;
    const end = Number(raw.replace(/,/g, ""));
    if (!Number.isFinite(end)) return;

    let frame = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 4);
      const current = (end * eased).toFixed(decimals);
      setValue(target.replace(raw, current));
      if (t < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [shown, target, duration]);

  useEffect(() => {
    const m = target.match(/[\d.,]+/);
    if (!m) return;
    const decimals = m[0].includes(".") ? (m[0].split(".")[1] ?? "").length : 0;
    setValue(target.replace(m[0], (0).toFixed(decimals)));
  }, [target]);

  return { ref, value };
}
