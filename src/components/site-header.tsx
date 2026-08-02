import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import mark from "@/assets/fusionify-mark.png.asset.json";
import { cn } from "@/lib/utils";

const nav = [
  { to: "/capabilities", label: "Capabilities" },
  { to: "/company", label: "Company" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-500",
        scrolled ? "border-b border-hairline bg-background/85 backdrop-blur-xl" : "border-b border-transparent",
      )}
    >
      <div className="shell flex h-[72px] items-center justify-between gap-6">
        <Link to="/" className="flex min-w-0 items-center gap-2.5" onClick={() => setOpen(false)}>
          <img src={mark.url} alt="" width={28} height={28} className="h-7 w-7 shrink-0" />
          <span className="truncate font-display text-[15px] font-extrabold tracking-[-0.02em] text-ink">
            FUSIONIFY
          </span>
        </Link>

        <nav className="hidden items-center gap-9 text-[13.5px] md:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="link-quiet"
              activeProps={{ className: "text-ink" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            to="/contact"
            className="btn btn-primary hidden h-10 px-5 text-[13px] md:inline-flex"
          >
            Start a conversation
          </Link>
          <button
            type="button"
            aria-label="Menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-hairline md:hidden"
          >
            <span className="relative block h-[9px] w-4">
              <span
                className={cn(
                  "absolute inset-x-0 top-0 h-px bg-ink transition-transform duration-500",
                  open && "translate-y-[4px] rotate-45",
                )}
              />
              <span
                className={cn(
                  "absolute inset-x-0 bottom-0 h-px bg-ink transition-transform duration-500",
                  open && "-translate-y-[4px] -rotate-45",
                )}
              />
            </span>
          </button>
        </div>
      </div>

      <div
        className={cn(
          "overflow-hidden border-t border-hairline bg-background transition-[max-height] duration-500 md:hidden",
          open ? "max-h-72" : "max-h-0 border-transparent",
        )}
      >
        <div className="shell flex flex-col gap-1 py-4">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              className="py-2.5 text-[15px] text-muted-foreground"
              activeProps={{ className: "text-ink" }}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
