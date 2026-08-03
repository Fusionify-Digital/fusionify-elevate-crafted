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
    year: "2018",
    label: "Chapter one",
    title: "Four engineers, one rented floor in Jakarta.",
    body: "Fusionify began with people who had already carried banking and logistics platforms through production. The first agreement was written on the premise that we would only take work we could staff ourselves.",
    marker: "Founded",
  },
  {
    year: "2020",
    label: "Chapter two",
    title: "A regulated migration that had to hold.",
    body: "Our first national-scale cloud programme moved a financial institution without a single unplanned outage window. It set the standard we still measure delivery against: stability in production, not milestones on paper.",
    marker: "First national programme",
  },
  {
    year: "2023",
    label: "Chapter three",
    title: "Intelligence, applied where it earns its keep.",
    body: "We formalised an applied intelligence practice and opened a delivery presence in Singapore — closer to the regulators, the data, and the teams who would run the systems after we left.",
    marker: "Practice established",
  },
  {
    year: "2026",
    label: "Chapter four",
    title: "A digital technology group with a record.",
    body: "Forty-plus enterprise programmes across five industries, an ecosystem of interconnected products, and the same operating rule as the first year: fewer, more senior people, accountable to the outcome.",
    marker: "Today",
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

      <div className="col-span-12 lg:col-span-1 lg:flex lg:justify-center">
        <span className="story-node" aria-hidden="true" />
      </div>

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
