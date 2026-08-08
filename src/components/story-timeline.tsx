import { useEffect, useRef, useState } from "react";
import { Reveal } from "@/components/reveal";

type Chapter = {
  year: string;
  label: string;
  title: string;
  body: string;
  marker: string;
};

const chapters: Chapter[] = [
  {
    year: "01",
    label: "Chapter one",
    title: "It started with automation.",
    body: "Fusionify Bot was built to run digital commerce operations that people were doing by hand — orders, resellers, payments and reporting across Telegram and WhatsApp. Volume made the requirement obvious: the infrastructure underneath had to be treated as a product.",
    marker: "Fusionify Bot",
  },
  {
    year: "02",
    label: "Chapter two",
    title: "Payments became the second layer.",
    body: "Automated commerce is only as reliable as the money movement behind it. FTV Pay was built as payment infrastructure — collection, disbursement, settlement and reconciliation — first for our own platform, then for the organisations building on it.",
    marker: "FTV Pay",
  },
  {
    year: "03",
    label: "Chapter three",
    title: "The engineering practice opened.",
    body: "Clients asked for the systems, not just the products. Fusionify Solutions formalised that work: enterprise software, web and mobile applications, AI integration, UI/UX and consulting, delivered on the same foundations we run ourselves.",
    marker: "Fusionify Solutions",
  },
  {
    year: "04",
    label: "Chapter four",
    title: "A technology group, not a software house.",
    body: "With FTV Injector covering network and connectivity, the four products now operate as one ecosystem under PT Fusionify Digital Group — a company whose output is long-term digital infrastructure rather than one-off delivery.",
    marker: "PT Fusionify Digital Group",
  },
];

function useScrollProgress<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    let frame = 0;
    const update = () => {
      frame = 0;
      const rect = node.getBoundingClientRect();
      const vh = window.innerHeight;
      const total = rect.height + vh * 0.4;
      const passed = vh * 0.75 - rect.top;
      setProgress(Math.min(1, Math.max(0, passed / total)));
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return { ref, progress };
}

function ChapterRow({ chapter, index }: { chapter: Chapter; index: number }) {
  return (
    <article className="story-row group grid-12 gap-y-6">
      <div className="col-span-12 lg:col-span-3">
        <Reveal variant="fade">
          <p className="story-year font-display">{chapter.year}</p>
          <p className="eyebrow mt-3">{chapter.label}</p>
        </Reveal>
      </div>

      <span className="story-node" aria-hidden="true" />

      <div className="col-span-12 lg:col-span-7 lg:col-start-6">
        <Reveal delay={90}>
          <h3 className="max-w-xl text-[1.5rem] leading-[1.2] font-bold sm:text-[1.75rem]">
            {chapter.title}
          </h3>
          <p className="mt-4 max-w-xl text-[15px] leading-[1.8] text-muted-foreground">
            {chapter.body}
          </p>
          <p className="story-marker mt-6">
            <span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
            {chapter.marker}
          </p>
        </Reveal>
      </div>
    </article>
  );
}

export function StoryTimeline() {
  const { ref, progress } = useScrollProgress<HTMLDivElement>();

  return (
    <section className="rule-top section-y">
      <div className="shell">
        <div className="grid-12 gap-y-8">
          <div className="col-span-12 lg:col-span-4">
            <Reveal>
              <p className="eyebrow">Trajectory</p>
              <h2 className="mt-5 text-[2rem] leading-[1.12] font-bold">
                Eight years, told in four chapters.
              </h2>
            </Reveal>
          </div>
          <div className="col-span-12 lg:col-span-5 lg:col-start-8 lg:self-end">
            <Reveal delay={120} variant="fade">
              <p className="text-[15px] leading-[1.8] text-muted-foreground">
                The company changed shape more than once. What did not change is who does the work
                and how far we stay with it.
              </p>
            </Reveal>
          </div>
        </div>

        <div ref={ref} className="story-track mt-20 lg:mt-28">
          <span className="story-rail" aria-hidden="true">
            <span
              className="story-rail-fill"
              style={{ transform: `scaleY(${progress})` }}
            />
          </span>

          <div className="flex flex-col">
            {chapters.map((c, i) => (
              <ChapterRow key={c.year} chapter={c} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
