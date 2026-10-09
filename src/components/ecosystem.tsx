import { Link } from "@tanstack/react-router";
import { Reveal, Stagger } from "@/components/reveal";

/* ---- Glyphs: thin-line marks drawn to a shared 48px grid ---- */

const glyphProps = {
  viewBox: "0 0 48 48",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.25,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

function GlyphCore() {
  return (
    <svg {...glyphProps} className="eco-glyph">
      <rect x="6" y="6" width="36" height="36" rx="10" />
      <rect x="17" y="17" width="14" height="14" rx="4" />
      <path d="M24 6v11M24 31v11M6 24h11M31 24h11" />
    </svg>
  );
}

function GlyphSignal() {
  return (
    <svg {...glyphProps} className="eco-glyph">
      <circle cx="24" cy="24" r="4.5" />
      <path d="M14.5 33.5a13 13 0 0 1 0-19M33.5 14.5a13 13 0 0 1 0 19" />
      <path d="M8.5 39.5a22 22 0 0 1 0-31M39.5 8.5a22 22 0 0 1 0 31" />
    </svg>
  );
}

function GlyphOrbit() {
  return (
    <svg {...glyphProps} className="eco-glyph">
      <ellipse cx="24" cy="24" rx="18" ry="8.5" />
      <ellipse cx="24" cy="24" rx="8.5" ry="18" />
      <circle cx="24" cy="24" r="3" />
      <circle cx="42" cy="24" r="2" />
    </svg>
  );
}

function GlyphSurface() {
  return (
    <svg {...glyphProps} className="eco-glyph">
      <path d="M24 6 42 16 24 26 6 16z" />
      <path d="M6 24l18 10 18-10" />
      <path d="M6 32l18 10 18-10" />
    </svg>
  );
}

const products = [
  {
    key: "bot",
    name: "Fusionify Bot",
    kind: "Automation platform",
    body: "Automation platform for Telegram and WhatsApp digital product businesses — automated ordering, digital product sales, payment automation and business operations.",
    glyph: GlyphCore,
    connects: ["FTV Pay", "Fusionify Solutions"],
  },
  {
    key: "pay",
    name: "FTV Pay",
    kind: "Payment infrastructure",
    body: "Digital payment infrastructure and QRIS payment platform for the products and businesses in the ecosystem.",
    glyph: GlyphSignal,
    connects: ["Fusionify Bot", "Fusionify Solutions"],
  },
  {
    key: "solutions",
    name: "Fusionify Solutions",
    kind: "Custom digital solutions",
    body: "Custom digital solutions — website projects, software development, systems, automation and digital services.",
    glyph: GlyphSurface,
    connects: ["Fusionify Bot", "FTV Pay", "FTV Injector"],
  },
  {
    key: "injector",
    name: "FTV Injector",
    kind: "Network technology",
    body: "Network utility and VPN technology product.",
    glyph: GlyphOrbit,
    connects: ["Fusionify Solutions"],
  },
];

const lead = products[0]!;
const rest = products.slice(1);

export function Ecosystem() {
  const LeadGlyph = lead.glyph;

  return (
    <section id="ecosystem" className="rule-top section-y">
      <div className="shell">
        {/* Header */}
        <div className="grid-12 items-end gap-y-8">
          <div className="col-span-12 lg:col-span-5">
            <Reveal>
              <p className="eyebrow">The Fusionify Ecosystem</p>
              <h2 className="mt-6 text-[2rem] leading-[1.12] font-bold tracking-[-0.025em] sm:text-[2.4rem]">
                Four products.
                <br />
                One connected ecosystem.
              </h2>
            </Reveal>
          </div>
          <div className="col-span-12 lg:col-span-5 lg:col-start-8">
            <Reveal delay={110} variant="fade">
              <p className="text-[15.5px] leading-[1.72] text-muted-foreground">
                Automation, payments, custom solutions and network technology developed under one
                brand, for individuals, UMKM, startups and companies.
              </p>
            </Reveal>
          </div>
        </div>

        {/* Lead product — wide editorial panel */}
        <Reveal delay={80} className="mt-16 lg:mt-20">
          <article className="eco-panel eco-panel-lead group">
            <div className="grid-12 items-center gap-y-10">
              <div className="col-span-12 lg:col-span-4">
                <div className="eco-glyph-well eco-glyph-well-lg">
                  <LeadGlyph />
                </div>
              </div>
              <div className="col-span-12 lg:col-span-7 lg:col-start-6">
                <p className="eco-kind">{lead.kind}</p>
                <h3 className="mt-5 text-[1.75rem] leading-[1.15] font-bold tracking-[-0.02em] sm:text-[2rem]">
                  {lead.name}
                </h3>
                <p className="mt-4 max-w-[36rem] text-[15px] leading-[1.72] text-muted-foreground">
                  {lead.body}
                </p>
                <Connects to={lead.connects} />
              </div>
            </div>
          </article>
        </Reveal>

        {/* Connective spine */}
        <div className="eco-spine" aria-hidden="true">
          <span />
        </div>

        {/* Supporting products */}
        <Stagger step={120} className="grid gap-4 lg:grid-cols-12">
          {rest.map((p, i) => {
            const Glyph = p.glyph;
            const span = i === 0 ? "lg:col-span-7" : i === 1 ? "lg:col-span-5" : "lg:col-span-12";
            return (
              <article key={p.key} className={`eco-panel group flex flex-col ${span}`}>
                <div className="flex items-start justify-between gap-8">
                  <div className="min-w-0">
                    <p className="eco-kind">{p.kind}</p>
                    <h3 className="mt-4 text-[1.25rem] leading-[1.2] font-semibold tracking-[-0.015em]">
                      {p.name}
                    </h3>
                  </div>
                  <div className="eco-glyph-well shrink-0">
                    <Glyph />
                  </div>
                </div>
                <p
                  className={`mt-4 text-[14.5px] leading-[1.72] text-muted-foreground ${
                    i === 2 ? "max-w-[46rem]" : "max-w-[30rem]"
                  }`}
                >
                  {p.body}
                </p>
                <div className="mt-auto">
                  <Connects to={p.connects} />
                </div>
              </article>
            );
          })}
        </Stagger>

        {/* Ecosystem close */}
        <Reveal delay={60} variant="fade">
          <div className="mt-14 grid-12 items-center gap-y-6 border-t border-hairline pt-10">
            <p className="col-span-12 max-w-xl text-[15px] leading-[1.72] text-muted-foreground lg:col-span-7">
              Explore what Fusionify works on, or get in touch to discuss your needs.
            </p>
            <div className="col-span-12 lg:col-span-4 lg:col-start-9 lg:justify-self-end">
              <Link to="/capabilities" className="btn btn-secondary">
                How the ecosystem fits together
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Connects({ to }: { to: string[] }) {
  return (
    <p className="eco-relations mt-8">
      Works with <span>{to.join(", ")}</span>
    </p>
  );
}

