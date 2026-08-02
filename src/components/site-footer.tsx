import { Link } from "@tanstack/react-router";
import mark from "@/assets/fusionify-mark.png.asset.json";

export function SiteFooter() {
  return (
    <footer className="rule-top mt-32 bg-surface">
      <div className="shell py-16 lg:py-20">
        <div className="grid-12 gap-y-12">
          <div className="col-span-12 lg:col-span-5">
            <div className="flex items-center gap-2.5">
              <img
                src={mark.url}
                alt="Fusionify"
                width={32}
                height={32}
                loading="lazy"
                className="h-8 w-8"
              />
              <span className="font-display text-[17px] font-extrabold tracking-[-0.02em] text-ink">
                FUSIONIFY
              </span>
            </div>
            <p className="mt-4 max-w-sm text-[14px] leading-relaxed text-muted-foreground">
              PT Fusionify Digital Group builds durable digital infrastructure for enterprises
              across Southeast Asia.
            </p>
          </div>

          <div className="col-span-6 lg:col-span-2">
            <p className="eyebrow">Navigate</p>
            <ul className="mt-5 space-y-3 text-[14px]">
              <li>
                <Link to="/" className="link-quiet">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/capabilities" className="link-quiet">
                  Capabilities
                </Link>
              </li>
              <li>
                <Link to="/company" className="link-quiet">
                  Company
                </Link>
              </li>
              <li>
                <Link to="/contact" className="link-quiet">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-span-6 lg:col-span-2">
            <p className="eyebrow">Practice</p>
            <ul className="mt-5 space-y-3 text-[14px] text-muted-foreground">
              <li>Platform engineering</li>
              <li>Applied intelligence</li>
              <li>Cloud &amp; reliability</li>
              <li>Product design</li>
            </ul>
          </div>

          <div className="col-span-12 lg:col-span-3">
            <p className="eyebrow">Office</p>
            <address className="mt-5 not-italic text-[14px] leading-relaxed text-muted-foreground">
              Jakarta Selatan
              <br />
              DKI Jakarta, Indonesia
              <br />
              <a href="mailto:hello@fusionify.id" className="link-quiet">
                hello@fusionify.id
              </a>
            </address>
          </div>
        </div>

        <div className="rule-top mt-14 flex flex-col gap-3 pt-7 text-[12.5px] text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} PT Fusionify Digital Group. All rights reserved.</p>
          <p className="tracking-[0.14em] uppercase">Jakarta · Singapore</p>
        </div>
      </div>
    </footer>
  );
}
