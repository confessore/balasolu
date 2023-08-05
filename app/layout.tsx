import "./globals.css";
import type { Metadata } from "next";
import { Akshar } from "next/font/google";
import Head from "next/head";
import Script from "next/script";

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
      <div className="container">
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
        />
        <Script id="google-analytics">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}');
        `}
        </Script>
      </div>
      <body className={akshar.className}>{children}</body>
    </html>
  );
}
