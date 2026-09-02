import { Reveal, Stagger } from "@/components/reveal";

type Product = {
  name: string;
  kind: string;
  body: string;
  points: string[];
  status: string;
};

const products: Product[] = [
  {
    name: "Fusionify Bot",
    kind: "Automation platform",
    body: "Telegram and WhatsApp automation for digital commerce — order handling, reseller management, payment automation, analytics and daily business operations from one control plane.",
    points: ["Reseller management", "Order & payment automation", "Operational analytics"],
    status: "Operating",
  },
  {
    name: "FTV Pay",
    kind: "Payment infrastructure",
    body: "Payment gateway and digital payment infrastructure covering collection, disbursement, settlement and reconciliation for products and clients built on the ecosystem.",
    points: ["Payment gateway", "Disbursement & settlement", "Reconciliation"],
    status: "Operating",
  },
  {
    name: "Fusionify Solutions",
    kind: "Engineering practice",
    body: "Custom software development, enterprise systems, websites, mobile applications, automation, AI integration, UI/UX and consulting — delivered on the same foundations we run ourselves.",
    points: ["Enterprise systems", "Web & mobile", "AI integration & consulting"],
    status: "Operating",
  },
  {
    name: "FTV Injector",
    kind: "Network technology",
    body: "Network utility and VPN technology for connectivity, tunnelling and secure access — the transport layer beneath products that must work on constrained networks.",
    points: ["Network utility", "VPN technology", "Secure access"],
    status: "Operating",
  },
  {
    name: "Digital tools & future platforms",
    kind: "In development",
    body: "Internal tooling and forthcoming platforms are developed on the same identity, payment and interface foundations, so each addition joins the ecosystem rather than sitting beside it.",
    points: ["Shared identity layer", "Shared payment rails", "Shared interface language"],
    status: "In development",
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
                Each platform is built and operated by Fusionify. They can be adopted individually,
                but they are designed to be run together.
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
                <p className="mt-4 text-[12.5px] tracking-[0.08em] text-brand uppercase">
                  {p.status}
                </p>
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
