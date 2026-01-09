export default function Home() {
  return (
    <>
      {/* NAVBAR */}
      <header
        style={{
          padding: "20px 60px",
          borderBottom: "1px solid #1f2937",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          background: "#020617",
        }}
      >
        <div style={{ fontSize: 22, fontWeight: "bold", color: "#fff" }}>
          Exportrio
        </div>

        <nav style={{ display: "flex", gap: 24, fontSize: 14 }}>
          <a href="/products" style={navLink}>Products</a>
          <a href="/markets" style={navLink}>Markets</a>
          <a href="/quality" style={navLink}>Quality</a>
          <a href="/contact" style={navLink}>Contact</a>
        </nav>
      </header>

      {/* HERO */}
      <section
        style={{
          padding: "100px 60px",
          background:
            "linear-gradient(180deg, #020617 0%, #020617 60%, #020617 100%)",
        }}
      >
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <h1
            style={{
              fontSize: 54,
              fontWeight: "bold",
              lineHeight: 1.2,
              marginBottom: 20,
            }}
          >
            Premium Indian Rice Exporter
          </h1>

          <p style={{ fontSize: 18, color: "#cbd5f5", maxWidth: 720 }}>
            Exportrio supplies high-quality Indian Basmati and Non-Basmati rice to
            Africa, Middle East, Asia, and Europe with strict FOB India terms.
          </p>

          <div
            style={{
              marginTop: 30,
              padding: 20,
              borderRadius: 8,
              background: "#020617",
              border: "1px solid #1f2937",
              maxWidth: 520,
            }}
          >
            <strong>FOB India</strong> · 25 MT / 20ft container
            <br />
            Ports: Nhava Sheva · Mundra · Kandla
          </div>

          <div style={{ marginTop: 40 }}>
            <a
              href="/contact"
              style={{
                background: "#4f46e5",
                padding: "14px 28px",
                borderRadius: 8,
                color: "#fff",
                textDecoration: "none",
                fontWeight: "bold",
              }}
            >
              Request FOB Quote
            </a>
          </div>
        </div>
      </section>

      {/* VALUE CARDS */}
      <section style={{ padding: "80px 60px", background: "#020617" }}>
        <div
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 24,
          }}
        >
          <Card title="Export-Ready">
            APEDA registered, FSSAI compliant, ISO / HACCP mills
          </Card>

          <Card title="Africa Focused">
            Strong supply experience for Benin, Senegal & Kenya
          </Card>

          <Card title="Bulk FOB Shipments">
            25 MT / 20ft containers from major Indian ports
          </Card>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        style={{
          padding: 30,
          textAlign: "center",
          borderTop: "1px solid #1f2937",
          fontSize: 13,
          color: "#94a3b8",
          background: "#020617",
        }}
      >
        © {new Date().getFullYear()} Exportrio. All rights reserved.
      </footer>
    </>
  );
}

/* ---------- Helpers ---------- */

const navLink = {
  color: "#cbd5f5",
  textDecoration: "none",
};

function Card({ title, children }) {
  return (
    <div
      style={{
        padding: 24,
        borderRadius: 12,
        background: "#020617",
        border: "1px solid #1f2937",
      }}
    >
      <h3 style={{ fontSize: 18, marginBottom: 10 }}>{title}</h3>
      <p style={{ color: "#cbd5f5", fontSize: 14 }}>{children}</p>
    </div>
  );
}



