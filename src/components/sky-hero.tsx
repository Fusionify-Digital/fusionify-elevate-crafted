import { Link } from "@tanstack/react-router";
import { useEffect, useRef } from "react";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import mascot from "@/assets/fusionify-mascot.png.asset.json";
import mark from "@/assets/fusionify-mark.png.asset.json";
import { assetUrl } from "@/lib/asset-url";

export function SkyHero() {
  const stage = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = stage.current;
    if (!node || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    const onPointerMove = (event: PointerEvent) => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        const rect = node.getBoundingClientRect();
        const x = Math.max(-1, Math.min(1, (event.clientX - rect.left) / rect.width * 2 - 1));
        const y = Math.max(-1, Math.min(1, (event.clientY - rect.top) / rect.height * 2 - 1));
        node.style.setProperty("--pointer-x", x.toFixed(3));
        node.style.setProperty("--pointer-y", y.toFixed(3));
      });
    };
    const reset = () => {
      node.style.setProperty("--pointer-x", "0");
      node.style.setProperty("--pointer-y", "0");
    };

    node.addEventListener("pointermove", onPointerMove, { passive: true });
    node.addEventListener("pointerleave", reset);
    return () => {
      node.removeEventListener("pointermove", onPointerMove);
      node.removeEventListener("pointerleave", reset);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section ref={stage} className="sky-hero" aria-labelledby="home-title">
      <div className="sky-grain" aria-hidden="true" />
      <div className="sky-wisp sky-wisp-a" aria-hidden="true" />
      <div className="sky-wisp sky-wisp-b" aria-hidden="true" />
      <span className="hero-side-label" aria-hidden="true">
        Digital technology company · Bogor, Indonesia
      </span>

      <div className="shell sky-hero-inner">
        <div className="hero-copy hero-enter">
          <p className="hero-kicker">
            <span className="status-dot" aria-hidden="true" />
            Systems online · building since 2022
          </p>
          <h1 id="home-title" className="sky-title">
            We build digital
            <span className="sky-title-light">systems that move.</span>
          </h1>
          <p className="sky-lead">
            Automation, software, payments and infrastructure made by FUSIONIFY for businesses
            that want to move faster.
          </p>
          <div className="hero-actions">
            <Link to="/contact" className="btn hero-primary">
              Start a project <ArrowUpRight aria-hidden="true" />
            </Link>
            <a href="#ecosystem" className="btn hero-secondary">
              Explore the ecosystem
            </a>
          </div>
        </div>

        <div className="hero-world hero-enter-late" aria-label="Fusionify interactive system illustration">
          <div className="hero-orbit orbit-one" aria-hidden="true" />
          <div className="hero-orbit orbit-two" aria-hidden="true" />
          <div className="hero-orbit-dot" aria-hidden="true" />

          <div className="system-card system-card-back" aria-hidden="true">
            <span>FUSIONIFY / CORE</span>
            <i />
          </div>
          <div className="system-card system-card-mid" aria-hidden="true">
            <span>AUTOMATION</span>
            <b>24/7</b>
          </div>
          <div className="system-card system-card-front" aria-hidden="true">
            <div className="card-mark">
              <img src={assetUrl(mark)} alt="" width={44} height={44} />
            </div>
            <div>
              <span>CONNECTED ECOSYSTEM</span>
              <strong>Build. Connect. Scale.</strong>
            </div>
          </div>

          <div className="hero-mascot-wrap">
            <span className="mascot-glow" aria-hidden="true" />
            <img
              src={assetUrl(mascot)}
              alt="Fi, the Fusionify mascot"
              width={420}
              height={420}
              fetchPriority="high"
              className="hero-mascot"
            />
            <span className="mascot-bubble">Ready to build?</span>
          </div>
        </div>
      </div>

      <a href="#overview" className="hero-scroll">
        <span>Scroll to discover</span>
        <ArrowDown aria-hidden="true" />
      </a>

      <div className="cloud cloud-a" aria-hidden="true" />
      <div className="cloud cloud-b" aria-hidden="true" />
      <div className="cloud-bank cloud-bank-back" aria-hidden="true" />
      <div className="cloud-bank" aria-hidden="true" />
    </section>
  );
}

const loop = ["AUTOMATION", "SOFTWARE", "PAYMENTS", "INFRASTRUCTURE", "DIGITAL PRODUCTS"];

export function CapabilityTicker() {
  const items = [...loop, ...loop];
  return (
    <div className="capability-ticker" aria-label="Fusionify capabilities">
      <div className="ticker-track">
        {items.map((item, index) => (
          <span key={`${item}-${index}`} aria-hidden={index >= loop.length || undefined}>
            {item}
            <i aria-hidden="true" />
          </span>
        ))}
      </div>
    </div>
  );
}

