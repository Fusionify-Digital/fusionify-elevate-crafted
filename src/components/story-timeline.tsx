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
  { year: "2022", label: "August 2022", title: "Tempest Tunnel.", body: "The documented starting point of the Fusionify technology journey.", marker: "Tempest Tunnel" },
  { year: "02", label: "Stage two", title: "Fusion Tempest.", body: "The next stage in the project's evolution.", marker: "Fusion Tempest" },
  { year: "03", label: "Stage three", title: "FTV Injector.", body: "Network utility and VPN technology product.", marker: "FTV Injector" },
  { year: "04", label: "Stage four", title: "Fusionify Injector.", body: "The product continued under the Fusionify name.", marker: "Fusionify Injector" },
  { year: "05", label: "Stage five", title: "GRETONGERS.", body: "The next stage in the project's evolution.", marker: "GRETONGERS" },
  { year: "06", label: "Today", title: "The Fusionify ecosystem.", body: "Automation, payments, custom solutions, network technology and digital tools under one ecosystem, operated by PT Fusionify Digital Store, registered on 18 August 2024 in Bogor. A change of name to PT Fusionify Digital Group is planned for 2027.", marker: "Fusionify ecosystem" },
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
                From one project to an ecosystem.
              </h2>
            </Reveal>
          </div>
          <div className="col-span-12 lg:col-span-5 lg:col-start-8 lg:self-end">
            <Reveal delay={120} variant="fade">
              <p className="text-[15px] leading-[1.8] text-muted-foreground">
                Fusionify grew step by step from a small network project into a broader digital
                technology ecosystem.
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
