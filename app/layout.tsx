import GoogleAnalytics from "@/components/google_analytics";
import "./globals.css";
import type { Metadata } from "next";
import { Akshar } from "next/font/google";
import Script from "next/script";
import Backdrop from "@/components/backdrop";
import MainWrapper from "@/components/main_wrapper";
import Overlay from "@/components/overlay";
import Monks from "@/components/monks";
import Logo from "@/components/logo";
import NavGroup from "@/components/nav_group";
import FlexColumn from "@/components/flex_column";
import { Navbar, NavbarToggle } from "flowbite-react";
import Link from "next/link"
import ApplicationNav from "@/components/application_nav";
import Image from "next/image"
import ApplicationCarousel from "@/components/application_carousel";
import ApplicationFooter from "@/components/application_footer";

const akshar = Akshar({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "Balanced Solutions Software - Seamless Development and Hosting Solutions for Web, Mobile, and Desktop Applications",
  description:
    "We shall handle the nerd stuff. Elevate your digital presence with our expert development and hosting services. From web to mobile to desktop, we deliver tailored solutions for optimal performance.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${akshar.className}`}>
        <ApplicationNav />
        <ApplicationCarousel />
        {children}
        <ApplicationFooter />
      </body>
      <GoogleAnalytics />
    </html>
  );
}
