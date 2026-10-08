import { Reveal, Stagger } from "@/components/reveal";

type Leader = { name: string; role: string };

const leaders: Leader[] = [
  { name: "Muhammad Jundy Rabbani, S.Kom.", role: "Founder & CEO" },
  { name: "Arya Isnaidi, S.Kom.", role: "Co-Founder & Co-CEO" },
  { name: "Dini Mufidah", role: "Chief Financial Officer" },
  { name: "Fadhil Anugrah Riady", role: "Chief Technology Officer" },
  { name: "Faturrahman Syamil", role: "Chief Marketing Officer" },
  { name: "Muhamad Faisal", role: "Chief Digital Officer" },
];

function initials(name: string) {
  return name
    .replace(/,.*$/, "")
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("");
}

export function Leadership() {
  return (
    <section className="shell rule-top section-y">
      <div className="grid-12 gap-y-12">
        <div className="col-span-12 lg:col-span-4">
          <Reveal>
            <p className="eyebrow">Leadership</p>
            <h2 className="mt-5 text-[2rem] leading-[1.12] font-bold">
              The people leading Fusionify.
            </h2>
          </Reveal>
        </div>
        <div className="col-span-12 lg:col-span-6 lg:col-start-7 lg:self-end">
          <Reveal delay={120} variant="fade">
            <p className="max-w-xl text-[15.5px] leading-[1.75] text-muted-foreground">
              The executive team responsible for strategy, finance, technology, marketing and
              digital operations across the ecosystem.
            </p>
          </Reveal>
        </div>
      </div>

      <Stagger step={90} className="mt-20 grid-12 gap-y-14">
        {leaders.map((leader) => (
          <article key={leader.name} className="group col-span-12 sm:col-span-6 lg:col-span-4">
            <div
              aria-hidden="true"
              className="flex aspect-[5/4] items-end rounded-[var(--radius-lg,1rem)] border border-hairline bg-surface p-8 transition-colors duration-700 group-hover:border-primary/30"
            >
              <span className="font-display text-[4.5rem] leading-none font-extrabold tracking-[-0.04em] text-ink/15 transition-colors duration-700 group-hover:text-primary/40">
                {initials(leader.name)}
              </span>
            </div>
            <div className="mt-6">
              <h3 className="text-[18px] leading-tight font-semibold tracking-[-0.01em]">
                {leader.name}
              </h3>
              <p className="mt-1.5 text-[13.5px] font-medium text-brand">{leader.role}</p>
            </div>
          </article>
        ))}
      </Stagger>
    </section>
  );
}
