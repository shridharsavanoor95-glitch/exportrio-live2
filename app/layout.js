export const metadata = {
  title: "Exportrio | Indian Rice Exporter",
  description:
    "Exportrio is a premium Indian rice exporter supplying FOB India shipments worldwide.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          fontFamily: "Arial, sans-serif",
          backgroundColor: "#0a0a0a",
          color: "#ffffff",
        }}
      >
        {children}

        {/* WhatsApp Floating Button */}
        <a
          href="https://wa.me/919986668655?text=Hello%20Exportrio,%20we%20are%20interested%20in%20importing%20Indian%20rice%20on%20FOB%20basis.%20Please%20share%20price%20and%20specifications."
          target="_blank"
          rel="noopener noreferrer"
          style={{
            position: "fixed",
            bottom: 20,
            right: 20,
            backgroundColor: "#25D366",
            color: "#fff",
            padding: "14px 18px",
            borderRadius: "50px",
            fontSize: 14,
            fontWeight: "bold",
            textDecoration: "none",
            boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
            zIndex: 9999,
          }}
        >
          WhatsApp Us
        </a>
      </body>
    </html>
  );
}


