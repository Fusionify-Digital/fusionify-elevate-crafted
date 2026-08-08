import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal, Stagger } from "@/components/reveal";

export const Route = createFileRoute("/capabilities")({
  head: () => ({
    meta: [
      { title: "Capabilities — Fusionify Digital Group" },
      {
        name: "description",
        content:
          "Platform engineering, applied intelligence, cloud reliability and product design, delivered by a senior Indonesian engineering group.",
      },
      { property: "og:title", content: "Capabilities — Fusionify Digital Group" },
      {
        property: "og:description",
        content: "How Fusionify engineers durable platforms for enterprise clients.",
      },
      { property: "og:url", content: "/capabilities" },
    ],
    links: [{ rel: "canonical", href: "/capabilities" }],
  }),
  component: Capabilities,
});

const practices = [
  {
    index: "01",
    title: "Digital infrastructure",
    lead: "The systems the business cannot operate without.",
    points: [
      "Scalable service architecture and data modelling",
      "Cloud services, landing zones and managed operations",
      "Observability, reliability targets and incident practice",
      "Migration of legacy systems without a hard cutover",
    ],
  },
  {
    index: "02",
    title: "Automation & AI",
    lead: "Operations that run without a person in the loop.",
    points: [
      "Telegram and WhatsApp automation via Fusionify Bot",
      "Reseller, order and fulfilment workflow automation",
      "AI integration for support, documents and decisioning",
      "Operational analytics and reporting",
    ],
  },
  {
    index: "03",
    title: "Payment technology",
    lead: "Money movement treated as infrastructure.",
    points: [
      "Payment gateway integration through FTV Pay",
      "Collection, disbursement and settlement flows",
      "Automated reconciliation and transaction reporting",
      "Fraud controls and audit-ready transaction records",
    ],
  },
  {
    index: "04",
    title: "Software & product",
    lead: "Custom systems built on the same foundations as our products.",
    points: [
      "Enterprise systems, web and mobile applications",
      "UI/UX design and design systems",
      "Technology consulting and architecture review",
      "Network and connectivity tooling, including FTV Injector",
    ],
  },
];

const method = [
  {
    step: "Review",
    body: "Two to three weeks inside your systems and your constraints. We leave a written assessment whether or not we continue.",
  },
  {
    step: "Architecture",
    body: "A decision record for every consequential choice, with the trade-offs stated plainly and owned in public.",
  },
  {
    step: "Delivery",
    body: "Small senior teams shipping to production continuously. No staffing pyramid, no offshore handoff.",
  },
  {
    step: "Stewardship",
    body: "We remain on call through stabilisation and hand over runbooks your own engineers can actually follow.",
  },
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
                Engineering, held to a single standard.
              </h1>
            </Reveal>
          </div>
          <div className="col-span-12 lg:col-span-4 lg:col-start-9">
            <Reveal delay={120} variant="fade">
              <p className="text-[15.5px] leading-[1.75] text-muted-foreground">
                We work in four practices. Most engagements draw on more than one, because the
                hardest problems rarely sit inside a single discipline.
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
              <h2 className="mt-5 text-[1.9rem] leading-[1.12] font-bold">How an engagement runs.</h2>
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
            Bring us the part nobody wants to touch.
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
