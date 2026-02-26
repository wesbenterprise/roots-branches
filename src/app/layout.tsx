import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Roots & Branches — Old Florida Faith Learning",
  description:
    "A faith adventure for families, inspired by the 245-mile circuit of Rev. Robert Howren Barnett.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} antialiased`}>{children}</body>
    </html>
  );
}
