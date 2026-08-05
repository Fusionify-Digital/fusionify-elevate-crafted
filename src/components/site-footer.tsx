import { Link } from "@tanstack/react-router";
import mark from "@/assets/fusionify-mark.png.asset.json";

const navigate = [
  { label: "Home", to: "/" },
  { label: "Capabilities", to: "/capabilities" },
  { label: "Company", to: "/company" },
  { label: "Contact", to: "/contact" },
] as const;

const ecosystem = [
  { label: "Fusionify Core", code: "FC-01" },
  { label: "Fusionify Signal", code: "FS-02" },
  { label: "Fusionify Orbit", code: "FO-03" },
  { label: "Fusionify Surface", code: "FU-04" },
];

const practice = [
  "Platform engineering",
  "Applied intelligence",
  "Cloud & reliability",
  "Product design",
];

const legal = ["Privacy notice", "Terms of engagement", "Security posture", "Accessibility"];

const social = [
  { label: "LinkedIn", href: "https://www.linkedin.com" },
  { label: "GitHub", href: "https://github.com" },
  { label: "X", href: "https://x.com" },
];

export function SiteFooter() {
  return (
    <footer className="rule-top mt-32 bg-surface">
      <div className="shell py-20 lg:py-28">
        {/* Masthead */}
        <div className="grid-12 gap-y-10">
          <div className="col-span-12 lg:col-span-5">
            <div className="flex min-w-0 items-center gap-2.5">
              <img
                src={mark.url}
                alt="Fusionify"
                width={36}
                height={36}
                loading="lazy"
                className="h-9 w-9 shrink-0"
              />
              <span className="font-display text-[18px] font-extrabold tracking-[-0.02em] text-ink">
                FUSIONIFY
              </span>
            </div>
            <p className="mt-6 max-w-sm text-[15px] leading-[1.75] text-muted-foreground">
              PT Fusionify Digital Group builds durable digital infrastructure for enterprises
              across Southeast Asia — engineered to stay dependable for a decade.
            </p>
          </div>

          <div className="col-span-12 lg:col-span-4 lg:col-start-9 lg:text-right">
            <p className="eyebrow">Start a conversation</p>
            <a
              href="mailto:hello@fusionify.id"
              className="mt-4 inline-block font-display text-[22px] font-bold tracking-[-0.02em] text-ink transition-colors duration-500 hover:text-brand"
            >
              hello@fusionify.id
            </a>
            <p className="mt-3 text-[13.5px] text-muted-foreground">
              Response within one business day.
            </p>
          </div>
        </div>

        {/* Link matrix */}
        <div className="rule-top mt-16 grid-12 gap-y-12 pt-16">
          <nav className="col-span-6 lg:col-span-2" aria-label="Site">
            <p className="eyebrow">Navigate</p>
            <ul className="mt-6 space-y-3.5 text-[14px]">
              {navigate.map((item) => (
                <li key={item.label}>
                  <Link to={item.to} className="link-quiet">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="col-span-6 lg:col-span-3">
            <p className="eyebrow">Ecosystem</p>
            <ul className="mt-6 space-y-3.5 text-[14px]">
              {ecosystem.map((item) => (
                <li
                  key={item.code}
                  className="flex items-baseline justify-between gap-4 text-muted-foreground"
                >
                  <span className="min-w-0 truncate">{item.label}</span>
                  <span className="shrink-0 text-[11px] tracking-[0.14em] text-muted-foreground/70 uppercase">
                    {item.code}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-6 lg:col-span-2">
            <p className="eyebrow">Practice</p>
            <ul className="mt-6 space-y-3.5 text-[14px] text-muted-foreground">
              {practice.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="col-span-6 lg:col-span-2">
            <p className="eyebrow">Legal</p>
            <ul className="mt-6 space-y-3.5 text-[14px]">
              {legal.map((item) => (
                <li key={item}>
                  <Link to="/contact" className="link-quiet">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-12 lg:col-span-3">
            <p className="eyebrow">Office</p>
            <address className="mt-6 text-[14px] leading-[1.8] not-italic text-muted-foreground">
              Jl. Jend. Sudirman
              <br />
              Jakarta Selatan, DKI Jakarta
              <br />
              Indonesia 12190
            </address>
            <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-[14px]">
              {social.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="link-quiet"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Baseline */}
        <div className="rule-top mt-16 flex flex-col gap-3 pt-8 text-[12.5px] text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} PT Fusionify Digital Group. All rights reserved.</p>
          <p className="tracking-[0.14em] uppercase">Jakarta · Singapore</p>
        </div>
      </div>
    </footer>
  );
}
