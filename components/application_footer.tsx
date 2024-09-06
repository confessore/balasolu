import {
  Footer,
  FooterCopyright,
  FooterLink,
  FooterLinkGroup,
} from "flowbite-react";

export default function ApplicationFooter() {
  return (
    <>
      <Footer container>
        <FooterCopyright
          href="#"
          by="Balanced Solutions Software, Inc."
          year={new Date().getFullYear()}
        />
        <FooterLinkGroup>
          <FooterLink href="/about">About</FooterLink>
          <FooterLink href="/privacy">Privacy Policy</FooterLink>
          <FooterLink href="/licensing">Licensing</FooterLink>
          <FooterLink href="/contact">Contact</FooterLink>
        </FooterLinkGroup>
      </Footer>
    </>
  );
}
