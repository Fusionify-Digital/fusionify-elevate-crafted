import { Link } from "@tanstack/react-router";
import { Reveal, Stagger } from "@/components/reveal";

const solutions = [
  { title: "Digital automation", body: "Automation for ordering, digital product sales, payments and business operations." },
  { title: "Software & application development", body: "Software and applications built to each client's requirements." },
  { title: "Website development", body: "Website projects for businesses and organisations." },
  { title: "Custom digital systems", body: "Systems shaped around a client's own processes." },
  { title: "Ready-to-use digital products", body: "Digital products and services from the Fusionify ecosystem, including Fusionify digital tools." },
  { title: "Digital infrastructure", body: "Payment infrastructure through FTV Pay and network technology through FTV Injector." },
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
                for our clients.
              </h2>
            </Reveal>
          </div>
          <div className="col-span-12 lg:col-span-5 lg:col-start-8">
            <Reveal delay={110} variant="fade">
              <p className="text-[15.5px] leading-[1.72] text-muted-foreground">
                Services for individuals, UMKM, startups and companies seeking digital
                transformation.
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
              View capabilities
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
