export default function ProductsPage() {
  return (
    <main style={{ padding: "60px 40px", maxWidth: 1100, margin: "0 auto" }}>
      <h1 style={{ fontSize: 42, marginBottom: 10 }}>Rice Products</h1>
      <p style={{ color: "#ccc", marginBottom: 40 }}>
        Exportrio supplies premium Indian rice on a strict FOB India basis.
        Minimum order: <strong>25 MT / 20ft container</strong>.
      </p>

      {/* BASMATI */}
      <section style={{ marginBottom: 60 }}>
        <h2 style={{ fontSize: 28, marginBottom: 20 }}>Basmati Rice</h2>

        <table style={tableStyle}>
          <tbody>
            <Row label="Varieties" value="1121, 1509, Traditional" />
            <Row label="Grain Length" value="8.2 – 8.4 mm" />
            <Row label="Broken" value="≤ 2%" />
            <Row label="Moisture" value="≤ 14%" />
            <Row label="Packaging" value="5kg – 50kg PP / BOPP" />
            <Row label="MOQ" value="25 MT / 20ft (FOB India)" />
          </tbody>
        </table>
      </section>

      {/* NON-BASMATI */}
      <section>
        <h2 style={{ fontSize: 28, marginBottom: 20 }}>
          Non-Basmati & Parboiled Rice
        </h2>

        <table style={tableStyle}>
          <tbody>
            <Row label="Varieties" value="IR64, Sona Masoori, Swarna" />
            <Row label="Grain Length" value="5.5 – 6.5 mm" />
            <Row label="Broken" value="≤ 5%" />
            <Row label="Moisture" value="≤ 14%" />
            <Row label="Packaging" value="25kg / 50kg bags" />
            <Row label="MOQ" value="25 MT / 20ft (FOB India)" />
          </tbody>
        </table>
      </section>

      <p style={{ marginTop: 50, color: "#aaa", fontSize: 14 }}>
        FOB Ports: Nhava Sheva · Mundra · Kandla <br />
        Inspection: SGS / Intertek on request
      </p>
    </main>
  );
}

/* ---------- Helpers ---------- */

function Row({ label, value }) {
  return (
    <tr>
      <td style={cellLabel}>{label}</td>
      <td style={cellValue}>{value}</td>
    </tr>
  );
}

const tableStyle = {
  width: "100%",
  borderCollapse: "collapse",
};

const cellLabel = {
  border: "1px solid #333",
  padding: 12,
  width: "30%",
  background: "#111",
  color: "#aaa",
};

const cellValue = {
  border: "1px solid #333",
  padding: 12,
};
