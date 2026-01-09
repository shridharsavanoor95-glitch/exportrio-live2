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
      </body>
    </html>
  );
}

