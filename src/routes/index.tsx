import { createFileRoute, Link } from "@tanstack/react-router";
import heroEmblem from "@/assets/hero-emblem.png";
import mascot from "@/assets/fusionify-mascot.png.asset.json";
import { Reveal, useParallax } from "@/components/reveal";
import { Ecosystem } from "@/components/ecosystem";
import { ProductsPlatforms } from "@/components/products-platforms";
import { Solutions } from "@/components/solutions";
import { StoryTimeline } from "@/components/story-timeline";
import { Leadership } from "@/components/leadership";
import { Partners } from "@/components/partners";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Fusionify — Digital technology ecosystem from Bogor, Indonesia" },
      {
        name: "description",
        content:
          "Fusionify builds digital automation, software, scalable infrastructure and ready-to-use digital products for individuals, UMKM, startups and companies.",
      },
      {
        property: "og:title",
        content: "Fusionify — Digital technology ecosystem",
      },
      {
        property: "og:description",
        content:
          "A growing technology ecosystem: Fusionify Bot, FTV Pay, Fusionify Solutions, FTV Injector and Fusionify digital tools.",
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
          name: "Fusionify",
          legalName: "PT Fusionify Digital Store",
          foundingDate: "2024-08-18",
          url: "/",
          description:
            "Digital technology ecosystem building automation, software, digital infrastructure and ready-to-use digital products.",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Bogor",
            addressCountry: "ID",
          },
        }),
      },
    ],
  }),
  component: Home,
});

function Home() {
  const parallax = useParallax<HTMLDivElement>(0.05);

  return (
    <>
      <section className="relative isolate overflow-hidden" aria-labelledby="home-title">
        <div className="hero-canvas" aria-hidden="true">
          <div className="hero-grid" />
          <div className="hero-glow" />
        </div>

        <div className="shell section-top">
          <div className="grid-12 items-center gap-y-16">
            <div className="col-span-12 lg:col-span-6">
              <Reveal>
                <p className="eyebrow">Fusionify · Digital technology ecosystem</p>
              </Reveal>
              <Reveal delay={110}>
                <h1
                  id="home-title"
                  className="mt-6 text-[2.6rem] leading-[1.04] font-extrabold tracking-[-0.032em] sm:text-[3.5rem] lg:text-[4rem]"
                >
                  Automation, software
                  <br />
                  and infrastructure
                  <br />
                  <span className="text-primary">for digital business.</span>
                </h1>
              </Reveal>
              <Reveal delay={210} variant="fade">
                <p className="mt-8 max-w-[34rem] text-[16.5px] leading-[1.72] text-muted-foreground">
                  Fusionify builds automation platforms, payment infrastructure, custom software
                  and ready-to-use digital products for individuals, UMKM, startups and companies.
                </p>
              </Reveal>
              <Reveal delay={310}>
                <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
                  <Link to="/contact" className="btn btn-primary">
                    Start a conversation
                  </Link>
                  <a href="#ecosystem" className="btn btn-secondary">
                    Explore the ecosystem
                  </a>
                </div>
              </Reveal>
            </div>

            <div className="col-span-12 lg:col-span-5 lg:col-start-8">
              <div ref={parallax} style={{ transform: "translateY(var(--parallax, 0px))" }}>
                <div className="hero-stage relative mx-auto aspect-square w-full max-w-[19rem] sm:max-w-[24rem] lg:max-w-[28rem]">
                  <div aria-hidden="true" className="ground-shadow absolute inset-x-[20%] bottom-[7%] h-[7%]" />
                  <img
                    src={heroEmblem}
                    alt="Fusionify emblem rendered in three dimensions"
                    width={1280}
                    height={1280}
                    fetchPriority="high"
                    className="float-3d media-lift relative h-full w-full object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="overview" className="shell rule-top section-y" aria-labelledby="overview-title">
        <div className="grid-12 items-start gap-y-6">
          <div className="col-span-12 lg:col-span-3">
            <Reveal>
              <p className="eyebrow">Company Overview</p>
            </Reveal>
          </div>
          <div className="col-span-12 lg:col-span-8 lg:col-start-5">
            <Reveal delay={80} variant="fade">
              <h2 id="overview-title" className="max-w-4xl text-[1.5rem] leading-[1.42] font-medium tracking-[-0.022em] text-ink sm:text-[1.75rem]">
                Fusionify is a growing digital technology ecosystem that started as a small
                network project in August 2022.
              </h2>
              <p className="mt-6 max-w-2xl text-[15px] leading-[1.8] text-muted-foreground">
                Today we focus on digital automation, software and application development,
                scalable digital infrastructure, ready-to-use digital products and custom digital
                solutions — for individuals, UMKM, startups and companies pursuing digital
                transformation.
              </p>
            </Reveal>
            <Reveal delay={160} variant="fade">
              <dl className="mt-12 grid gap-x-12 gap-y-8 border-t border-hairline pt-8 sm:grid-cols-3">
                {[
                  ["Registered company", "PT Fusionify Digital Store"],
                  ["Registered", "18 August 2024 · Bogor, Indonesia"],
                  ["Planned name change, 2027", "PT Fusionify Digital Group"],
                ].map(([k, v]) => (
                  <div key={k}>
                    <dt className="text-[12.5px] tracking-[0.08em] text-muted-foreground uppercase">{k}</dt>
                    <dd className="mt-2 text-[15px] font-medium text-ink">{v}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </div>
      </section>

      <Ecosystem />
      <ProductsPlatforms />
      <Solutions />
      <StoryTimeline />
      <Leadership />
      <Partners />

      <section className="shell section-y" aria-labelledby="contact-cta-title">
        <div className="grid-12 items-end gap-y-12">
          <div className="col-span-12 lg:col-span-7">
            <Reveal>
              <p className="eyebrow">Work with Fusionify</p>
              <h2 id="contact-cta-title" className="mt-5 text-[2.25rem] leading-[1.08] font-extrabold sm:text-[2.75rem]">
                Build what your business needs to run.
              </h2>
              <p className="mt-6 max-w-lg text-[16px] leading-[1.75] text-muted-foreground">
                Companies, startups and growing businesses can begin with a focused technical
                conversation about automation, software, payments or digital infrastructure.
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
