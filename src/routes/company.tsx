import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal, Stagger } from "@/components/reveal";
import { StoryTimeline } from "@/components/story-timeline";
import { Leadership } from "@/components/leadership";

export const Route = createFileRoute("/company")({
  head: () => ({
    meta: [
      { title: "Company — Fusionify" },
      {
        name: "description",
        content:
          "About Fusionify: PT Fusionify Digital Store, registered 18 August 2024 in Bogor, with a planned name change to PT Fusionify Digital Group in 2027.",
      },
      { property: "og:title", content: "Company — Fusionify" },
      {
        property: "og:description",
        content: "Company facts, history and team behind the Fusionify ecosystem.",
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
  { title: "Current legal entity", body: "PT Fusionify Digital Store, registered on 18 August 2024 in Bogor, Indonesia." },
  { title: "Planned for 2027", body: "A change of company name to PT Fusionify Digital Group." },
  { title: "Focus", body: "Digital automation, software and application development, scalable digital infrastructure, ready-to-use digital products and custom digital solutions." },
  { title: "Who we serve", body: "Individuals, UMKM, startups and companies seeking digital transformation and technology solutions." },
];

function Company() {
  return (
    <>
      <section className="shell page-hero section-top">
        <div className="grid-12 gap-y-10">
          <div className="col-span-12 lg:col-span-7">
            <Reveal>
              <p className="sheet-label"><span>01</span> Company</p>
              <h1 className="mt-6 text-[2.75rem] leading-[1.05] font-extrabold sm:text-[3.5rem]">
                A growing digital technology ecosystem.
              </h1>
            </Reveal>
          </div>
          <div className="col-span-12 lg:col-span-4 lg:col-start-9">
            <Reveal delay={120} variant="fade">
              <p className="text-[15.5px] leading-[1.75] text-muted-foreground">
                Fusionify began as a small technology project in August 2022 and has grown into an
                ecosystem of automation, payment, custom solution, network and digital tool
                products.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="shell rule-top section-y">
        <div className="grid-12 gap-y-14">
          <div className="col-span-12 lg:col-span-4">
            <Reveal>
              <p className="eyebrow">Company facts</p>
              <h2 className="mt-5 text-[2rem] leading-[1.12] font-bold">
                Who we are, today and next.
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
            Work with Fusionify.
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
