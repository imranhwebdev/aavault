import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import faqShap from "../assets/img/faqShap.png";
export default function Faq() {
  const title = "FREQUENTLY ASKED <span>QUESTIONS</span>";
  const accordionData = [
    {
      id: 1,
      title: "Is your platform secure?",
      desc: "Yes, our platform is designed with top-tier security measures to ensure your data and transactions remain safe and confidential.",
    },
    {
      id: 2,
      title: "How safe is my data?",
      desc: "The security of your data is our top priority. We use strict security measures to protect your information. In addition, we do not collect or store any personal data beyond what is necessary for the operation of our platform.",
    },
    {
      id: 3,
      title: "Will you have a token?",
      desc: "Yes, we have a native token for our platform. You can find more information in the tokenomics section of our website.",
    },
    {
      id: 4,
      title: "What blockchains does your platform support?",
      desc: "Currently, our platform supports Ethereum and Binance Smart Chain (BSC). However, we are constantly working on rapidly adding support for new blockchains and layers to expand the capabilities of our platform.",
    },
  ];
  return (
    <section className="faqArea">
      <Container>
        <Row>
          <Col>
            <div className="faqWrapper">
              <div className="section-title">
                <h2 dangerouslySetInnerHTML={{ __html: title }} />
              </div>
              <Accordion>
                {accordionData.map(item => (
                  <Accordion.Item key={item.id} eventKey={item.id.toString()}>
                    <Accordion.Header  className="accordion-header">{item.title}</Accordion.Header>
                    <Accordion.Body>{item.desc}</Accordion.Body>
                  </Accordion.Item>
                ))}
              </Accordion>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="faqShap d-md-none">
        <img src={faqShap} alt="" />
      </div>
    </section>
  );
}
