import { React, useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../assets/img/logo.svg";
import { Link, animateScroll as scroll } from "react-scroll";
// import GoogleTranskate from './GoogleTranskate';

export default function Header() {
  useEffect(() => {
    window.gtranslateSettings = {
      default_language: "en",
      languages: ["en", "tr", "ru", "ko"],
      wrapper_selector: ".gtranslate_wrapper",
      switcher_horizontal_position: "right",
      flag_style: "3d",
    };
    const script = document.createElement("script");
    script.src = "https://cdn.gtranslate.net/widgets/latest/dwf.js";
    script.async = true;
    script.defer = true;
    document.querySelector("#LandingHeader").appendChild(script);
  }, []);

  const [fix, setFix] = useState(false);
  function setFixed() {
    if (window.scrollY >= 392) {
      setFix(true);
    } else {
      setFix(false);
    }
  }
  window.addEventListener("scroll", setFixed);
  return (
    <header className={fix ? "heading fixed" : "heading"} id="LandingHeader">
      <Navbar collapseOnSelect expand="md">
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} alt="" /> AAVAULT
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={-120}
                duration={170}
              >
                About Us
              </Link>
              <Link
                to="benefits"
                spy={true}
                smooth={true}
                offset={-150}
                duration={170}
              >
                Benefits
              </Link>
              <Link
                to="tokenomics"
                spy={true}
                smooth={true}
                offset={-150}
                duration={170}
              >
                Tokenomics
              </Link>
              <Link
                to="roadmap"
                spy={true}
                smooth={true}
                offset={-150}
                duration={170}
              >
                Roadmap
              </Link>
              <Link
                to="team"
                spy={true}
                smooth={true}
                offset={-150}
                duration={170}
              >
                Team
              </Link>
              {/* <GoogleTranskate/> */}
            </Nav>
            <a href="/" className="boxedBtn">
              Join Waitlist
            </a>
          </Navbar.Collapse>
          <div className="gtranslate_wrapper  gtranslate_wrapper_modile "></div>
        </Container>
      </Navbar>
    </header>
  );
}
