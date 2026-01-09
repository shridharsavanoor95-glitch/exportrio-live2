export default function Quality() {
  return (
    <main
      style={{
        padding: "100px 72px",
        maxWidth: 1100,
        margin: "0 auto",
      }}
    >
      {/* HEADER */}
      <h1
        style={{
          fontSize: 48,
          fontWeight: 700,
          marginBottom: 20,
          color: "#fff",
        }}
      >
        Quality, Compliance & Certifications
      </h1>

      <p
        style={{
          fontSize: 18,
          maxWidth: 760,
          lineHeight: 1.6,
          color: "#c7d2fe",
          marginBottom: 60,
        }}
      >
        Exportrio follows strict quality assurance and export compliance
        procedures to ensure every shipment meets international food safety
        standards and buyer specifications. All supplies are executed on a
        <strong> FOB India</strong> basis.
      </p>

      {/* CERTIFICATION CARDS */}
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: 28,
          marginBottom: 80,
        }}
      >
        <CertCard
          title="APEDA Registered Exporter"
          text="Authorized by the Government of India to export rice and processed agricultural products worldwide."
        />

        <CertCard
          title="FSSAI Compliant"
          text="All products comply with Food Safety and Standards Authority of India regulations, ensuring hygiene, traceability, and food safety."
        />

        <CertCard
          title="ISO & HACCP Certified Mills"
          text="Rice sourced from ISO and HACCP certified milling facilities with controlled processing, grading, and packaging."
        />

        <CertCard
          title="Export Documentation"
          text="Phytosanitary certificate, fumigation certificate, and complete export documentation provided with every shipment."
        />

        <CertCard
          title="Third-Party Inspection"
          text="Independent inspection by SGS or Intertek can be arranged as per buyer or tender requirements."
        />
      </section>

      {/* CTA */}
      <section
        style={{
          padding: 40,
          borderRadius: 20,
          background: "rgba(255,255,255,0.04)",
          border: "1px solid rgba(255,255,255,0.08)",
          maxWidth: 720,
        }}
      >
        <h3 style={{ fontSize: 24, marginBottom: 12, color: "#fff" }}>
          Download Company Profile
        </h3>

        <p style={{ color: "#c7d2fe", marginBottom: 24 }}>
          Download our tender-ready company profile containing product
          specifications, certifications, logistics, and export terms.
        </p>

        <a
          href="/Exportrio_Tender_Profile.pdf"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-block",
            padding: "16px 32px",
            borderRadius: 999,
            background:
              "linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)",
            color: "#fff",
            textDecoration: "none",
            fontWeight: 600,
            fontSize: 15,
          }}
        >
          Download PDF
        </a>
      </section>

      {/* FOOTER NOTE */}
      <p
        style={{
          marginTop: 60,
          fontSize: 14,
          color: "#94a3b8",
        }}
      >
        FOB Ports: Nhava Sheva · Mundra · Kandla<br />
        Minimum Order Quantity: 25 MT / 20ft container
      </p>
    </main>
  );
}

/* Helper component */
function CertCard({ title, text }) {
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
