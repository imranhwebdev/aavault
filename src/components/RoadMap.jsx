import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import roadmapShap from '../assets/img/roadmapShap1.png';
import roadMapTokenShap from "../assets/img/roadLtokenS.png"
import dot from "../assets/img/Dot.png"
import arrowRight from "../assets/img/arrowRight.png"
import downArrow from "../assets/img/downArrow.png"
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
    <figure className="roadMapTokenShap d-none d-md-block">
      <img src={roadMapTokenShap} alt="" />
    </figure>
      <Container>
        <Row>
          <Col>
            <div className="section-title">
              <h2>{title}</h2>
            </div>
            <div className="roadMap-wrapper">
              <div className="line d-md-none"></div>
              {roadmapData.map((item, index) => (
                <div key={index} className="roadmap-single-item">
                  <div className="dot d-md-none"><img src={dot} alt="" /></div>
                  <div className="downArrow d-md-none"><img src={downArrow} alt="" /></div>
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
        <div className="dotArrowWrapper d-flex justify-content-between">
          <div className="dotArrow d-flex d-none d-md-flex align-items-center gap-5">
            <figure className='dot'>
              <img src={dot} alt="" />
            </figure>
            <figure className='arrowRight'>
              <img src={arrowRight} alt="" />
            </figure>
          </div>
          <div className="dotArrow d-flex d-none d-md-flex align-items-center gap-5">
            <figure className='dot'>
              <img src={dot} alt="" />
            </figure>
            <figure className='arrowRight'>
              <img src={arrowRight} alt="" />
            </figure>
          </div>
          <div className="dotArrow d-flex d-none d-md-flex align-items-center gap-5">
            <figure className='dot'>
              <img src={dot} alt="" />
            </figure>
            <figure className='arrowRight'>
              <img src={arrowRight} alt="" />
            </figure>
          </div>
          <div className="dotArrow d-flex d-none d-md-flex align-items-center gap-5">
            <figure className='dot'>
              <img src={dot} alt="" />
            </figure>
            <figure className='arrowRight'>
              <img src={arrowRight} alt="" />
            </figure>
          </div>
          <div className="dotArrow d-flex d-none d-md-flex align-items-center gap-5">
            <figure className='dot'>
              <img src={dot} alt="" />
            </figure>
            <figure className='arrowRight'>
              <img src={arrowRight} alt="" />
            </figure>
          </div>
        </div>
      <figure className='roadmap-Shap d-none d-md-block'>
        <img src={roadmapShap} alt="" />
      </figure>
                  
      </Container>
    </section>
  )
}
