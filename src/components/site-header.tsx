import { Link, useLocation } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { Menu, Moon, Music2, Sun, Volume2, VolumeX, X } from "lucide-react";

import mark from "@/assets/fusionify-mark.png.asset.json";
import { assetUrl } from "@/lib/asset-url";
import { cn } from "@/lib/utils";

const homeNav = [
  ["About", "about"],
  ["Work", "work"],
  ["Company", "experience"],
  ["Services", "hire"],
  ["Contact", "contact"],
] as const;

export function SiteHeader() {
  const pathname = useLocation({ select: (location) => location.pathname });
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [progress, setProgress] = useState(0);
  const [active, setActive] = useState("about");
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);
  const [sound, setSound] = useState(true);
  const [music, setMusic] = useState(false);
  const [language, setLanguage] = useState<"EN" | "ID">("EN");
  const lastY = useRef(0);

  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 24);
      setHidden(y > lastY.current && y > 180);
      lastY.current = y;
      const distance = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(distance > 0 ? Math.min(1, y / distance) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (pathname !== "/") return;
    const sections = homeNav
      .map(([, id]) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActive(visible.target.id);
      },
      { rootMargin: "-28% 0px -55%", threshold: [0.05, 0.25, 0.6] },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const key = (event: KeyboardEvent) => event.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", key);
    return () => {
      document.body.style.overflow = previous;
      document.removeEventListener("keydown", key);
    };
  }, [open]);

  const toggleTheme = () => {
    const next = !document.documentElement.classList.contains("dark");
    document.documentElement.classList.toggle("dark", next);
    setDark(next);
    try {
      localStorage.setItem("fusionify-theme", next ? "dark" : "light");
    } catch {
      /* noop */
    }
  };

  const go = (id: string) => {
    setOpen(false);
    if (pathname === "/") document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    else window.location.assign(`/#${id}`);
  };

  return (
    <header
      className={cn("fx-nav", scrolled && "is-scrolled", hidden && "is-hidden", open && "is-open")}
    >
      <span
        className="fx-page-progress"
        style={{ transform: `scaleX(${progress})` }}
        aria-hidden="true"
      />
      <div className="fx-nav-side">
        <Link to="/" aria-label="Fusionify home" className="fx-nav-mark">
          <img src={assetUrl(mark)} alt="" />
        </Link>
      </div>
      <nav className="fx-nav-pill" aria-label="Main navigation">
        <div className="fx-nav-links">
          {homeNav.map(([label, id]) => (
            <button
              key={id}
              type="button"
              onClick={() => go(id)}
              aria-current={pathname === "/" && active === id ? "true" : undefined}
            >
              {label}
            </button>
          ))}
          <Link to="/capabilities" className="fx-nav-page">
            All capabilities
          </Link>
        </div>
        <span className="fx-nav-status">
          <i /> FUSIONIFY DIGITAL
        </span>
      </nav>
      <div className="fx-nav-side fx-nav-side--end">
        <div className="fx-lang" aria-label="Language">
          {(["EN", "ID"] as const).map((item) => (
            <button
              key={item}
              type="button"
              aria-pressed={language === item}
              onClick={() => setLanguage(item)}
            >
              {item}
            </button>
          ))}
        </div>
        <button
          type="button"
          className="fx-icon-button"
          aria-label="Sound effects"
          aria-pressed={sound}
          onClick={() => setSound((value) => !value)}
        >
          {sound ? <Volume2 /> : <VolumeX />}
        </button>
        <button
          type="button"
          className="fx-icon-button"
          aria-label="Ambient music"
          aria-pressed={music}
          onClick={() => setMusic((value) => !value)}
        >
          <Music2 />
          <i className={music ? "is-on" : ""} />
        </button>
        <button
          type="button"
          className="fx-icon-button"
          aria-label="Switch light or dark mode"
          onClick={toggleTheme}
        >
          {dark ? <Moon /> : <Sun />}
        </button>
        <button
          type="button"
          className="fx-mobile-toggle"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      <nav className="fx-mobile-menu" aria-label="Mobile navigation" hidden={!open}>
        {homeNav.map(([label, id]) => (
          <button key={id} type="button" onClick={() => go(id)}>
            {label}
          </button>
        ))}
        <Link to="/capabilities" onClick={() => setOpen(false)}>
          All capabilities
        </Link>
      </nav>
    </header>
  );
}
