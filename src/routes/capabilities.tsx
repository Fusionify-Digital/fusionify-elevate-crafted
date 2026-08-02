import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/reveal";

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
    title: "Platform engineering",
    lead: "The systems your business cannot be down without.",
    points: [
      "Service architecture and domain modelling",
      "Event pipelines and transactional integrity",
      "Internal developer platforms and tooling",
      "Legacy decomposition without a big-bang cutover",
    ],
  },
  {
    index: "02",
    title: "Applied intelligence",
    lead: "Models deployed against a measurable business decision.",
    points: [
      "Retrieval and document intelligence",
      "Risk, pricing and demand forecasting",
      "Evaluation harnesses and drift monitoring",
      "Human-in-the-loop operator interfaces",
    ],
  },
  {
    index: "03",
    title: "Cloud & reliability",
    lead: "Uptime expressed as a number, defended by practice.",
    points: [
      "Cloud migration and landing zones",
      "Observability, SLOs and error budgets",
      "Incident command and postmortem discipline",
      "Cost engineering and capacity planning",
    ],
  },
  {
    index: "04",
    title: "Product design",
    lead: "Interfaces held to the same standard as the systems below.",
    points: [
      "Design systems and interface architecture",
      "Operator and back-office tooling",
      "Research with the people who actually use it",
      "Accessibility as a baseline, not a phase",
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
      <section className="shell pt-20 pb-16 lg:pt-28 lg:pb-24">
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
            <Reveal delay={120}>
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
          <Reveal key={p.index} delay={i * 60} className="rule-top py-14 lg:py-16">
            <div className="grid-12 gap-y-6">
              <div className="col-span-12 lg:col-span-1">
                <span className="font-display text-[12px] font-semibold tracking-[0.14em] text-primary">
                  {p.index}
                </span>
              </div>
              <div className="col-span-12 lg:col-span-5">
                <h2 className="text-[1.65rem] leading-[1.15] font-bold sm:text-[1.9rem]">
                  {p.title}
                </h2>
                <p className="mt-3 max-w-sm text-[15px] leading-relaxed text-muted-foreground">
                  {p.lead}
                </p>
              </div>
              <div className="col-span-12 lg:col-span-5 lg:col-start-8">
                <ul className="space-y-3.5">
                  {p.points.map((point) => (
                    <li
                      key={point}
                      className="flex gap-3.5 border-b border-hairline pb-3.5 text-[14.5px] text-foreground last:border-0"
                    >
                      <span className="mt-[9px] h-[3px] w-[3px] shrink-0 rounded-full bg-primary" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        ))}
      </section>

      <section className="rule-top mt-6 bg-surface py-20 lg:py-28">
        <div className="shell grid-12 gap-y-12">
          <div className="col-span-12 lg:col-span-3">
            <Reveal>
              <p className="eyebrow">Method</p>
              <h2 className="mt-5 text-[1.9rem] leading-[1.12] font-bold">How an engagement runs.</h2>
            </Reveal>
          </div>
          <div className="col-span-12 lg:col-span-8 lg:col-start-5">
            <div className="space-y-px">
              {method.map((m, i) => (
                <Reveal
                  key={m.step}
                  delay={i * 90}
                  className="grid grid-cols-[minmax(0,1fr)] gap-2 border-t border-hairline py-7 sm:grid-cols-[10rem_minmax(0,1fr)] sm:gap-8"
                >
                  <h3 className="text-[15px] font-semibold">{m.step}</h3>
                  <p className="text-[14.5px] leading-[1.7] text-muted-foreground">{m.body}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="shell py-24 lg:py-32">
        <Reveal>
          <h2 className="max-w-2xl text-[2.25rem] leading-[1.1] font-extrabold sm:text-[2.75rem]">
            Bring us the part nobody wants to touch.
          </h2>
          <Link
            to="/contact"
            className="mt-9 inline-flex rounded-full bg-primary px-6 py-3 text-[14px] font-medium text-primary-foreground transition-all duration-500 hover:brightness-110"
          >
            Start a conversation
          </Link>
        </Reveal>
      </section>
    </>
  );
}
