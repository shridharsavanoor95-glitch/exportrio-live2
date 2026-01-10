export default function Home() {
  return (
    <>
      {/* NAVBAR */}
      <header
        style={{
          padding: "24px 72px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <div style={{ fontSize: 22, fontWeight: 600, color: "#fff" }}>
          Exportrio
        </div>

        <nav style={{ display: "flex", gap: 28, fontSize: 14 }}>
          <NavLink href="/products">Products</NavLink>
          <NavLink href="/markets-static.html">Markets</NavLink>
          <NavLink href="/quality-static.pdf.html">Quality</NavLink>
          <NavLink href="/contact">Contact</NavLink>
        </nav>
      </header>

      {/* HERO */}
      <section style={{ padding: "120px 72px" }}>
        <div style={{ maxWidth: 1100 }}>
          <h1
            style={{
              fontSize: 56,
              lineHeight: 1.15,
              fontWeight: 700,
              marginBottom: 24,
              color: "#fff",
            }}
          >
            Premium Indian Rice Exporter
          </h1>

          <p
            style={{
              fontSize: 19,
              maxWidth: 720,
              color: "#c7d2fe",
              lineHeight: 1.6,
            }}
          >
            Exportrio supplies high-quality Indian Basmati and Non-Basmati rice to
            Africa, Middle East, Asia, and Europe, delivering consistent quality
            through FOB India containerized shipments.
          </p>

          <div
            style={{
              marginTop: 36,
              padding: 24,
              borderRadius: 14,
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)",
              maxWidth: 560,
            }}
          >
            <strong>FOB India</strong> · 25 MT / 20ft container
            <br />
            Ports: Nhava Sheva · Mundra · Kandla
          </div>

          <div style={{ marginTop: 48 }}>
            <a
              href="/contact"
              style={{
                padding: "16px 34px",
                borderRadius: 999,
                background:
                  "linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)",
                color: "#fff",
                textDecoration: "none",
                fontWeight: 600,
                fontSize: 15,
              }}
            >
              Request FOB Quote
            </a>
          </div>
        </div>
      </section>

      {/* TRUST CARDS */}
      <section style={{ padding: "90px 72px" }}>
        <div
          style={{
            maxWidth: 1100,
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 28,
          }}
        >
          <GlassCard
            title="Export Compliance"
            text="APEDA registered exporter. FSSAI compliant. ISO & HACCP certified mills."
          />
          <GlassCard
            title="Africa Market Expertise"
            text="Specialized supply to Benin, Senegal, and Kenya with demand-matched rice grades."
          />
          <GlassCard
            title="Bulk FOB Logistics"
            text="25 MT / 20ft containers from major Indian ports with export-ready documentation."
          />
        </div>
      </section>

      {/* FOOTER */}
      <footer
        style={{
          padding: 40,
          borderTop: "1px solid rgba(255,255,255,0.06)",
          textAlign: "center",
          fontSize: 13,
          color: "#94a3b8",
        }}
      >
        © {new Date().getFullYear()} Exportrio. All rights reserved.
      </footer>
    </>
  );
}

/* ---------- Helpers ---------- */

function NavLink({ href, children }) {
  return (
    <a
      href={href}
      style={{
        color: "#c7d2fe",
        textDecoration: "none",
        fontWeight: 500,
      }}
    >
      {children}
    </a>
  );
}

function GlassCard({ title, text }) {
  return (
    <div
      style={{
        padding: 28,
        borderRadius: 18,
        background: "rgba(255,255,255,0.04)",
        border: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <h3 style={{ fontSize: 18, marginBottom: 10, color: "#fff" }}>
        {title}
      </h3>
      <p style={{ fontSize: 14, lineHeight: 1.6, color: "#c7d2fe" }}>
        {text}
      </p>
    </div>
  );
}





