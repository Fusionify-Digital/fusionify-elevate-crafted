import { createFileRoute, Link } from "@tanstack/react-router";
import heroEmblem from "@/assets/hero-emblem.png";
import mascot from "@/assets/fusionify-mascot.png.asset.json";
import { Reveal, useCountUp, useParallax } from "@/components/reveal";
import { Ecosystem } from "@/components/ecosystem";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "PT Fusionify Digital Group — Digital technology company" },
      {
        name: "description",
        content:
          "PT Fusionify Digital Group builds scalable digital infrastructure, automation, AI-powered solutions, cloud services, payment technology and business software.",
      },
      {
        property: "og:title",
        content: "PT Fusionify Digital Group — Digital technology company",
      },
      {
        property: "og:description",
        content:
          "An ecosystem of automation, payment and engineering products: Fusionify Bot, FTV Pay, Fusionify Solutions and FTV Injector.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
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
          description:
            "Digital technology company building scalable digital infrastructure, automation, AI-powered solutions, cloud services, payment technology and business software.",
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
  { value: "4", label: "Products operating as one connected technology ecosystem" },
  { value: "24/7", label: "Automation and payment services running without a maintenance window" },
  { value: "99.9%", label: "Median availability targeted across managed workloads" },
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
              inset: "-14% 4% auto auto",
              width: "42rem",
              height: "42rem",
              background:
                "radial-gradient(circle, color-mix(in oklab, var(--brand) 16%, transparent) 0%, transparent 70%)",
            }}
          />
        </div>

        <div className="shell section-top">
          <div className="grid-12 items-center gap-y-16">
            <div className="col-span-12 lg:col-span-6">
              <Reveal>
                <p className="eyebrow">PT Fusionify Digital Group</p>
              </Reveal>
              <Reveal delay={110}>
                <h1 className="mt-6 text-[2.6rem] leading-[1.04] font-extrabold tracking-[-0.032em] sm:text-[3.5rem] lg:text-[4rem]">
                  Digital infrastructure
                  <br />
                  built to run
                  <br />
                  <span className="text-primary">for the long term.</span>
                </h1>
              </Reveal>
              <Reveal delay={210} variant="fade">
                <p className="mt-8 max-w-[34rem] text-[16.5px] leading-[1.72] text-muted-foreground">
                  Fusionify builds scalable digital infrastructure, automation, AI-powered
                  solutions, cloud services, payment technology and business software — delivered as
                  one connected ecosystem rather than isolated projects.
                </p>
              </Reveal>
              <Reveal delay={310}>
                <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
                  <Link to="/contact" className="btn btn-primary">
                    Start a conversation
                  </Link>
                  <Link to="/capabilities" className="btn btn-secondary">
                    See how we work
                  </Link>
                </div>
              </Reveal>
              <Reveal delay={400} variant="fade">
                <p className="mt-12 max-w-[30rem] border-t border-hairline pt-6 text-[13px] leading-[1.7] text-muted-foreground">
                  Fusionify Bot · FTV Pay · Fusionify Solutions · FTV Injector
                </p>
              </Reveal>
            </div>

            <div className="col-span-12 lg:col-span-5 lg:col-start-8">
              <div ref={parallax} style={{ transform: "translateY(var(--parallax, 0px))" }}>
                <div className="hero-stage relative mx-auto aspect-square w-full max-w-[19rem] sm:max-w-[24rem] lg:max-w-[28rem]">
                  <div
                    aria-hidden="true"
                    className="ground-shadow absolute inset-x-[20%] bottom-[7%] h-[7%] rounded-[9999px]"
                    style={{
                      background:
                        "radial-gradient(ellipse at center, oklch(0.2 0.02 262 / 0.2) 0%, transparent 72%)",
                      filter: "blur(14px)",
                    }}
                  />
                  <img
                    src={heroEmblem}
                    alt="Fusionify emblem rendered in three dimensions"
                    width={1280}
                    height={1280}
                    fetchPriority="high"
                    className="float-3d media-lift relative h-full w-full object-contain drop-shadow-[0_40px_56px_rgba(20,26,44,0.16)]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Positioning statement */}
      <section className="shell rule-top section-y">
        <div className="grid-12 items-start gap-y-6">
          <div className="col-span-12 lg:col-span-3">
            <Reveal>
              <p className="eyebrow">Position</p>
            </Reveal>
          </div>
          <div className="col-span-12 lg:col-span-8 lg:col-start-5">
            <Reveal delay={80} variant="fade">
              <p className="text-[1.5rem] leading-[1.42] font-medium tracking-[-0.022em] text-ink sm:text-[1.75rem]">
                PT Fusionify Digital Group is a digital technology company, not a software house.
                We build and operate the infrastructure our own products depend on — automation,
                payments, cloud and applied AI — and make it available to the organisations we work
                with.
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
          <div className="grid-12 gap-y-14">
            {measures.map((m, i) => (
              <Measure key={m.value} value={m.value} label={m.label} delay={i * 110} />
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
                Tell us what you need to run.
              </h2>
              <p className="mt-6 max-w-lg text-[16px] leading-[1.75] text-muted-foreground">
                Whether it starts with automation, payments or a system that has to be rebuilt,
                conversations begin with a technical review rather than a sales deck.
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
