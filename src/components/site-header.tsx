import { Link, useLocation } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";
import mark from "@/assets/fusionify-mark.png.asset.json";
import { assetUrl } from "@/lib/asset-url";
import { cn } from "@/lib/utils";

const nav = [
  { to: "/capabilities", label: "Capabilities" },
  { to: "/company", label: "Company" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const pathname = useLocation({ select: (location) => location.pathname });
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
    const onScroll = () => {
      setScrolled(window.scrollY > 12);
      const distance = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(distance > 0 ? Math.min(1, window.scrollY / distance) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        menuButton.current?.focus();
      }
    };
    const onResize = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    window.addEventListener("resize", onResize);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  function toggleTheme() {
    const next = !document.documentElement.classList.contains("dark");
    document.documentElement.classList.toggle("dark", next);
    setDark(next);
    try {
      localStorage.setItem("fusionify-theme", next ? "dark" : "light");
    } catch {
      /* Theme still works when storage is unavailable. */
    }
  }

  const overHero = pathname === "/" && !scrolled && !open;

  return (
    <header
      className={cn(
        "site-header fixed inset-x-0 top-0 z-50",
        overHero ? "is-over-hero" : "is-solid",
      )}
    >
      <div className="header-surface absolute inset-0" aria-hidden="true" />
      <span className="page-progress" style={{ transform: `scaleX(${progress})` }} aria-hidden="true" />
      <div className="shell header-inner relative flex items-center justify-between gap-6">
        <Link
          to="/"
          className="site-brand"
          onClick={() => setOpen(false)}
          aria-label="Fusionify home"
        >
          <img src={assetUrl(mark)} alt="" width={30} height={30} />
          <span>FUSIONIFY</span>
        </Link>
        <nav className="header-nav" aria-label="Main navigation">
          {nav.map((item) => (
            <Link key={item.to} to={item.to}>
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="header-controls">
          <button
            type="button"
            className="theme-button"
            onClick={toggleTheme}
            aria-label="Dark mode"
            aria-pressed={dark}
          >
            {dark ? <Moon aria-hidden="true" /> : <Sun aria-hidden="true" />}
          </button>
          <Link to="/contact" className="btn btn-primary header-cta">
            Start a conversation
          </Link>
          <button
            ref={menuButton}
            type="button"
            className="menu-button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>
      </div>
      <nav
        id="mobile-navigation"
        className="mobile-nav relative md:hidden"
        hidden={!open}
        aria-label="Mobile navigation"
      >
        {nav.map((item) => (
          <Link key={item.to} to={item.to} onClick={() => setOpen(false)}>
            {item.label}
          </Link>
        ))}
        <Link to="/contact" className="btn btn-primary" onClick={() => setOpen(false)}>
          Start a conversation
        </Link>
      </nav>
    </header>
  );
}
