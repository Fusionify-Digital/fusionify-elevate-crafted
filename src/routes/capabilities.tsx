import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal, Stagger } from "@/components/reveal";

export const Route = createFileRoute("/capabilities")({
  head: () => ({
    meta: [
      { title: "Capabilities — Fusionify" },
      {
        name: "description",
        content:
          "Digital automation, payments, custom solutions, network technology and digital tools from Fusionify.",
      },
      { property: "og:title", content: "Capabilities — Fusionify" },
      {
        property: "og:description",
        content: "What Fusionify works on: automation, payments, custom solutions and digital tools.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "/capabilities" },
    ],
    links: [{ rel: "canonical", href: "/capabilities" }],
  }),
  component: Capabilities,
});

const practices = [
  { index: "01", title: "Digital automation", lead: "Automation for digital product businesses.", points: ["Telegram and WhatsApp automation via Fusionify Bot", "Automated ordering and digital product sales", "Payment automation", "Business operations"] },
  { index: "02", title: "Payments", lead: "Digital payment infrastructure.", points: ["FTV Pay digital payment infrastructure", "QRIS payment platform"] },
  { index: "03", title: "Custom solutions", lead: "Built to each client's requirements through Fusionify Solutions.", points: ["Website projects", "Software development", "Systems", "Automation and digital services"] },
  { index: "04", title: "Network & digital tools", lead: "Utilities from the Fusionify ecosystem.", points: ["FTV Injector — network utility and VPN technology", "Fusionify TMail", "Fusionify SpeedTest", "Fusionify Downloader and Uploader"] },
];

const method = [
  { step: "Conversation", body: "Tell us what you need via hello@fusionify.id or the contact form." },
  { step: "Scope", body: "We agree on requirements and the right product or solution." },
  { step: "Build", body: "Fusionify develops and configures the solution." },
  { step: "Handover", body: "The solution is delivered and supported as agreed." },
];

function Capabilities() {
  return (
    <>
      <section className="shell section-top">
        <div className="grid-12 gap-y-8">
          <div className="col-span-12 lg:col-span-7">
            <Reveal>
              <p className="eyebrow">Capabilities</p>
              <h1 className="mt-6 text-[2.75rem] leading-[1.05] font-extrabold sm:text-[3.5rem]">
                What Fusionify works on.
              </h1>
            </Reveal>
          </div>
          <div className="col-span-12 lg:col-span-4 lg:col-start-9">
            <Reveal delay={120} variant="fade">
              <p className="text-[15.5px] leading-[1.75] text-muted-foreground">
                Four areas, drawn from the products and services of the Fusionify ecosystem.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="shell">
        {practices.map((p, i) => (
          <Reveal key={p.index} delay={i * 60} className="rule-top py-14 lg:py-20">
            <div className="grid-12 items-start gap-y-8">
              <div className="col-span-12 lg:col-span-1">
                <span className="font-display text-[12px] font-semibold tracking-[0.14em] text-primary">
                  {p.index}
                </span>
              </div>
              <div className="col-span-12 lg:col-span-5 lg:col-start-2">
                <h2 className="text-[1.65rem] leading-[1.15] font-bold sm:text-[1.9rem]">
                  {p.title}
                </h2>
                <p className="mt-3 max-w-sm text-[15px] leading-[1.7] text-muted-foreground">
                  {p.lead}
                </p>
              </div>
              <div className="col-span-12 lg:col-span-5 lg:col-start-8">
                <ul>
                  {p.points.map((point) => (
                    <li
                      key={point}
                      className="border-b border-hairline py-3.5 text-[14.5px] leading-[1.6] text-foreground first:pt-0 last:border-0 last:pb-0"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        ))}
      </section>


      <section className="rule-top bg-surface section-y">
        <div className="shell grid-12 gap-y-12">
          <div className="col-span-12 lg:col-span-3">
            <Reveal>
              <p className="eyebrow">Method</p>
              <h2 className="mt-5 text-[1.9rem] leading-[1.12] font-bold">How we work together.</h2>
            </Reveal>
          </div>
          <div className="col-span-12 lg:col-span-8 lg:col-start-5">
            <Stagger step={100} className="space-y-px">
              {method.map((m) => (
                <div
                  key={m.step}
                  className="grid grid-cols-[minmax(0,1fr)] gap-2 border-t border-hairline py-7 sm:grid-cols-[10rem_minmax(0,1fr)] sm:gap-8"
                >
                  <h3 className="text-[15px] font-semibold">{m.step}</h3>
                  <p className="text-[14.5px] leading-[1.7] text-muted-foreground">{m.body}</p>
                </div>
              ))}
            </Stagger>
          </div>
        </div>
      </section>

      <section className="shell section-y">
        <Reveal>
          <h2 className="max-w-2xl text-[2.25rem] leading-[1.1] font-extrabold sm:text-[2.75rem]">
            Discuss your project with Fusionify.
          </h2>
          <Link
            to="/contact"
            className="btn btn-primary mt-10"
          >
            Start a conversation
          </Link>
        </Reveal>
      </section>
    </>
  );
}
