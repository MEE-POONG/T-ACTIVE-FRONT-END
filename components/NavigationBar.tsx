import Link from 'next/link';
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Navbar, Container, Nav, Button } from 'react-bootstrap';

export default function NavigationBar(): JSX.Element {
  const { asPath } = useRouter();
  const [navbarTop, setNavbarTop] = useState<boolean>(false);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    const bodyScroll = document.body.scrollTop;
    const elementScroll = document.documentElement.scrollTop;
    if (bodyScroll > 20 || elementScroll > 20) {
      setNavbarTop(true);
    } else {
      setNavbarTop(false);
    }
  };
  return (
    <div id="sticky-wrapper" className="sticky-wrapper" >
      <Navbar expand="lg" className={navbarTop ? 'fixed-top' : ''}>
        <Container>
          <Navbar.Brand href="/">T Active Stevia</Navbar.Brand>
          <a href="ticket.html" className="btn btn-custom d-lg-none ms-auto me-4">
            Buy Ticket
          </a>
          <Navbar.Toggle aria-controls="navbarNav" />
          <Navbar.Collapse id="navbarNav">
            <Nav className="ms-auto me-lg-5 align-items-lg-center f-s-cookie">
              <Link href="#section_1" className={asPath === "/" ? "nav-link click-scroll active" : "nav-link click-scroll"}>
                Home
              </Link>
              <Link href="#section_5" className={asPath === "/product" ? "nav-link click-scroll active" : "nav-link click-scroll"}>
                Product
              </Link>
              <Link href="#section_2" className={asPath === "/about" ? "nav-link click-scroll active" : "nav-link click-scroll"}>
                About
              </Link>

              <Link href="#section_3" className={asPath === "/artists" ? "nav-link click-scroll active" : "nav-link click-scroll"}>
                Artists
              </Link>

              <Link href="#section_4" className={asPath === "/schedule" ? "nav-link click-scroll active" : "nav-link click-scroll"}>
                Schedule
              </Link>

              <Link href="#section_6" className={asPath === "/contact" ? "nav-link click-scroll active" : "nav-link click-scroll"}>
                Contact
              </Link>
            </Nav>

            <Link href="ticket.html" className='gold d-lg-block d-md-block d-sm-none' >
              Buy Ticket
            </Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};
