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
      desc: "Yes, our platform is designed with top-tier security measures to ensure your data and transactions remain safe and confidential.",
    },
    {
      id: 3,
      title: "Will you have a token?",
      desc: "Yes, our platform is designed with top-tier security measures to ensure your data and transactions remain safe and confidential.",
    },
    {
      id: 4,
      title: "What blockchains does your platform support?",
      desc: "Yes, our platform is designed with top-tier security measures to ensure your data and transactions remain safe and confidential.",
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
              <Accordion defaultActiveKey={accordionData[0].id.toString()}>
                {accordionData.map(item => (
                  <Accordion.Item key={item.id} eventKey={item.id.toString()}>
                    <Accordion.Header className="text-wrap">{item.title}</Accordion.Header>
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
