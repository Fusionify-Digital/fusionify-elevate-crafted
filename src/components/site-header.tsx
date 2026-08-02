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
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const solid = scrolled || open;

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={cn(
          "header-surface absolute inset-0",
          solid
            ? "bg-background/72 shadow-[inset_0_-1px_0_0_var(--hairline)] backdrop-blur-xl backdrop-saturate-150"
            : "bg-transparent",
        )}
        aria-hidden
      />

      <div className="shell relative flex h-[76px] items-center justify-between gap-8">
        <Link
          to="/"
          className="group flex min-w-0 items-center gap-2.5"
          onClick={() => setOpen(false)}
          aria-label="Fusionify home"
        >
          <img
            src={mark.url}
            alt=""
            width={28}
            height={28}
            className="h-7 w-7 shrink-0 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.06]"
          />
          <span className="truncate font-display text-[15px] font-extrabold tracking-[-0.03em] text-ink">
            FUSIONIFY
          </span>
        </Link>

        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 md:flex">
          {nav.map((item) => (
            <Link key={item.to} to={item.to} className="nav-item">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/contact"
            className="link-quiet hidden text-[13.5px] lg:inline-block"
          >
            Client login
          </Link>
          <span className="hidden h-4 w-px bg-hairline lg:block" />
          <Link
            to="/contact"
            className="btn btn-primary hidden h-10 px-5 text-[13px] md:inline-flex"
          >
            Start a conversation
          </Link>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-hairline transition-colors duration-500 hover:bg-ink/[0.04] md:hidden"
          >
            <span className="relative block h-[9px] w-[17px]">
              <span
                className={cn(
                  "absolute inset-x-0 top-0 h-px bg-ink transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]",
                  open && "translate-y-[4px] rotate-45",
                )}
              />
              <span
                className={cn(
                  "absolute inset-x-0 bottom-0 h-px bg-ink transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]",
                  open && "-translate-y-[4px] -rotate-45",
                )}
              />
            </span>
          </button>
        </div>
      </div>

      <div
        className={cn(
          "relative overflow-hidden bg-background/95 backdrop-blur-xl transition-[max-height,opacity] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] md:hidden",
          open ? "max-h-[70vh] opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <div className="shell flex flex-col border-t border-hairline py-3">
          {nav.map((item, i) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              style={{
                transitionDelay: open ? `${90 + i * 60}ms` : "0ms",
              }}
              className={cn(
                "border-b border-hairline py-4 font-display text-[17px] tracking-[-0.02em] text-muted-foreground transition-[opacity,transform] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] last:border-b-0",
                open ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0",
              )}
              activeProps={{ className: "text-ink" }}
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="btn btn-primary mt-5 h-11 w-full text-[13.5px]"
          >
            Start a conversation
          </Link>
        </div>
      </div>
    </header>
  );
}
