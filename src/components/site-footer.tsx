import { Link } from "@tanstack/react-router";
import mark from "@/assets/fusionify-mark.png.asset.json";
import { assetUrl } from "@/lib/asset-url";

const navigate = [
  { label: "Home", to: "/" },
  { label: "Capabilities", to: "/capabilities" },
  { label: "Company", to: "/company" },
  { label: "Contact", to: "/contact" },
] as const;

const ecosystem = ["Fusionify Bot", "FTV Pay", "Fusionify Solutions", "FTV Injector"];

const practice = ["Digital infrastructure", "Automation", "Payments", "Software & websites"];

const legal = ["Privacy notice", "Terms of engagement", "Security posture", "Accessibility"];

export function SiteFooter() {
  return (
    <footer className="site-footer rule-top bg-background">
      <div className="shell py-12 lg:py-16">
        <div className="footer-wordmark" aria-hidden="true">
          FUSIONIFY
        </div>
        {/* Masthead */}
        <div className="grid-12 gap-y-10">
          <div className="col-span-12 lg:col-span-5">
            <div className="flex min-w-0 items-center gap-2.5">
              <img
                src={assetUrl(mark)}
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
              Fusionify is a growing digital technology ecosystem. Registered as PT Fusionify
              Digital Store (Bogor, 18 August 2024). A name change to PT Fusionify Digital Group is
              planned for 2027.
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
                <li key={item}>
                  <Link to="/" hash="ecosystem" className="link-quiet">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-6 lg:col-span-2">
            <p className="eyebrow">Practice</p>
            <ul className="mt-6 space-y-3.5 text-[14px]">
              {practice.map((item) => (
                <li key={item}>
                  <Link to="/capabilities" className="link-quiet">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-6 lg:col-span-2">
            <p className="eyebrow">Legal · Unpublished</p>
            <ul className="mt-6 space-y-3.5 text-[14px] text-muted-foreground">
              {legal.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="col-span-12 lg:col-span-3">
            <p className="eyebrow">Office</p>
            <address className="mt-6 text-[14px] leading-[1.8] not-italic text-muted-foreground">
              Bogor, Jawa Barat
              <br />
              Indonesia
            </address>
            <a
              href="mailto:hello@fusionify.id"
              className="link-quiet mt-4 inline-block text-[14px]"
            >
              hello@fusionify.id
            </a>
          </div>
        </div>

        {/* Baseline */}
        <div className="rule-top mt-16 flex flex-col gap-3 pt-8 text-[12.5px] text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} PT Fusionify Digital Store. All rights reserved.</p>
          <p className="tracking-[0.14em] uppercase">Digital Technology Company · Bogor</p>
        </div>
      </div>
    </footer>
  );
}
