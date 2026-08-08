import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal, Stagger } from "@/components/reveal";
import { StoryTimeline } from "@/components/story-timeline";
import { Leadership } from "@/components/leadership";

export const Route = createFileRoute("/company")({
  head: () => ({
    meta: [
      { title: "Company — PT Fusionify Digital Group" },
      {
        name: "description",
        content:
          "PT Fusionify Digital Group is a digital technology company building automation, payment technology, cloud services and business software as one long-term ecosystem.",
      },
      { property: "og:title", content: "Company — PT Fusionify Digital Group" },
      {
        property: "og:description",
        content: "Our mission, principles and how the Fusionify ecosystem came together.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "/company" },
    ],
    links: [{ rel: "canonical", href: "/company" }],
  }),
  component: Company,
});

const principles = [
  {
    title: "Build it as infrastructure",
    body: "Anything we ship is assumed to run for years. That standard applies to a bot workflow and a payment rail equally.",
  },
  {
    title: "One ecosystem, not a portfolio",
    body: "Products share identity, payment rails and interface language, so adopting a second one costs less than the first.",
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

function Company() {
  return (
    <>
      <section className="shell section-top">
        <div className="grid-12 gap-y-10">
          <div className="col-span-12 lg:col-span-7">
            <Reveal>
              <p className="eyebrow">Company</p>
              <h1 className="mt-6 text-[2.75rem] leading-[1.05] font-extrabold sm:text-[3.5rem]">
                A digital technology company.
              </h1>
            </Reveal>
          </div>
          <div className="col-span-12 lg:col-span-4 lg:col-start-9">
            <Reveal delay={120} variant="fade">
              <p className="text-[15.5px] leading-[1.75] text-muted-foreground">
                PT Fusionify Digital Group builds scalable digital infrastructure, automation,
                AI-powered solutions, cloud services, payment technologies and business software
                that accelerate digital transformation — operated as a long-term ecosystem rather
                than a series of projects.
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
            <Stagger step={95}>
              {principles.map((p) => (
                <div key={p.title} className="border-t border-hairline py-7 first:border-0 first:pt-0">
                  <h3 className="text-[17px] font-semibold">{p.title}</h3>
                  <p className="mt-2.5 max-w-xl text-[14.5px] leading-[1.7] text-muted-foreground">
                    {p.body}
                  </p>
                </div>
              ))}
            </Stagger>
          </div>
        </div>
      </section>

      <StoryTimeline />

      <Leadership />


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
