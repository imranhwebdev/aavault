import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import roadmapShap from '../assets/img/roadmapShap.png';
import roadMapTokenShap from "../assets/img/roadLtokenS.png"
export default function RoadMap() {
  const title = "ROADMAP";

  const roadmapData = [
    {
      quarter: "Q2 2024",
      items: [
        "Alpha version", 
        "Blockchain", 
        "integration",
        "Waitlists"
      ]
    },
    {
      quarter: "Q3 2024",
      items: [
        "Full version launch", 
        "Marketing", 
        "Private round"
      ]
    },
    {
      quarter: "Q4 2024",
      items: [
        "New blockchain integration", 
        "Mobile version", 
        "Listings on CMC and CoinGecko",
        "Round A"
      ]
    },
    {
      quarter: "Q1 2025",
      items: [
        "DEX and CEX listings", 
        "New blockchain integration"
      ]
    },
    {
      quarter: "Q4 2024",
      items: [
        "Further blockchain integration", 
        "Staking"
      ]
    },
  ];

  return (
    <section className='roadMap' id='roadmap'>
    <figure className="roadMapTokenShap">
      <img src={roadMapTokenShap} alt="" />
    </figure>
      <Container>
        <Row>
          <Col>
            <div className="section-title">
              <h2>{title}</h2>
            </div>
            <div className="roadMap-wrapper">
              {roadmapData.map((item, index) => (
                <div key={index} className="roadmap-single-item">
                  <h4>- {item.quarter}</h4>
                  <ul className='listItem'>
                    {item.items.map((roadmapItem, idx) => (
                      <li key={idx}>{roadmapItem}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
      <figure className='roadmap-Shap d-none d-md-block'>
        <img src={roadmapShap} alt="" />
      </figure>
    </section>
  )
}
