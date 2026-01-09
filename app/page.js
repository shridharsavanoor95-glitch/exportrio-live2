export default function Home() {
  return (
    <>
      {/* NAVBAR */}
      <header
        style={{
          padding: "20px 40px",
          borderBottom: "1px solid #222",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <strong style={{ fontSize: 20 }}>Exportrio</strong>
        <nav style={{ display: "flex", gap: 20, fontSize: 14 }}>
          <a href="/products" style={{ color: "#ccc" }}>Products</a> 
          <a href="/markets" style={{ color: "#ccc" }}>Markets</a>
          <a href="quality" style={{ color: "#ccc" }}>Quality</a>
          <a href="contact" style={{ color: "#ccc" }}>Contact</a>
        </nav>
      </header>

      {/* HERO */}
      <section style={{ padding: "80px 40px", maxWidth: 1100, margin: "0 auto" }}>
        <h1 style={{ fontSize: 48, marginBottom: 20 }}>
          Premium Indian Rice Exporter
        </h1>
        <p style={{ fontSize: 18, color: "#ccc", maxWidth: 700 }}>
          Exportrio exports high-quality Indian Basmati and Non-Basmati rice to
          Africa, Middle East, Asia, and Europe on a strict FOB India basis.
        </p>

        <div style={{ marginTop: 30, fontSize: 16 }}>
          <strong>FOB India</strong> · 25 MT / 20ft container
          <br />
          Ports: Nhava Sheva · Mundra · Kandla
        </div>

        <a
          href="#contact"
          style={{
            display: "inline-block",
            marginTop: 40,
            padding: "14px 28px",
            backgroundColor: "#4f46e5",
            color: "#fff",
            textDecoration: "none",
            borderRadius: 6,
            fontWeight: "bold",
          }}
        >
          Request FOB Quote
        </a>
      </section>

      {/* PRODUCTS */}
      <section id="products" style={{ padding: "60px 40px", background: "#111" }}>
        <h2 style={{ fontSize: 32 }}>Rice Products</h2>
        <ul style={{ color: "#ccc", marginTop: 20, lineHeight: 1.8 }}>
          <li>Basmati Rice – 1121, 1509, Traditional</li>
          <li>Non-Basmati Rice – IR64, Sona Masoori, Swarna</li>
          <li>Parboiled Rice – Long & Medium Grain</li>
          <li>Bulk & Private Label Packaging</li>
        </ul>
      </section>

      {/* MARKETS */}
      <section id="markets" style={{ padding: "60px 40px" }}>
        <h2 style={{ fontSize: 32 }}>Export Markets</h2>
        <p style={{ color: "#ccc", marginTop: 16 }}>
          Africa (Benin, Senegal, Kenya), Middle East, Asia, and Europe.
          We specialize in containerized FOB shipments tailored to regional demand.
        </p>
      </section>

      {/* QUALITY */}
      <section id="quality" style={{ padding: "60px 40px", background: "#111" }}>
        <h2 style={{ fontSize: 32 }}>Quality & Certifications</h2>
        <ul style={{ color: "#ccc", marginTop: 20, lineHeight: 1.8 }}>
          <li>APEDA Registered Exporter</li>
          <li>FSSAI Compliant</li>
          <li>ISO / HACCP Certified Mills</li>
          <li>Fumigation & Phytosanitary Certificates</li>
          <li>SGS / Intertek Inspection on Request</li>
        </ul>
      </section>

      {/* CONTACT */}
      <section id="contact" style={{ padding: "60px 40px" }}>
        <h2 style={{ fontSize: 32 }}>Request a Quote</h2>
        <p style={{ color: "#ccc", marginBottom: 20 }}>
          Share your requirement and our team will respond promptly.
        </p>

        <p style={{ color: "#ccc" }}>
          Email: <strong>sales@exportrio.com</strong>
          <br />
          WhatsApp: <strong>+91-XXXXXXXXXX</strong>
        </p>
      </section>

      {/* FOOTER */}
      <footer
        style={{
          padding: 20,
          textAlign: "center",
          borderTop: "1px solid #222",
          fontSize: 13,
          color: "#777",
        }}
      >
        © {new Date().getFullYear()} Exportrio. All rights reserved.
      </footer>
    </>
  );
}


