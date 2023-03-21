import Link from 'next/link';
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Navbar, Container, Nav, Button } from 'react-bootstrap';

export default function NavigationBar(): JSX.Element {
  const { asPath } = useRouter();
  const [checkClickPath, setCheckClickPath] = useState<string>("/");
  useEffect(() => {
    setCheckClickPath(asPath);
  }, [asPath]);

  const handlePath = (valPath: string): void => {
    checkClickPath === valPath ? setCheckClickPath("") : setCheckClickPath(valPath);
  };
  return (
    <div id="sticky-wrapper" className="sticky-wrapper" style={{ height: "83px" }}>
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand href="/">Festava Live</Navbar.Brand>
          <a href="ticket.html" className="btn custom-btn d-lg-none ms-auto me-4">
            Buy Ticket
          </a>
          <Navbar.Toggle aria-controls="navbarNav" />
          <Navbar.Collapse id="navbarNav">
            <Nav className="ms-auto me-lg-5 align-items-lg-center">
              <Link href="#section_1" className={asPath === "/" ? "nav-link click-scroll active" : "nav-link click-scroll"}>
                Home
              </Link>
              <Link href="#section_5" className={asPath === "/Product" ? "nav-link click-scroll active" : "nav-link click-scroll"}>
                Product
              </Link>
              <Link href="#section_2" className={asPath === "/" ? "nav-link click-scroll active" : "nav-link click-scroll"}>
                About
              </Link>

              <Link href="#section_3" className={asPath === "/" ? "nav-link click-scroll active" : "nav-link click-scroll"}>
                Artists
              </Link>

              <Link href="#section_4" className={asPath === "/" ? "nav-link click-scroll active" : "nav-link click-scroll"}>
                Schedule
              </Link>



              <Link href="#section_6" className={asPath === "/" ? "nav-link click-scroll active" : "nav-link click-scroll"}>
                Contact
              </Link>
            </Nav>

            <Button href="ticket.html" className="btn custom-btn d-lg-block d-none">
              Buy Ticket
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};