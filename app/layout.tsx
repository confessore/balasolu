import "./globals.css";
import type { Metadata } from "next";
import { Akshar } from "next/font/google";

const akshar = Akshar({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Balanced Solutions Software",
  description:
    "We shall handle the nerd stuff. Based in Ocala Florida we provide development and hosting for web, mobile and desktop applications.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={akshar.className}>{children}</body>
    </html>
  );
}
