import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mountain Hike",
  description: "Hike mountains, explore nature.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
