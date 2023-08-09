import "./globals.css";
import type { Metadata } from "next";
import { Akshar } from "next/font/google";
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
      <>
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
      </>
      <body className={akshar.className}>{children}</body>
    </html>
  );
}
