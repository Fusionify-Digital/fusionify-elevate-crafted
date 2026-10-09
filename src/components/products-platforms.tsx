import { Reveal, Stagger } from "@/components/reveal";

type Product = {
  name: string;
  kind: string;
  body: string;
  points: string[];
};

const products: Product[] = [
  {
    name: "Fusionify Bot",
    kind: "Automation platform",
    body: "Automation for digital product businesses on Telegram and WhatsApp — automated ordering, digital product sales, payment automation and business operations.",
    points: ["Automated ordering", "Digital product sales", "Payment automation", "Business operations"],
  },
  {
    name: "FTV Pay",
    kind: "Payment infrastructure",
    body: "Digital payment infrastructure and QRIS payment platform.",
    points: ["QRIS payments", "Digital payment infrastructure"],
  },
  {
    name: "Fusionify Solutions",
    kind: "Custom digital solutions",
    body: "Website projects, software development, systems, automation and digital services built to each client's needs.",
    points: ["Websites", "Software & systems", "Automation", "Digital services"],
  },
  {
    name: "FTV Injector",
    kind: "Network technology",
    body: "Network utility and VPN technology product.",
    points: ["Network utility", "VPN technology"],
  },
  {
    name: "Fusionify Digital Tools",
    kind: "Digital tools",
    body: "A set of everyday utilities from the Fusionify ecosystem.",
    points: ["Fusionify TMail", "Fusionify SpeedTest", "Fusionify Downloader", "Fusionify Uploader"],
  },
];

export function ProductsPlatforms() {
  return (
    <section id="products" className="rule-top section-y">
      <div className="shell">
        <div className="grid-12 items-end gap-y-8">
          <div className="col-span-12 lg:col-span-5">
            <Reveal>
              <p className="eyebrow">Products &amp; Platforms</p>
              <h2 className="mt-6 text-[2rem] leading-[1.12] font-bold tracking-[-0.025em] sm:text-[2.4rem]">
                What the ecosystem
                <br />
                actually runs on.
              </h2>
            </Reveal>
          </div>
          <div className="col-span-12 lg:col-span-5 lg:col-start-8">
            <Reveal delay={110} variant="fade">
              <p className="text-[15.5px] leading-[1.72] text-muted-foreground">
                Products and platforms developed within the Fusionify ecosystem.
              </p>
            </Reveal>
          </div>
        </div>

        <Stagger step={100} className="mt-16 flex flex-col lg:mt-20">
          {products.map((p, i) => (
            <article
              key={p.name}
              className="grid-12 gap-y-6 border-t border-hairline py-10 first:border-t-0 first:pt-0 lg:py-12"
            >
              <div className="col-span-12 lg:col-span-4">
                <p className="text-[13px] tracking-[0.08em] text-muted-foreground uppercase tabular-nums">
                  {String(i + 1).padStart(2, "0")} · {p.kind}
                </p>
                <h3 className="mt-4 text-[1.35rem] leading-[1.2] font-semibold tracking-[-0.015em]">
                  {p.name}
                </h3>
              </div>
              <div className="col-span-12 lg:col-span-7 lg:col-start-6">
                <p className="max-w-[38rem] text-[15px] leading-[1.75] text-muted-foreground">
                  {p.body}
                </p>
                <ul className="mt-6 flex flex-wrap gap-x-8 gap-y-3">
                  {p.points.map((point) => (
                    <li key={point} className="text-[13.5px] text-ink">
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
