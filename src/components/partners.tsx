import { Link } from "@tanstack/react-router";
import { Reveal, Stagger } from "@/components/reveal";

const tracks = [
  {
    title: "Technology partners",
    body: "Payment, cloud and connectivity providers whose services sit inside the infrastructure we operate.",
  },
  {
    title: "Delivery partners",
    body: "Agencies and engineering teams that build on Fusionify platforms for their own clients.",
  },
  {
    title: "Clients",
    body: "Organisations running automation, payment or custom systems delivered by Fusionify Solutions.",
  },
];

export function Partners() {
  return (
    <section id="partners" className="rule-top section-y">
      <div className="shell">
        <div className="grid-12 items-end gap-y-8">
          <div className="col-span-12 lg:col-span-5">
            <Reveal>
              <p className="eyebrow">Partners &amp; Clients</p>
              <h2 className="mt-6 text-[2rem] leading-[1.12] font-bold tracking-[-0.025em] sm:text-[2.4rem]">
                Who we build with.
              </h2>
            </Reveal>
          </div>
          <div className="col-span-12 lg:col-span-5 lg:col-start-8">
            <Reveal delay={110} variant="fade">
              <p className="text-[15.5px] leading-[1.72] text-muted-foreground">
                Partnerships and client engagements are published only with written consent. Named
                references are shared directly during a technical review.
              </p>
            </Reveal>
          </div>
        </div>

        <Stagger step={100} className="mt-16 grid gap-x-16 gap-y-10 lg:mt-20 lg:grid-cols-3">
          {tracks.map((t) => (
            <div key={t.title} className="border-t border-hairline pt-6">
              <h3 className="text-[16px] leading-snug font-semibold tracking-[-0.01em]">
                {t.title}
              </h3>
              <p className="mt-3 text-[14.5px] leading-[1.72] text-muted-foreground">{t.body}</p>
            </div>
          ))}
        </Stagger>

        <Reveal delay={60} variant="fade">
          <div className="mt-14 grid-12 items-center gap-y-6 border-t border-hairline pt-10">
            <p className="col-span-12 max-w-xl text-[15px] leading-[1.72] text-muted-foreground lg:col-span-7">
              Interested in partnering with Fusionify, or in a reference from an organisation
              running a comparable system?
            </p>
            <div className="col-span-12 lg:col-span-4 lg:col-start-9 lg:justify-self-end">
              <Link to="/contact" className="btn btn-secondary">
                Request references
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
