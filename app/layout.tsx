import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Loopwell",
  description: "Build a growth path around reuse, repair, and the value already in circulation.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
