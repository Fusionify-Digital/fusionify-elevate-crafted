import { Link } from "@tanstack/react-router";
import { Reveal, Stagger } from "@/components/reveal";

const partners = [
  "AutoGoPay Merchant",
  "VioletMediaPay",
  "Ari Server Premium",
  "GRETONGERS",
  "KIR Insancedikia",
  "SMKS Pionir Bojonggede",
  "SMKS Graha Nusantara Bogor",
  "MG Order Digital",
];

const clients = [
  "PT QUIPANEL Beton Ringan Indonesia",
  "PT HADYVA Interior Jabodetabek",
  "CASSA SNACK",
  "TOKYO SHOP ID",
  "FAHMI COLLECTION",
  "NAKAMA DIGITAL",
  "ARIES DIGITAL",
  "PREMIBIZ BIZCLUB",
];

function NameGrid({ label, title, names }: { label: string; title: string; names: string[] }) {
  return (
    <div className="mt-16 lg:mt-20">
      <Reveal>
        <div className="flex items-baseline justify-between gap-6 border-t border-ink/80 pt-5">
          <h3 className="text-[16px] font-semibold tracking-[-0.01em]">{title}</h3>
          <p className="text-[12.5px] tracking-[0.08em] text-muted-foreground uppercase">{label}</p>
        </div>
      </Reveal>
      <Stagger step={60} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {names.map((n) => (
          <div
            key={n}
            className="flex min-h-[6.5rem] items-center border-b border-hairline py-6 pr-6 text-[15px] leading-snug font-medium text-ink transition-colors duration-500 hover:text-primary"
          >
            {n}
          </div>
        ))}
      </Stagger>
    </div>
  );
}

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
                Payment, infrastructure, community and education partners, alongside the businesses
                that run on Fusionify products and solutions.
              </p>
            </Reveal>
          </div>
        </div>

        <NameGrid title="Partners" label={`${partners.length} organisations`} names={partners} />
        <NameGrid title="Clients" label={`${clients.length} businesses`} names={clients} />

        <Reveal delay={60} variant="fade">
          <div className="mt-14 grid-12 items-center gap-y-6 pt-4">
            <p className="col-span-12 max-w-xl text-[15px] leading-[1.72] text-muted-foreground lg:col-span-7">
              Interested in partnering with Fusionify or becoming a client?
            </p>
            <div className="col-span-12 lg:col-span-4 lg:col-start-9 lg:justify-self-end">
              <Link to="/contact" className="btn btn-secondary">
                Get in touch
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
