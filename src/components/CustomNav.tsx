import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

export default function CustomNav({ navTo }: { navTo: string }) {
  return (
    <Navbar
      bg="dark"
      data-bs-theme="dark"
      style={{
        boxShadow: "1px 2px 3px rgba(0,0,0,0.4)",
      }}
    >
      <Container>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="48"
          height="48"
          fill="#D60000"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path d="M8 5v14l11-7z" />
        </svg>

        <Nav className="me-auto">
          <Nav.Link href={navTo ? "/collection" : "/"}>
            {navTo ? navTo : "Add Video"}
          </Nav.Link>
        </Nav>

        <Navbar.Brand
          href="/"
          style={{
            fontFamily: "Ubuntu",
            fontSize: "22px",
          }}
        >
          Top-Tube Insights
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}
