import { Link } from "@tanstack/react-router";
import { Reveal, Stagger } from "@/components/reveal";

const solutions = [
  {
    title: "Automation",
    body: "Operational workflows, messaging automation and back-office processes handled by systems instead of people repeating them.",
  },
  {
    title: "Software & application development",
    body: "Product engineering for web and mobile applications, from architecture and interface through to production operation.",
  },
  {
    title: "Website development",
    body: "Corporate sites, portals and commerce front-ends built for performance, accessibility and long-term maintenance.",
  },
  {
    title: "Custom digital systems",
    body: "Enterprise systems shaped around an organisation's own processes rather than forcing the organisation into a template.",
  },
  {
    title: "AI integration",
    body: "Applied AI inside existing systems — assistance, classification and decision support placed where it changes the work.",
  },
  {
    title: "Digital infrastructure",
    body: "Cloud services, payment rails, connectivity and the operational foundations the rest of the stack depends on.",
  },
];

export function Solutions() {
  return (
    <section id="solutions" className="rule-top bg-surface section-y">
      <div className="shell">
        <div className="grid-12 items-end gap-y-8">
          <div className="col-span-12 lg:col-span-5">
            <Reveal>
              <p className="eyebrow">Solutions</p>
              <h2 className="mt-6 text-[2rem] leading-[1.12] font-bold tracking-[-0.025em] sm:text-[2.4rem]">
                Work we take on
                <br />
                for organisations.
              </h2>
            </Reveal>
          </div>
          <div className="col-span-12 lg:col-span-5 lg:col-start-8">
            <Reveal delay={110} variant="fade">
              <p className="text-[15.5px] leading-[1.72] text-muted-foreground">
                Engagements run on the same infrastructure that carries our own products, which is
                why they can start small and still be extended for years.
              </p>
            </Reveal>
          </div>
        </div>

        <Stagger step={90} className="mt-16 grid gap-x-16 gap-y-10 sm:grid-cols-2 lg:mt-20 lg:grid-cols-3">
          {solutions.map((s) => (
            <div key={s.title} className="border-t border-hairline pt-6">
              <h3 className="text-[16px] leading-snug font-semibold tracking-[-0.01em]">
                {s.title}
              </h3>
              <p className="mt-3 max-w-[26rem] text-[14.5px] leading-[1.72] text-muted-foreground">
                {s.body}
              </p>
            </div>
          ))}
        </Stagger>

        <Reveal delay={80} variant="fade">
          <div className="mt-14 border-t border-hairline pt-10">
            <Link to="/capabilities" className="btn btn-secondary">
              See how engagements run
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
