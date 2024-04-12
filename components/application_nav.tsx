import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import Link from "next/link";

export default function ApplicationNav() {
  return (
    <>
      <Navbar fluid rounded>
        <NavbarBrand as={Link} href="/">
          <img src="/balasolu.svg" className="mr-3 h-6 sm:h-9" alt="Logo" />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white"></span>
        </NavbarBrand>
        <NavbarToggle />
        <NavbarCollapse>
          <NavbarLink as={Link} href="/">
            Home
          </NavbarLink>
          <NavbarLink as={Link} href="/contact">
            Contact
          </NavbarLink>
          <NavbarLink as={Link} href="/pricing">
            Pricing
          </NavbarLink>
          <NavbarLink as={Link} href="/services">
            Services
          </NavbarLink>
          <NavbarLink as={Link} href="/stack">
            Stack
          </NavbarLink>
        </NavbarCollapse>
      </Navbar>
    </>
  );
}
