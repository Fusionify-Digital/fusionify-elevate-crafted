import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState, type PointerEvent } from "react";
import { ArrowRight, ChevronLeft, ChevronRight, Copy, ExternalLink } from "lucide-react";

import mascot from "@/assets/fusionify-mascot.png.asset.json";
import mark from "@/assets/fusionify-mark.png.asset.json";
import { assetUrl } from "@/lib/asset-url";
import { Reveal, Stagger } from "@/components/reveal";

const products = [
  {
    code: "AUTOMATION PLATFORM · 2026",
    name: "Fusionify Bot",
    body: "Automated ordering, digital-product sales, payments and business operations across Telegram and WhatsApp.",
    tags: ["Telegram", "WhatsApp", "12+ gateways"],
    metric: "5.2K+",
    metricLabel: "transactions",
  },
  {
    code: "PAYMENT INFRASTRUCTURE · BUILDING",
    name: "FTV Pay",
    body: "QRIS-focused payment infrastructure with merchant APIs, signed webhooks and operational dashboards.",
    tags: ["QRIS", "API", "Webhooks"],
    metric: "HMAC",
    metricLabel: "verified events",
  },
  {
    code: "CUSTOM DIGITAL SOLUTIONS",
    name: "Fusionify Solutions",
    body: "Websites, software, automation and infrastructure shaped around how each client actually works.",
    tags: ["Web", "Software", "Infrastructure"],
    metric: "B2B",
    metricLabel: "delivery practice",
  },
  {
    code: "NETWORK TECHNOLOGY",
    name: "FTV Injector",
    body: "Network utilities and VPN technology developed from Fusionify's earliest infrastructure experiments.",
    tags: ["Network", "VPN", "Multi-cloud"],
    metric: "2022",
    metricLabel: "first shipped",
  },
  {
    code: "LOCAL-FIRST AI TOOLING",
    name: "Agent Memory",
    body: "One local memory layer for AI agents, editors and CLI workflows across sessions.",
    tags: ["Local-first", "MCP", "Agents"],
    metric: "ONE",
    metricLabel: "memory layer",
  },
];

const leaders = [
  [
    "Muhammad Jundy Rabbani, S.Kom.",
    "Founder & CEO",
    "Product direction, engineering and company strategy.",
  ],
  ["Arya Isnaidi, S.Kom.", "Co-Founder & Co-CEO", "Business leadership and company operations."],
  ["Dini Mufidah", "Chief Financial Officer", "Financial planning and operational accountability."],
  [
    "Faturrahman Syamil",
    "Chief Marketing Officer",
    "Market positioning, communication and growth.",
  ],
  ["Muhamad Faisal", "Creative Media Associate", "Creative production and brand media."],
  ["Muhammad Fauzi", "Business Development Associate", "Partnerships and business development."],
  [
    "Winahyu Fajar Pamungkas",
    "Financial Support Partner",
    "Financial support and business coordination.",
  ],
] as const;

const numbers = [
  [
    "AUTOMATION",
    "5.2K+",
    "Transactions handled",
    "Processed across Fusionify Bot's growing business workflow.",
  ],
  [
    "COMMUNITY",
    "150+",
    "Active users",
    "People and businesses using Fusionify products and services.",
  ],
  [
    "PAYMENTS",
    "12+",
    "Gateway integrations",
    "Payment providers connected across local and regional markets.",
  ],
  [
    "ECOSYSTEM",
    "5",
    "Core product lines",
    "Automation, payments, solutions, network technology and AI tooling.",
  ],
  [
    "COMPANY",
    "2024",
    "Legally registered",
    "PT Fusionify Digital Store, registered in Bogor on 18 August 2024.",
  ],
  [
    "NEXT",
    "2027",
    "Group transition",
    "Targeted company-name transition to PT Fusionify Digital Group.",
  ],
];

const services = [
  [
    "WEB APPS",
    "Internal systems & dashboards",
    "Operational tools, portals, reporting and workflows built around the way your team works.",
  ],
  [
    "AI & AUTOMATION",
    "Less repetitive work",
    "Bots, payment automation and AI-assisted processes aimed at the steps that consume hours every week.",
  ],
  [
    "WEBSITES",
    "Company profile experiences",
    "Fast, expressive and maintainable websites designed to make a company feel credible and alive.",
  ],
] as const;

function ProductVisual({ index }: { index: number }) {
  return (
    <div className={`fx-product-visual fx-product-visual--${index + 1}`} aria-hidden="true">
      <div className="fx-browser-bar">
        <i />
        <i />
        <i />
        <span>fusionify.id / product</span>
      </div>
      <div className="fx-ui-shell">
        <div className="fx-ui-rail">
          <b>Fi</b>
          <i />
          <i />
          <i />
          <i />
        </div>
        <div className="fx-ui-main">
          <div className="fx-ui-head">
            <span>FUSIONIFY SYSTEM</span>
            <em>LIVE</em>
          </div>
          <div className="fx-ui-chart">
            <i />
            <i />
            <i />
            <i />
            <i />
            <i />
          </div>
          <div className="fx-ui-grid">
            <span />
            <span />
            <span />
          </div>
        </div>
      </div>
    </div>
  );
}

function WorkDeck() {
  const [current, setCurrent] = useState(0);
  const active = products[current]!;
  const move = (delta: number) =>
    setCurrent((value) => (value + delta + products.length) % products.length);

  return (
    <section className="fx-work fx-sky" id="work" aria-labelledby="work-title">
      <span className="fx-cloud fx-cloud--work-a" aria-hidden="true" />
      <span className="fx-cloud fx-cloud--work-b" aria-hidden="true" />
      <div className="fx-container">
        <div className="fx-bracket-head">
          <p className="fx-sheet">
            <b>03 / 06</b> Selected ecosystem
          </p>
          <h2 id="work-title">Work</h2>
          <p>
            PRODUCTS
            <br />
            PEOPLE
            <br />
            USE
            <br />
            EVERY
            <br />
            DAY.
          </p>
        </div>

        <div className="fx-deck">
          <div className="fx-deck-copy" aria-live="polite">
            <div className="fx-deck-count">
              <b>{String(current + 1).padStart(2, "0")}</b>
              <span>{String(products.length).padStart(2, "0")}</span>
            </div>
            <p className="fx-mono-label">{active.code}</p>
            <h3>{active.name}</h3>
            <p className="fx-deck-body">{active.body}</p>
            <div className="fx-tags">
              {active.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
            <div className="fx-deck-controls">
              <button type="button" onClick={() => move(-1)} aria-label="Previous product">
                <ChevronLeft />
              </button>
              <button type="button" onClick={() => move(1)} aria-label="Next product">
                <ChevronRight />
              </button>
              <Link to="/capabilities" className="fx-text-link">
                View capabilities <ArrowRight />
              </Link>
            </div>
          </div>

          <div className="fx-deck-stage">
            {products.map((product, index) => {
              const offset = (index - current + products.length) % products.length;
              return (
                <button
                  type="button"
                  key={product.name}
                  className="fx-deck-card"
                  data-offset={offset > 2 ? "hidden" : offset}
                  onClick={() => setCurrent(index)}
                  aria-label={`Show ${product.name}`}
                  aria-pressed={index === current}
                >
                  <ProductVisual index={index} />
                  <span className="fx-card-caption">
                    <b>{product.name}</b>
                    <em>
                      {product.metric} · {product.metricLabel}
                    </em>
                  </span>
                </button>
              );
            })}
          </div>
        </div>
        <p className="fx-drag-hint">CLICK A CARD OR USE THE ARROW KEYS</p>
      </div>
    </section>
  );
}

function TeamExperience() {
  const [open, setOpen] = useState(0);
  return (
    <section className="fx-paper fx-experience" id="experience" aria-labelledby="experience-title">
      <div className="fx-container fx-experience-grid">
        <div>
          <p className="fx-sheet">
            <b>04 / 06</b> Company &amp; team
          </p>
          <h2 className="fx-heading" id="experience-title">
            Where we’re going.
          </h2>
          <div className="fx-milestones">
            <p>COMPANY JOURNEY</p>
            <div>
              <b>2027</b>
              <span>Target transition to PT Fusionify Digital Group</span>
            </div>
            <div>
              <b>2024</b>
              <span>PT Fusionify Digital Store registered in Bogor</span>
            </div>
            <div>
              <b>2022</b>
              <span>Technology journey began with network tooling</span>
            </div>
          </div>
        </div>
        <div className="fx-team-list">
          {leaders.map(([name, role, body], index) => (
            <article key={name} className={open === index ? "is-open" : ""}>
              <button type="button" onClick={() => setOpen(index)} aria-expanded={open === index}>
                <span>{index < 2 ? "FOUNDERSHIP" : "LEADERSHIP"}</span>
                <strong>{role}</strong>
                <em>{name}</em>
                <i>{open === index ? "−" : "+"}</i>
              </button>
              <div className="fx-team-detail">
                <p>{body}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function NumbersRail() {
  const rail = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const node = rail.current;
    if (!node) return;
    const onWheel = (event: WheelEvent) => {
      if (Math.abs(event.deltaY) <= Math.abs(event.deltaX)) return;
      const atStart = node.scrollLeft <= 0 && event.deltaY < 0;
      const atEnd = node.scrollLeft + node.clientWidth >= node.scrollWidth - 2 && event.deltaY > 0;
      if (atStart || atEnd) return;
      event.preventDefault();
      node.scrollLeft += event.deltaY;
    };
    node.addEventListener("wheel", onWheel, { passive: false });
    return () => node.removeEventListener("wheel", onWheel);
  }, []);

  return (
    <section className="fx-numbers" aria-labelledby="numbers-title">
      <div className="fx-container">
        <p className="fx-sheet">
          <b>A FEW NUMBERS</b>
        </p>
        <h2 className="fx-heading" id="numbers-title">
          What the work added up to.
        </h2>
        <div className="fx-rail-meta">
          <span>01 / {String(numbers.length).padStart(2, "0")}</span>
          <i />
        </div>
      </div>
      <div
        className="fx-numbers-viewport"
        ref={rail}
        tabIndex={0}
        aria-label="Fusionify numbers, scroll sideways"
      >
        <div className="fx-numbers-track">
          {numbers.map(([label, value, title, body], index) => (
            <article key={label} className={index % 2 ? "is-blue" : ""}>
              <p>{label}</p>
              <strong>{value}</strong>
              <h3>{title}</h3>
              <span>{body}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function HireSection() {
  return (
    <section className="fx-paper fx-hire" id="hire" aria-labelledby="hire-title">
      <div className="fx-container">
        <p className="fx-sheet">
          <b>05 / 06</b> Work with us
        </p>
        <h2 className="fx-heading" id="hire-title">
          Need something built?
        </h2>
        <p className="fx-lead">
          Fusionify works with individuals, UMKM, startups and companies. You talk directly with the
          people designing and building the system.
        </p>
        <Stagger className="fx-service-grid" step={90}>
          {services.map(([tag, title, body], index) => (
            <article key={tag}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <p>{tag}</p>
              <h3>{title}</h3>
              <div className="fx-service-line" />
              <p className="fx-service-body">{body}</p>
            </article>
          ))}
        </Stagger>
        <div className="fx-process">
          <h3>
            From first chat to <em>launch</em> day.
          </h3>
          <ol>
            <li>
              <b>01</b>
              <span>Tell us what needs to work</span>
            </li>
            <li>
              <b>02</b>
              <span>Receive a clear scope and direction</span>
            </li>
            <li>
              <b>03</b>
              <span>Build with visible progress</span>
            </li>
            <li>
              <b>04</b>
              <span>Launch, handover and support</span>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    await navigator.clipboard.writeText("hello@fusionify.id");
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };
  return (
    <section className="fx-contact" id="contact" aria-labelledby="contact-title">
      <div className="fx-container fx-contact-grid">
        <div>
          <p className="fx-sheet">
            <b>06 / 06</b> Contact
          </p>
          <h2 id="contact-title">Let’s build the next thing.</h2>
          <p>
            Have an operation that feels too manual, a product that needs shipping, or a system that
            needs untangling? Our inbox is open.
          </p>
          <div className="fx-contact-actions">
            <a className="fx-button fx-button--light" href="mailto:hello@fusionify.id">
              Send an email <ArrowRight />
            </a>
            <Link className="fx-button fx-button--glass" to="/contact">
              Project brief
            </Link>
          </div>
        </div>
        <div className="fx-contact-card">
          <img src={assetUrl(mark)} alt="" />
          <span>FUSIONIFY / BOGOR</span>
          <a href="mailto:hello@fusionify.id">hello@fusionify.id</a>
          <button type="button" onClick={copy}>
            <Copy /> {copied ? "COPIED" : "COPY EMAIL"}
          </button>
          <a href="https://github.com/Fusionify-Digital" target="_blank" rel="noreferrer">
            GitHub <ExternalLink />
          </a>
        </div>
      </div>
    </section>
  );
}

export function FusionifyExperience() {
  const hero = useRef<HTMLElement>(null);
  const onMove = (event: PointerEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    event.currentTarget.style.setProperty("--mx", x.toFixed(3));
    event.currentTarget.style.setProperty("--my", y.toFixed(3));
  };

  return (
    <div className="fx-site">
      <section
        ref={hero}
        className="fx-hero fx-sky"
        onPointerMove={onMove}
        aria-labelledby="home-title"
      >
        <span className="fx-cloud fx-cloud--a" aria-hidden="true" />
        <span className="fx-cloud fx-cloud--b" aria-hidden="true" />
        <span className="fx-cloud fx-cloud--c" aria-hidden="true" />
        <span className="fx-cloud fx-cloud--d" aria-hidden="true" />
        <p className="fx-hero-side">AUTOMATION / SOFTWARE / INFRASTRUCTURE</p>
        <div className="fx-container fx-hero-grid">
          <div className="fx-hero-copy">
            <p className="fx-hero-eyebrow">
              <i /> HI, WE’RE FUSIONIFY — WE BUILD
            </p>
            <h1 id="home-title">
              <strong>Digital</strong>
              <span>systems that</span>
              <strong>move business.</strong>
            </h1>
            <div className="fx-dimension-line">
              <i />
              <span>FUSIONIFY / 2026</span>
              <i />
            </div>
            <div className="fx-hero-actions">
              <a className="fx-button fx-button--light" href="#work">
                See the work <ArrowRight />
              </a>
              <a className="fx-button fx-button--glass" href="#about">
                Meet Fusionify
              </a>
            </div>
          </div>
          <div className="fx-hero-mark">
            <span className="fx-sun" aria-hidden="true" />
            <img src={assetUrl(mascot)} alt="Fi, the Fusionify mascot" />
            <p>
              Build. Connect.
              <br />
              Scale.
            </p>
          </div>
        </div>
        <div className="fx-cloudbank fx-cloudbank--back" aria-hidden="true" />
        <div className="fx-cloudbank" aria-hidden="true" />
      </section>

      <div className="fx-ticker" aria-hidden="true">
        <div>
          {[
            "AUTOMATION",
            "SOFTWARE",
            "PAYMENTS",
            "INFRASTRUCTURE",
            "AI AGENTS",
            "DIGITAL PRODUCTS",
            "AUTOMATION",
            "SOFTWARE",
            "PAYMENTS",
            "INFRASTRUCTURE",
          ].map((item, index) => (
            <span key={`${item}-${index}`}>
              {item}
              <i />
            </span>
          ))}
        </div>
      </div>

      <section className="fx-paper fx-about" id="about" aria-labelledby="about-title">
        <div className="fx-container fx-about-grid">
          <Reveal className="fx-about-figure" variant="scale">
            <div className="fx-about-art">
              <span className="fx-about-orbit" />
              <img
                src={assetUrl(mascot)}
                alt="Fi, Fusionify's mascot, representing the connected company ecosystem"
              />
              <b>F</b>
            </div>
            <p>FIG. 02 — FUSIONIFY, BOGOR</p>
          </Reveal>
          <div className="fx-about-copy">
            <p className="fx-sheet">
              <b>02 / 06</b> About
            </p>
            <Reveal>
              <h2 id="about-title">
                Fusionify started with network technology. Today we build automation, payments,
                software and digital infrastructure under one connected ecosystem.
              </h2>
              <strong>
                We like problems where a manual step is costing a business hours every week.
              </strong>
            </Reveal>
            <div className="fx-about-stats">
              <div>
                <b>2022</b>
                <span>Journey began</span>
              </div>
              <div>
                <b>5+</b>
                <span>Core platforms</span>
              </div>
              <div>
                <b>12+</b>
                <span>Payment gateways</span>
              </div>
            </div>
            <div className="fx-built-for">
              <p>BUILT WITH</p>
              <div>
                {["AUTOGOPAY", "VIOLETMEDIAPAY", "GRETONGERS", "SMKS PIONIR", "QUIPANEL"].map(
                  (item) => (
                    <span key={item}>{item}</span>
                  ),
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <WorkDeck />

      <section className="fx-paper fx-studio" aria-labelledby="studio-title">
        <div className="fx-container">
          <p>FUSIONIFY STUDIO / BOGOR</p>
          <h2 id="studio-title">
            One company.
            <br />
            <em>Different systems.</em>
            <br />
            One standard.
          </h2>
          <div className="fx-studio-row">
            <p>
              From a payment webhook to a full operational platform, every build is treated as a
              real business system, not a decorative prototype.
            </p>
            <Link to="/company" className="fx-text-link">
              Inside the company <ArrowRight />
            </Link>
          </div>
        </div>
      </section>

      <TeamExperience />
      <NumbersRail />
      <HireSection />
      <ContactSection />
    </div>
  );
}
