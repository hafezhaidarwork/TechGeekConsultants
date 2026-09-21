import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowDownRight,
  ArrowRight,
  Cable,
  Check,
  ChevronRight,
  Cloud,
  Database,
  ExternalLink,
  HardDrive,
  Headphones,
  Mail,
  Menu,
  MonitorCog,
  Network,
  Phone,
  RadioTower,
  Server,
  ShieldCheck,
  Video,
  Wifi,
  X,
  Zap,
} from "lucide-react";
import { useState } from "react";
import logoAsset from "../assets/tgc-logo-clean.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Tech Geek Consultants | IT Infrastructure & Cybersecurity" },
      {
        name: "description",
        content:
          "Expert IT consulting in Lebanon: networks, cybersecurity, cloud, Microsoft 365, servers, virtualization, monitoring, CCTV, VoIP and managed support.",
      },
      { property: "og:title", content: "Tech Geek Consultants | IT, secured." },
      {
        property: "og:description",
        content: "Resilient infrastructure, serious security, and responsive IT support for growing businesses.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const services = [
  {
    number: "01",
    title: "Network infrastructure",
    description: "Reliable wired and wireless networks designed around your operations, not a generic template.",
    icon: Network,
    items: ["MikroTik, Fortinet & Cisco", "VLANs, DHCP & bandwidth queues", "Access points & site connectivity"],
  },
  {
    number: "02",
    title: "Cybersecurity",
    description: "Layered protection, practical policies and continuous visibility across your environment.",
    icon: ShieldCheck,
    items: ["FortiGate NGFW & firewall policies", "EDR, MDR, SIEM & SOAR", "Security hardening & compliance"],
  },
  {
    number: "03",
    title: "Cloud & Microsoft 365",
    description: "Secure identities, managed devices and smooth migrations that keep your team productive.",
    icon: Cloud,
    items: ["Tenant & Exchange migrations", "Intune device management", "Azure AD identity & access"],
  },
  {
    number: "04",
    title: "Servers & virtualization",
    description: "Scalable compute and storage engineered for continuity, performance and simpler recovery.",
    icon: Server,
    items: ["VMware ESXi & vMotion", "Windows & Linux servers", "Synology, QNAP & Seagate NAS"],
  },
  {
    number: "05",
    title: "Monitoring & support",
    description: "Proactive oversight and fast support to catch issues before they become interruptions.",
    icon: MonitorCog,
    items: ["PRTG & infrastructure monitoring", "Backup verification & restoration", "On-site and remote support"],
  },
  {
    number: "06",
    title: "Smart office systems",
    description: "Integrated communications and physical security for a connected, manageable workplace.",
    icon: RadioTower,
    items: ["Hikvision & Dahua CCTV", "Grandstream VoIP & GDMS", "Domain, web & database hosting"],
  },
];

function NetworkScene() {
  return (
    <div className="network-scene" aria-label="Animated network of servers, switches and computers">
      <svg viewBox="0 0 720 520" role="img" aria-hidden="true">
        <defs>
          <pattern id="microgrid" width="32" height="32" patternUnits="userSpaceOnUse">
            <path d="M 32 0 L 0 0 0 32" className="scene-grid" fill="none" />
          </pattern>
        </defs>
        <rect width="720" height="520" fill="url(#microgrid)" />
        <g className="scene-lines">
          <path d="M112 128 H265 V248 H360" />
          <path d="M112 390 H265 V272 H360" />
          <path d="M610 112 H474 V248 H360" />
          <path d="M610 396 H474 V272 H360" />
          <path d="M360 260 V450" />
        </g>
        <g className="data-packets">
          <circle r="5"><animateMotion dur="2.8s" repeatCount="indefinite" path="M112 128 H265 V248 H360" /></circle>
          <circle r="5"><animateMotion dur="3.4s" begin="-.8s" repeatCount="indefinite" path="M610 112 H474 V248 H360" /></circle>
          <circle r="5"><animateMotion dur="3s" begin="-1.6s" repeatCount="indefinite" path="M112 390 H265 V272 H360" /></circle>
          <circle r="5"><animateMotion dur="3.2s" begin="-.4s" repeatCount="indefinite" path="M360 260 V450" /></circle>
        </g>
        <g className="device device-server" transform="translate(60 65)">
          <rect width="104" height="126" rx="5" />
          <path d="M15 28h74M15 62h74M15 96h74" />
          <circle cx="26" cy="18" r="4" /><circle cx="40" cy="18" r="4" />
          <circle cx="26" cy="52" r="4" /><circle cx="40" cy="52" r="4" />
          <circle cx="26" cy="86" r="4" /><circle cx="40" cy="86" r="4" />
          <text x="52" y="147">SERVER</text>
        </g>
        <g className="device device-monitor" transform="translate(556 62)">
          <rect width="112" height="78" rx="5" /><path d="M56 78v18M34 96h44" />
          <path d="M19 48l15-16 13 10 19-24 25 21" className="screen-chart" />
          <text x="56" y="119">ENDPOINT</text>
        </g>
        <g className="device device-switch" transform="translate(284 220)">
          <rect width="152" height="78" rx="5" />
          <g className="ports">
            {Array.from({ length: 8 }).map((_, i) => <rect key={i} x={17 + i * 15} y="27" width="8" height="10" rx="1" />)}
          </g>
          <path d="M18 54h116" /><text x="76" y="99">CORE SWITCH</text>
        </g>
        <g className="device device-camera" transform="translate(58 354)">
          <path d="M6 8h80l18 24H31zM51 32v18M24 50h54" />
          <circle cx="75" cy="20" r="8" />
          <text x="54" y="75">CCTV</text>
        </g>
        <g className="device device-cloud" transform="translate(550 356)">
          <path d="M24 54h71c17 0 25-10 25-23 0-14-11-24-25-24-6 0-12 2-16 6C73 5 64 0 53 0 35 0 22 12 20 27 9 28 2 35 2 43c0 7 6 11 22 11z" />
          <text x="61" y="78">CLOUD</text>
        </g>
        <g className="device device-storage" transform="translate(320 428)">
          <ellipse cx="40" cy="10" rx="40" ry="10" /><path d="M0 10v38c0 6 18 10 40 10s40-4 40-10V10M0 29c0 6 18 10 40 10s40-4 40-10" />
          <text x="40" y="80">STORAGE</text>
        </g>
      </svg>
      <div className="scene-status"><span /> ALL SYSTEMS OPERATIONAL</div>
    </div>
  );
}

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <header className="site-header">
        <a href="#top" className="brand-link" aria-label="Tech Geek Consultants home">
          <img src={logoAsset.url} alt="Tech Geek Consultants" className="brand-logo" />
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          <a href="#services">Services</a><a href="#approach">Approach</a><a href="#about">About</a>
          <a href="#contact" className="nav-cta">Start a conversation <ArrowUpRightIcon /></a>
        </nav>
        <button className="menu-button" aria-label={menuOpen ? "Close menu" : "Open menu"} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X /> : <Menu />}
        </button>
        {menuOpen && (
          <nav className="mobile-nav" aria-label="Mobile navigation">
            <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
            <a href="#approach" onClick={() => setMenuOpen(false)}>Approach</a>
            <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
            <a href="#contact" onClick={() => setMenuOpen(false)}>Start a conversation</a>
          </nav>
        )}
      </header>

      <section id="top" className="hero-section">
        <div className="hero-copy">
          <div className="eyebrow"><span className="status-dot" /> BEIRUT, LEBANON · SERVING BUSINESSES EVERYWHERE</div>
          <h1>Your IT.<br /><span>Built resilient.</span></h1>
          <p>Infrastructure, cybersecurity, cloud, and support—designed as one reliable system for ambitious businesses.</p>
          <div className="hero-actions">
            <a href="#contact" className="primary-action">Secure your business <ArrowRight /></a>
            <a href="#services" className="text-action">Explore services <ArrowDownRight /></a>
          </div>
          <div className="hero-proof">
            <div><strong>99.9%</strong><span>Uptime delivered</span></div>
            <div><strong>24/7</strong><span>Operations mindset</span></div>
            <div><strong>10+</strong><span>Core service areas</span></div>
          </div>
        </div>
        <NetworkScene />
      </section>

      <div className="signal-strip" aria-hidden="true">
        <span>NETWORKS</span><Cable /><span>SECURITY</span><ShieldCheck /><span>CLOUD</span><Cloud /><span>SERVERS</span><Server /><span>SUPPORT</span><Headphones />
      </div>

      <section id="services" className="section-shell services-section">
        <div className="section-heading">
          <div><span className="section-index">01 / SERVICES</span><h2>Every layer.<br />One expert partner.</h2></div>
          <p>From the cable to the cloud, Tech Geek Consultants builds, secures, and supports the systems your team depends on.</p>
        </div>
        <div className="service-grid">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <article key={service.number} className="service-card">
                <div className="service-top"><span>{service.number}</span><Icon /></div>
                <h3>{service.title}</h3><p>{service.description}</p>
                <ul>{service.items.map((item) => <li key={item}><Check />{item}</li>)}</ul>
              </article>
            );
          })}
        </div>
      </section>

      <section id="approach" className="approach-section">
        <div className="section-shell approach-inner">
          <div className="approach-copy">
            <span className="section-index light">02 / HOW WE WORK</span>
            <h2>Complex behind the scenes.<br /><span>Simple for you.</span></h2>
            <p>We translate deep technical expertise into clear decisions, dependable systems, and support that responds.</p>
            <a href="#contact" className="light-action">Discuss your environment <ArrowRight /></a>
          </div>
          <ol className="process-list">
            <li><span>01</span><div><h3>Assess</h3><p>Map your systems, risks, and priorities.</p></div><ChevronRight /></li>
            <li><span>02</span><div><h3>Architect</h3><p>Design a right-sized, secure solution.</p></div><ChevronRight /></li>
            <li><span>03</span><div><h3>Deploy</h3><p>Implement cleanly with minimal disruption.</p></div><ChevronRight /></li>
            <li><span>04</span><div><h3>Protect</h3><p>Monitor, maintain, and improve continuously.</p></div><ChevronRight /></li>
          </ol>
        </div>
      </section>

      <section id="about" className="section-shell about-section">
        <div className="about-visual">
          <div className="rack">
            <div className="rack-head"><span>TGC / CORE</span><span className="rack-live">LIVE</span></div>
            {["FIREWALL", "CORE SWITCH", "VM CLUSTER", "BACKUP NAS"].map((item, index) => (
              <div className="rack-unit" key={item}><span>{item}</span><i /><i /><i /><b>{98 - index}%</b></div>
            ))}
            <div className="rack-wave"><span /><span /><span /><span /><span /><span /><span /><span /></div>
          </div>
          <div className="floating-badge badge-one"><Wifi /> CONNECTED</div>
          <div className="floating-badge badge-two"><ShieldCheck /> PROTECTED</div>
        </div>
        <div className="about-copy">
          <span className="section-index">03 / WHY TECH GEEK</span>
          <h2>Enterprise discipline.<br />Personal attention.</h2>
          <p className="about-lead">Led by Hafez Haidar, an IT systems administrator with over six years of experience delivering enterprise managed services, IT services, and support to clients across Lebanon — from first assessment to long-term operations.</p>
          <div className="credentials">
            <div><Network /><span><strong>Enterprise Managed Services</strong>Ongoing infrastructure operations, delivered with the rigor large organizations demand.</span></div>
            <div><ShieldCheck /><span><strong>Trusted Across Lebanon</strong>A proven track record supporting businesses in banking, ISP, trading, and beyond.</span></div>
            <div><Zap /><span><strong>End-to-End Ownership</strong>One accountable partner for design, deployment, monitoring, and support.</span></div>
          </div>
          <a href="https://linkedin.com/in/Hafez-Haidar" target="_blank" rel="noreferrer" className="linkedin-link">Meet Hafez on LinkedIn <ExternalLink /></a>
        </div>
      </section>

      <section id="contact" className="contact-section">
        <div className="contact-grid-bg" />
        <div className="contact-content">
          <span className="section-index light">04 / LET'S CONNECT</span>
          <h2>Ready for IT that<br /><span>just works?</span></h2>
          <p>Tell us what is slowing you down. We’ll help you find a clear, secure way forward.</p>
          <div className="contact-actions">
            <a href="mailto:hhaidar@techgeekconsultants.com" className="contact-primary"><Mail /> Email us <ArrowRight /></a>
            <a href="tel:+96176447140" className="contact-secondary"><Phone /> +961 76 447 140</a>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <img src={logoAsset.url} alt="Tech Geek Consultants" />
        <p>Infrastructure. Security. Confidence.</p>
        <span>© 2026 Tech Geek Consultants</span>
      </footer>
    </main>
  );
}

function ArrowUpRightIcon() {
  return <ArrowRight className="-rotate-45" />;
}