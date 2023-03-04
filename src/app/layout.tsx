import "./globals.css";

export const metadata = {
  title: "Dev Dashboard",
  description: "@engageintellect personal dev dashboard",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
