import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import aboutImg from "../assets/img/3-unscreen.gif";
import aboutShap from "../assets/img/aboutShap.png";
import aboutRshap from "../assets/img/aboutRShap.svg";
export default function About() {
    const title = "Welcome! My <br/> Name <span>is VAULT.</span>";
    const subtitle = "about uS";
    const desc1 = "Greetings! I AM VAULT. I am here to share my story with you. As a multi-blockchain terminal for decentralized exchanges (DEX), I offer unmatched trading tools such as sniper trading, stop loss, take profit, automatic token auditing and more, providing users with enhanced security, speed and convenience.";
    const desc2 = "I have studied the DEX trading field well and realized my purpose in the web 3.0 world. My mission is to change the DEX trading industry by allowing everyone to buy tokens securely, quickly and conveniently without hassle";
    const btn = 'CHECK WHITEPAPER';
    const btnLink = "https://google.com";
    const arrowRight = <svg xmlns="http://www.w3.org/2000/svg" width="31" height="24" viewBox="0 0 31 24" fill="none">
    <rect x="1.05138" y="1.41368" width="28.8806" height="20.7271" rx="10.3636" stroke="url(#paint0_linear_4035_321)" stroke-width="2.10275"/>
    <path d="M23.5733 12.5208C23.9839 12.1102 23.9839 11.4445 23.5733 11.0339L16.8824 4.343C16.4718 3.93241 15.8061 3.93241 15.3955 4.343C14.9849 4.75358 14.9849 5.41928 15.3955 5.82987L21.343 11.7773L15.3955 17.7248C14.9849 18.1354 14.9849 18.8011 15.3955 19.2117C15.8061 19.6223 16.4718 19.6223 16.8824 19.2117L23.5733 12.5208ZM-9.19142e-08 12.8287L22.8299 12.8287L22.8299 10.726L9.19142e-08 10.726L-9.19142e-08 12.8287Z" fill="#17C686"/>
    <defs>
      <linearGradient id="paint0_linear_4035_321" x1="30.9834" y1="11.7772" x2="14.6337" y2="11.7772" gradientUnits="userSpaceOnUse">
        <stop stop-color="#17C686"/>
        <stop offset="1" stop-color="#0B6041" stop-opacity="0"/>
      </linearGradient>
    </defs>
  </svg>;
  const aboutRShap = <svg xmlns="http://www.w3.org/2000/svg" width="87" height="88" viewBox="0 0 87 88" fill="none">
  <g filter="url(#filter0_f_4035_311)">
    <circle cx="43.2986" cy="44.097" r="27.2331" transform="rotate(-68.5221 43.2986 44.097)" fill="#19EBAC" fill-opacity="0.15"/>
    <circle cx="43.2986" cy="44.097" r="27.0475" transform="rotate(-68.5221 43.2986 44.097)" stroke="#091512" stroke-width="0.371281"/>
  </g>
  <defs>
    <filter id="filter0_f_4035_311" x="0.0581055" y="0.856445" width="86.481" height="86.481" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
      <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
      <feGaussianBlur stdDeviation="8" result="effect1_foregroundBlur_4035_311"/>
    </filter>
  </defs>
</svg>;

  return (
    <div className="about" id="about">
      <p className='siteC'>AAVAULT MULTI BLOCKCHAIN</p>
        <figure className="aboutRshap">
            <img src={aboutRshap} alt="" />
        </figure>
        <Container>
          <Row>
            <Col className="d-md-none">
              <div className="about-left">
                <h4>{subtitle}</h4>
              </div>
            </Col>
            <Col md={5} className="order-md-1 order-2">
              <div className="about-left">
              <h4 className="d-none d-md-block">{subtitle}</h4>
                <figure className="aboutImg">
                  <img src={aboutImg} alt="" />
                </figure>

                <figure className="aboutShap">
                    <img src={aboutShap} alt="" />
                </figure>
              </div>
            </Col>
            <Col md={7} className="order-md-2 order-1">
              <div className="about-right">
              <h2 dangerouslySetInnerHTML={{ __html: title }} />
              <figure className="aboutCshap">{aboutRShap}</figure>
              <p dangerouslySetInnerHTML={{ __html: desc1 }} />
              <p dangerouslySetInnerHTML={{ __html: desc2 }} />
              <a href={btnLink} className="inlineBtn">{btn} {arrowRight}</a>
              </div>
            </Col>
          </Row>
        </Container>
    </div>
  );
}
