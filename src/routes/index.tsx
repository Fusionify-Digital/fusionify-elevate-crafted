import { createFileRoute, Link } from "@tanstack/react-router";
import mascot from "@/assets/fusionify-mascot.png.asset.json";
import { assetUrl } from "@/lib/asset-url";
import { Reveal } from "@/components/reveal";
import { Ecosystem } from "@/components/ecosystem";
import { ProductsPlatforms } from "@/components/products-platforms";
import { Solutions } from "@/components/solutions";
import { StoryTimeline } from "@/components/story-timeline";
import { Leadership } from "@/components/leadership";
import { Partners } from "@/components/partners";
import { CapabilityTicker, SkyHero } from "@/components/sky-hero";

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
  return (
    <>
      <SkyHero />
      <CapabilityTicker />

      <section id="overview" className="intro-section shell section-y" aria-labelledby="overview-title">
        <div className="grid-12 items-start gap-y-10">
          <div className="col-span-12 lg:col-span-4">
            <Reveal>
              <p className="sheet-label"><span>02</span> Company overview</p>
              <div className="company-signal" aria-hidden="true">
                <span className="company-signal-ring" />
                <span className="company-signal-core">Fi</span>
                <span className="company-signal-node node-a" />
                <span className="company-signal-node node-b" />
                <span className="company-signal-node node-c" />
              </div>
            </Reveal>
          </div>
          <div className="col-span-12 lg:col-span-7 lg:col-start-6">
            <Reveal delay={80} variant="fade">
              <h2
                id="overview-title"
                className="intro-statement"
              >
                Fusionify grew from a small network project into a connected technology company.
                <strong>One ecosystem, built to make digital business feel simpler.</strong>
              </h2>
              <p className="mt-6 max-w-2xl text-[15px] leading-[1.8] text-muted-foreground">
                Today we focus on digital automation, software and application development, scalable
                digital infrastructure, ready-to-use digital products and custom digital solutions —
                for individuals, UMKM, startups and companies pursuing digital transformation.
              </p>
            </Reveal>
            <Reveal delay={160} variant="fade">
              <dl className="company-stats mt-12 grid gap-4 sm:grid-cols-3">
                {[
                  ["2022", "Technology journey began"],
                  ["2024", "Company registered in Bogor"],
                  ["4+", "Core products and platforms"],
                ].map(([k, v]) => (
                  <div key={k}>
                    <dt>{k}</dt>
                    <dd>{v}</dd>
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

      <section className="contact-band section-y" aria-labelledby="contact-cta-title">
        <div className="shell">
          <div className="grid-12 items-end gap-y-12">
            <div className="col-span-12 lg:col-span-7">
              <Reveal>
                <p className="eyebrow">Work with Fusionify</p>
                <h2
                  id="contact-cta-title"
                  className="mt-5 text-[2.25rem] leading-[1.08] font-extrabold sm:text-[2.75rem]"
                >
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
                  src={assetUrl(mascot)}
                  alt="Fi, the Fusionify mascot, holding a blank sign"
                  loading="lazy"
                  className="float-slow media-lift ml-0 h-40 w-auto object-contain lg:ml-auto"
                />
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
