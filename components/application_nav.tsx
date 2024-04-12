"use client"

import { Navbar } from "flowbite-react";
import Link from "next/link";

export default function ApplicationNav() {
    return (
        <>
            <Navbar fluid rounded>
                <Navbar.Brand as={Link} href="/">
                    <img src="/balasolu.svg" className="mr-3 h-6 sm:h-9" alt="Logo" />
                    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                        
                    </span>
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse>
                    <Navbar.Link as={Link} href="/" active>
                        Home
                    </Navbar.Link>
                    <Navbar.Link as={Link} href="/pricing">Pricing</Navbar.Link>
                    <Navbar.Link as={Link} href="/services">Services</Navbar.Link>
                    <Navbar.Link as={Link} href="/stack">Stack</Navbar.Link>
                </Navbar.Collapse>
            </Navbar>
        </>
    );
}