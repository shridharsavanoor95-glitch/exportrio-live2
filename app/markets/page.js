export default function MarketsPage() {
  return (
    <main style={{ padding: "60px 40px", maxWidth: 1100, margin: "0 auto" }}>
      <h1 style={{ fontSize: 42, marginBottom: 10 }}>
        Indian Rice Exporter to Africa
      </h1>

      <p style={{ color: "#ccc", marginBottom: 40 }}>
        Exportrio is a trusted <strong>Indian rice exporter to Africa</strong>,
        supplying bulk FOB India shipments to importers, wholesalers, and
        distributors.
      </p>

      {/* AFRICA */}
      <section style={{ marginBottom: 50 }}>
        <h2 style={{ fontSize: 30 }}>Africa</h2>
        <ul style={{ color: "#ccc", marginTop: 20, lineHeight: 1.8 }}>
          <li>
            <strong>Benin</strong> – Long grain rice, parboiled rice for bulk
            importers
          </li>
          <li>
            <strong>Senegal</strong> – Parboiled & non-basmati rice
          </li>
          <li>
            <strong>Kenya</strong> – IR64, Sona Masoori, white rice
          </li>
        </ul>
      </section>

      {/* OTHER REGIONS */}
      <section style={{ marginBottom: 50 }}>
        <h2 style={{ fontSize: 30 }}>Middle East</h2>
        <p style={{ color: "#ccc" }}>
          Premium Basmati rice (1121 & 1509) supplied to wholesalers and
          food-service buyers.
        </p>
      </section>

      <section style={{ marginBottom: 50 }}>
        <h2 style={{ fontSize: 30 }}>Asia</h2>
        <p style={{ color: "#ccc" }}>
          Competitive non-basmati and parboiled rice for regional distributors.
        </p>
      </section>

      <section>
        <h2 style={{ fontSize: 30 }}>Europe</h2>
        <p style={{ color: "#ccc" }}>
          High-quality basmati rice meeting EU food safety standards.
        </p>
      </section>

      <p style={{ marginTop: 60, color: "#aaa", fontSize: 14 }}>
        FOB India · 25 MT / 20ft · Ports: Nhava Sheva · Mundra · Kandla
      </p>
    </main>
  );
}
