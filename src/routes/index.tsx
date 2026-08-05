import { createFileRoute, Link } from "@tanstack/react-router";
import heroEmblem from "@/assets/hero-emblem.png";
import mascot from "@/assets/fusionify-mascot.png.asset.json";
import { Reveal, useCountUp, useParallax } from "@/components/reveal";
import { Ecosystem } from "@/components/ecosystem";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Fusionify — Digital infrastructure for enterprises in Indonesia" },
      {
        name: "description",
        content:
          "PT Fusionify Digital Group designs and engineers platforms, applied intelligence and cloud reliability for Indonesia's most demanding enterprises.",
      },
      {
        property: "og:title",
        content: "Fusionify — Digital infrastructure for enterprises in Indonesia",
      },
      {
        property: "og:description",
        content:
          "Platform engineering, applied intelligence and cloud reliability, delivered with enterprise discipline.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "PT Fusionify Digital Group",
          url: "/",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Jakarta Selatan",
            addressCountry: "ID",
          },
        }),
      },
    ],
  }),
  component: Home,
});




const measures = [
  { value: "99.98%", label: "Median platform availability across managed workloads" },
  { value: "11 yrs", label: "Average engineering tenure across our principal staff" },
  { value: "40+", label: "Enterprise programmes delivered in banking, logistics and energy" },
];

function Home() {
  const parallax = useParallax<HTMLDivElement>(0.05);

  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        <div className="hero-canvas" aria-hidden="true">
          <div className="hero-grid" />
          <div
            className="hero-glow"
            style={{
              inset: "-12% 6% auto auto",
              width: "44rem",
              height: "44rem",
              background:
                "radial-gradient(circle, color-mix(in oklab, var(--brand) 22%, transparent) 0%, transparent 68%)",
            }}
          />
          <div
            className="hero-glow"
            style={{
              inset: "auto auto -20% -10%",
              width: "34rem",
              height: "34rem",
              background:
                "radial-gradient(circle, color-mix(in oklab, var(--accent, var(--brand)) 14%, transparent) 0%, transparent 70%)",
            }}
          />
        </div>

        <div className="shell section-top">
          <div className="grid-12 items-center gap-y-20">
            <div className="col-span-12 lg:col-span-6">
              <Reveal>
                <p className="eyebrow">PT Fusionify Digital Group</p>
              </Reveal>
              <Reveal delay={120}>
                <h1 className="mt-6 text-[2.9rem] leading-[1.02] font-extrabold tracking-[-0.03em] sm:text-[3.75rem] lg:text-[4.25rem]">
                  Digital infrastructure
                  <br />
                  enterprises can
                  <br />
                  <span className="text-primary">trust for decades.</span>
                </h1>
              </Reveal>
              <Reveal delay={240} variant="fade">
                <p className="mt-10 max-w-lg text-[17px] leading-[1.75] text-muted-foreground">
                  We engineer the platforms, applied intelligence and cloud foundations that
                  Indonesia&rsquo;s largest organisations depend on — designed for scale, held to an
                  enterprise standard, and accountable long after launch.
                </p>
              </Reveal>
              <Reveal delay={360}>
                <div className="mt-14 flex flex-wrap items-center gap-4">
                  <Link to="/contact" className="btn btn-primary">
                    Start a conversation
                  </Link>
                  <Link to="/capabilities" className="btn btn-secondary">
                    See how we work
                  </Link>
                </div>
              </Reveal>
              <Reveal delay={460} variant="fade">
                <p className="mt-14 max-w-md border-t border-border pt-6 text-[13px] leading-[1.7] tracking-[-0.005em] text-muted-foreground">
                  Trusted across banking, logistics and energy — 40+ enterprise programmes
                  delivered, 99.98% median availability.
                </p>
              </Reveal>
            </div>

            <div className="col-span-12 lg:col-span-5 lg:col-start-8">
              <div ref={parallax} style={{ transform: "translateY(var(--parallax, 0px))" }}>
                <div className="hero-stage relative mx-auto aspect-square w-full max-w-[30rem]">
                  <div
                    aria-hidden="true"
                    className="ground-shadow absolute inset-x-[18%] bottom-[6%] h-[8%] rounded-[9999px]"
                    style={{
                      background:
                        "radial-gradient(ellipse at center, oklch(0.2 0.02 262 / 0.22) 0%, transparent 72%)",
                      filter: "blur(14px)",
                    }}
                  />
                  <img
                    src={heroEmblem}
                    alt="Fusionify emblem rendered in three dimensions"
                    width={1280}
                    height={1280}
                    className="float-3d media-lift relative h-full w-full object-contain drop-shadow-[0_48px_64px_rgba(20,26,44,0.18)]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Positioning statement */}
      <section className="shell rule-top section-y">
        <div className="grid-12 gap-y-8">
          <div className="col-span-12 lg:col-span-4">
            <Reveal>
              <p className="eyebrow">Position</p>
            </Reveal>
          </div>
          <div className="col-span-12 lg:col-span-8">
            <Reveal delay={80} variant="fade">
              <p className="text-[1.5rem] leading-[1.45] font-medium tracking-[-0.022em] text-ink sm:text-[1.75rem]">
                Most digital work is disposable. We build the part that isn't — the ledger, the
                pipeline, the control plane — and we stay accountable for it long after launch.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Ecosystem */}
      <Ecosystem />


      {/* Measures */}
      <section className="rule-top bg-surface section-y">
        <div className="shell">
          <div className="grid-12 gap-y-12">
            {measures.map((m, i) => (
              <Measure key={m.value} value={m.value} label={m.label} delay={i * 120} />
            ))}
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="shell section-y">
        <div className="grid-12 items-end gap-y-12">
          <div className="col-span-12 lg:col-span-7">
            <Reveal>
              <h2 className="text-[2.25rem] leading-[1.08] font-extrabold sm:text-[2.75rem]">
                Tell us what needs to hold.
              </h2>
              <p className="mt-6 max-w-lg text-[16px] leading-[1.75] text-muted-foreground">
                We take on a small number of engagements each year. Conversations begin with a
                technical review, not a sales deck.
              </p>
              <Link to="/contact" className="btn btn-primary mt-10">
                Contact Fusionify
              </Link>
            </Reveal>
          </div>
          <div className="col-span-12 lg:col-span-4 lg:col-start-9">
            <Reveal delay={120} variant="scale">
              <img
                src={mascot.url}
                alt="Fi, the Fusionify mascot, holding a blank sign"
                loading="lazy"
                className="float-slow media-lift ml-0 h-40 w-auto object-contain lg:ml-auto"
              />
            </Reveal>
          </div>
        </div>
      </section>

    </>
  );
}

function Measure({ value, label, delay }: { value: string; label: string; delay: number }) {
  const counted = useCountUp(value);
  return (
    <Reveal delay={delay} variant="scale" className="col-span-12 sm:col-span-6 lg:col-span-4">
      <p
        ref={counted.ref}
        className="font-display text-[3rem] leading-none font-extrabold tracking-[-0.04em] tabular-nums text-ink"
      >
        {counted.value}
      </p>
      <p className="mt-6 max-w-[17rem] text-[14px] leading-[1.7] text-muted-foreground">{label}</p>
    </Reveal>
  );
}
