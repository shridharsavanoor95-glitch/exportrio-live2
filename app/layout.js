export const metadata = {
  title: "Exportrio | Premium Indian Rice Exporter",
  description:
    "Exportrio exports premium Indian rice worldwide on FOB India basis.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          fontFamily:
            "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif",
          background:
            "radial-gradient(1200px 600px at top, #0f172a 0%, #020617 60%)",
          color: "#e5e7eb",
          letterSpacing: "0.2px",
        }}
      >
        {children}
      </body>
    </html>
  );
}



