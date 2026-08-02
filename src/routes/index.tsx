import { createFileRoute, Link } from "@tanstack/react-router";
import heroEmblem from "@/assets/hero-emblem.png";
import mascot from "@/assets/fusionify-mascot.png.asset.json";
import { Reveal, useParallax } from "@/components/reveal";

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

const capabilities = [
  {
    index: "01",
    title: "Platform engineering",
    body: "Core systems, service architecture and internal tooling built to hold weight for a decade, not a quarter.",
  },
  {
    index: "02",
    title: "Applied intelligence",
    body: "Models placed where they change an outcome — underwriting, routing, forecasting — with evaluation built in.",
  },
  {
    index: "03",
    title: "Cloud & reliability",
    body: "Migration, observability and incident practice that turns uptime from an aspiration into a number.",
  },
  {
    index: "04",
    title: "Product design",
    body: "Interfaces for operators and customers alike, designed with the same rigour as the systems beneath them.",
  },
];

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
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-[-18rem] h-[42rem] w-[42rem] -translate-x-1/2 rounded-full opacity-[0.07]"
          style={{ background: "radial-gradient(circle, var(--brand) 0%, transparent 62%)" }}
        />
        <div className="shell relative pt-20 pb-16 lg:pt-28 lg:pb-24">
          <div className="grid-12 items-center gap-y-14">
            <div className="col-span-12 lg:col-span-6">
              <Reveal>
                <p className="eyebrow">PT Fusionify Digital Group</p>
              </Reveal>
              <Reveal delay={90}>
                <h1 className="mt-6 text-[2.75rem] leading-[1.03] font-extrabold sm:text-[3.6rem] lg:text-[4.15rem]">
                  Systems that hold
                  <br />
                  the weight of a
                  <br />
                  <span className="text-primary">whole business.</span>
                </h1>
              </Reveal>
              <Reveal delay={180}>
                <p className="mt-7 max-w-md text-[16.5px] leading-[1.72] text-muted-foreground">
                  We are an Indonesian engineering group building the platforms, intelligence and
                  infrastructure that large organisations run on every day.
                </p>
              </Reveal>
              <Reveal delay={260}>
                <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
                  <Link
                    to="/contact"
                    className="rounded-full bg-primary px-6 py-3 text-[14px] font-medium text-primary-foreground transition-all duration-500 hover:brightness-110"
                  >
                    Start a conversation
                  </Link>
                  <Link to="/capabilities" className="link-quiet text-[14px]">
                    See how we work
                  </Link>
                </div>
              </Reveal>
            </div>

            <div className="col-span-12 lg:col-span-6">
              <div ref={parallax} style={{ transform: "translateY(var(--parallax, 0px))" }}>
                <div className="relative mx-auto aspect-square w-full max-w-[30rem]">
                  <div
                    aria-hidden
                    className="absolute inset-[14%] rounded-full blur-3xl"
                    style={{
                      background:
                        "radial-gradient(circle at 40% 35%, color-mix(in oklab, var(--brand) 34%, transparent), transparent 68%)",
                    }}
                  />
                  <img
                    src={heroEmblem}
                    alt="Fusionify emblem rendered in three dimensions"
                    width={1280}
                    height={1280}
                    className="float-slow relative h-full w-full object-contain drop-shadow-[0_50px_60px_rgba(18,114,224,0.22)]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Positioning statement */}
      <section className="shell rule-top py-20 lg:py-28">
        <div className="grid-12 gap-y-8">
          <div className="col-span-12 lg:col-span-4">
            <Reveal>
              <p className="eyebrow">Position</p>
            </Reveal>
          </div>
          <div className="col-span-12 lg:col-span-8">
            <Reveal delay={80}>
              <p className="text-[1.5rem] leading-[1.45] font-medium tracking-[-0.022em] text-ink sm:text-[1.85rem]">
                Most digital work is disposable. We build the part that isn't — the ledger, the
                pipeline, the control plane — and we stay accountable for it long after launch.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="shell rule-top py-20 lg:py-28">
        <div className="grid-12 gap-y-14">
          <div className="col-span-12 lg:col-span-4">
            <Reveal>
              <p className="eyebrow">Capabilities</p>
              <h2 className="mt-5 text-[2rem] leading-[1.12] font-bold sm:text-[2.35rem]">
                Four disciplines, one engineering standard.
              </h2>
            </Reveal>
          </div>
          <div className="col-span-12 lg:col-span-7 lg:col-start-6">
            <div className="grid gap-px overflow-hidden rounded-2xl bg-hairline sm:grid-cols-2">
              {capabilities.map((item, i) => (
                <Reveal
                  key={item.index}
                  delay={i * 90}
                  className="group bg-background p-7 transition-colors duration-500 hover:bg-surface"
                >
                  <span className="font-display text-[12px] font-semibold tracking-[0.14em] text-primary">
                    {item.index}
                  </span>
                  <h3 className="mt-4 text-[17px] font-semibold">{item.title}</h3>
                  <p className="mt-2.5 text-[14px] leading-relaxed text-muted-foreground">
                    {item.body}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Measures */}
      <section className="rule-top bg-surface py-20 lg:py-28">
        <div className="shell">
          <div className="grid-12 gap-y-12">
            {measures.map((m, i) => (
              <Reveal key={m.value} delay={i * 110} className="col-span-12 sm:col-span-6 lg:col-span-4">
                <p className="font-display text-[3rem] leading-none font-extrabold tracking-[-0.04em] text-ink">
                  {m.value}
                </p>
                <p className="mt-4 max-w-[17rem] text-[14px] leading-relaxed text-muted-foreground">
                  {m.label}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="shell py-24 lg:py-32">
        <div className="grid-12 items-end gap-y-8">
          <div className="col-span-12 lg:col-span-8">
            <Reveal>
              <h2 className="text-[2.25rem] leading-[1.08] font-extrabold sm:text-[3rem]">
                Tell us what needs to hold.
              </h2>
              <p className="mt-5 max-w-lg text-[16px] leading-[1.7] text-muted-foreground">
                We take on a small number of engagements each year. Conversations begin with a
                technical review, not a sales deck.
              </p>
            </Reveal>
          </div>
          <div className="col-span-12 lg:col-span-4 lg:text-right">
            <Reveal delay={100}>
              <img
                src={mascot.url}
                alt="Fi, the Fusionify mascot, holding a blank sign"
                loading="lazy"
                className="float-slow mb-8 ml-0 h-40 w-auto object-contain lg:ml-auto"
              />
            </Reveal>

            <Reveal delay={120}>
              <Link
                to="/contact"
                className="inline-flex rounded-full bg-primary px-6 py-3 text-[14px] font-medium text-primary-foreground transition-all duration-500 hover:brightness-110"
              >
                Contact Fusionify
              </Link>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
