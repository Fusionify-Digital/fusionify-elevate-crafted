import { Reveal, Stagger } from "@/components/reveal";
import leader1 from "@/assets/leader-1.jpg";
import leader2 from "@/assets/leader-2.jpg";
import leader3 from "@/assets/leader-3.jpg";
import leader4 from "@/assets/leader-4.jpg";

type Leader = {
  name: string;
  role: string;
  since: string;
  note: string;
  focus: string;
  portrait: string;
};

const leaders: Leader[] = [
  {
    name: "Arya Wibisono",
    role: "Chief Executive Officer",
    since: "Founding partner, 2016",
    note: "Spent a decade running payments platforms before Fusionify. Sets the standard for what we agree to build.",
    focus: "Strategy · Governance",
    portrait: leader1,
  },
  {
    name: "Ratna Kusuma",
    role: "Chief Operating Officer",
    since: "Joined 2018",
    note: "Runs delivery across Jakarta and Singapore. Believes a schedule is a promise, not an estimate.",
    focus: "Delivery · Client outcomes",
    portrait: leader2,
  },
  {
    name: "Daniel Halim",
    role: "Chief Technology Officer",
    since: "Joined 2019",
    note: "Architect of Fusionify Core. Prefers systems that stay boring under load for a decade.",
    focus: "Architecture · Platform",
    portrait: leader3,
  },
  {
    name: "Maya Ardhani",
    role: "Managing Director, Product",
    since: "Joined 2021",
    note: "Shapes the ecosystem roadmap. Holds the line between what is asked for and what is needed.",
    focus: "Product · Design",
    portrait: leader4,
  },
];

export function Leadership() {
  return (
    <section className="shell rule-top section-y">
      <div className="grid-12 gap-y-12">
        <div className="col-span-12 lg:col-span-4">
          <Reveal>
            <p className="eyebrow">Leadership</p>
            <h2 className="mt-5 text-[2rem] leading-[1.12] font-bold">
              The people accountable for the work.
            </h2>
          </Reveal>
        </div>
        <div className="col-span-12 lg:col-span-6 lg:col-start-7 lg:self-end">
          <Reveal delay={120} variant="fade">
            <p className="max-w-xl text-[15.5px] leading-[1.75] text-muted-foreground">
              Four partners sign off on every engagement. They are not a layer above delivery — each
              carries client work, reviews architecture, and stays reachable for the life of the
              system.
            </p>
          </Reveal>
        </div>
      </div>

      <Stagger step={110} className="mt-20 grid-12 gap-y-16">
        {leaders.map((leader) => (
          <article key={leader.name} className="col-span-12 sm:col-span-6 lg:col-span-3">
            <figure className="leader-portrait">
              <img
                src={leader.portrait}
                alt={`Portrait of ${leader.name}, ${leader.role} at PT Fusionify Digital Group`}
                loading="lazy"
                width={912}
                height={1152}
              />
              <figcaption className="leader-focus">{leader.focus}</figcaption>
            </figure>

            <div className="mt-7">
              <h3 className="text-[18px] leading-tight font-semibold tracking-[-0.01em]">
                {leader.name}
              </h3>
              <p className="mt-1.5 text-[13.5px] font-medium text-brand">{leader.role}</p>
              <p className="mt-4 text-[13px] tracking-[0.08em] text-muted-foreground uppercase">
                {leader.since}
              </p>
              <p className="mt-4 max-w-[34ch] text-[14px] leading-[1.7] text-muted-foreground">
                {leader.note}
              </p>
            </div>
          </article>
        ))}
      </Stagger>
    </section>
  );
}
