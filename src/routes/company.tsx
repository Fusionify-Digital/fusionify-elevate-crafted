import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal, Stagger } from "@/components/reveal";

export const Route = createFileRoute("/company")({
  head: () => ({
    meta: [
      { title: "Company — PT Fusionify Digital Group" },
      {
        name: "description",
        content:
          "PT Fusionify Digital Group is a Jakarta-based engineering group building durable digital infrastructure for enterprises across Southeast Asia.",
      },
      { property: "og:title", content: "Company — PT Fusionify Digital Group" },
      {
        property: "og:description",
        content: "Who we are, how we hire, and the principles we hold to.",
      },
      { property: "og:url", content: "/company" },
    ],
    links: [{ rel: "canonical", href: "/company" }],
  }),
  component: Company,
});

const principles = [
  {
    title: "Write it down",
    body: "Every consequential decision leaves a record. Institutional memory should outlive the people who created it.",
  },
  {
    title: "Small and senior",
    body: "We staff engagements with fewer, more experienced people. Coordination cost is the tax nobody budgets for.",
  },
  {
    title: "Own the outcome",
    body: "Delivery ends when the system is stable in production, not when the milestone is invoiced.",
  },
  {
    title: "Boring where it counts",
    body: "Novelty is reserved for the problem, never for the infrastructure carrying it.",
  },
];

const timeline = [
  { year: "2018", body: "Founded in Jakarta by four engineers from banking and logistics platforms." },
  { year: "2020", body: "First national-scale cloud migration delivered for a regulated financial client." },
  { year: "2023", body: "Applied intelligence practice established; Singapore delivery presence opened." },
  { year: "2026", body: "Forty-plus enterprise programmes delivered across five industries." },
];

function Company() {
  return (
    <>
      <section className="shell section-top">
        <div className="grid-12 gap-y-10">
          <div className="col-span-12 lg:col-span-7">
            <Reveal>
              <p className="eyebrow">Company</p>
              <h1 className="mt-6 text-[2.75rem] leading-[1.05] font-extrabold sm:text-[3.5rem]">
                An engineering group, not an agency.
              </h1>
            </Reveal>
          </div>
          <div className="col-span-12 lg:col-span-4 lg:col-start-9">
            <Reveal delay={120} variant="fade">
              <p className="text-[15.5px] leading-[1.75] text-muted-foreground">
                PT Fusionify Digital Group operates from Jakarta with a delivery presence in
                Singapore. We are held privately and take on work we can staff with people who have
                already built the thing once.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="shell rule-top section-y">
        <div className="grid-12 gap-y-14">
          <div className="col-span-12 lg:col-span-4">
            <Reveal>
              <p className="eyebrow">Principles</p>
              <h2 className="mt-5 text-[2rem] leading-[1.12] font-bold">
                Four commitments we do not trade away.
              </h2>
            </Reveal>
          </div>
          <div className="col-span-12 lg:col-span-7 lg:col-start-6">
            {principles.map((p, i) => (
              <Reveal key={p.title} delay={i * 80} className="border-t border-hairline py-7 first:border-0 first:pt-0">
                <h3 className="text-[17px] font-semibold">{p.title}</h3>
                <p className="mt-2.5 max-w-xl text-[14.5px] leading-[1.7] text-muted-foreground">
                  {p.body}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="rule-top bg-surface section-y">
        <div className="shell grid-12 gap-y-12">
          <div className="col-span-12 lg:col-span-3">
            <Reveal>
              <p className="eyebrow">Trajectory</p>
            </Reveal>
          </div>
          <div className="col-span-12 lg:col-span-8 lg:col-start-5">
            {timeline.map((t, i) => (
              <Reveal
                key={t.year}
                delay={i * 90}
                className="grid grid-cols-[minmax(0,1fr)] gap-1.5 border-t border-hairline py-7 sm:grid-cols-[7rem_minmax(0,1fr)] sm:gap-8"
              >
                <p className="font-display text-[15px] font-bold text-primary">{t.year}</p>
                <p className="text-[14.5px] leading-[1.7] text-muted-foreground">{t.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="shell section-y">
        <Reveal>
          <h2 className="max-w-2xl text-[2.25rem] leading-[1.1] font-extrabold sm:text-[2.75rem]">
            Work with people who stay.
          </h2>
          <Link
            to="/contact"
            className="btn btn-primary mt-10"
          >
            Contact Fusionify
          </Link>
        </Reveal>
      </section>
    </>
  );
}
