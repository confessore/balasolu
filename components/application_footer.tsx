import { Footer } from "flowbite-react";

export default function ApplicationFooter() {
    return (
        <>
            <Footer container>
                <Footer.Copyright href="#" by="Balanced Solutions Software, Inc." year={new Date().getFullYear()} />
                <Footer.LinkGroup>
                    <Footer.Link href="#">About</Footer.Link>
                    <Footer.Link href="#">Privacy Policy</Footer.Link>
                    <Footer.Link href="#">Licensing</Footer.Link>
                    <Footer.Link href="/contact">Contact</Footer.Link>
                </Footer.LinkGroup>
            </Footer>
        </>
    );
}