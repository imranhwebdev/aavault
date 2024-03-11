import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import bsImg1 from "../assets/img/bsImg1.png";
import bsImg2 from "../assets/img/bsImg2.png";
import bsImg3 from "../assets/img/bsImg3.svg";
export default function Benefits() {
    const subtitle = "Benefits";
    const title = "Discover the <br> <span>advantages</span> of AAVAULT";
    const bsItems = [
        {
            bsTitle:"Safety",
            bsImg: bsImg1,
            desc:"We guarantee full data protection and confidentiality. Your information is a cosmic secret with us",
        },
        {
            bsTitle:"Tools",
            bsImg: bsImg2,
            desc:"Users can set stop losses and take profits, protecting against losses and maximizing profits like on CEX",
        },
        {
            bsTitle:"Convenience",
            bsImg: bsImg3,
            desc:"Trade effortlessly with our automatic audit feature, guarding you from scams and ensuring security",
        },
    ];
    const bsCitems = [
        {
            desc:"We guarantee full data protection and confidentiality. Your information is a cosmic secret with us",
        },
        {
            desc:"Users can set stop losses and take profits, protecting against losses and maximizing profits like on CEX",
        },
        {
            desc:"Trade effortlessly with our automatic audit feature, guarding you from scams and ensuring security",
        },
    ];
  return (
    <section className='benefitsArea' id='benefits'>
      <Container>
        <Row>
            <Col>
                <div className="section-title text-md-center">
                    <span className='subTitle'>{subtitle}</span>
                    <h2 dangerouslySetInnerHTML={{ __html: title }} />
                </div>
            </Col>
        </Row>
        <Row>
            <Col>
                <div className="benefits-wrapper">
                    {bsItems.map((bsItem, index)=>(
                        <div className="benefits-single-item" key={index}>
                            <h4>{bsItem.bsTitle}</h4>
                            <figure>
                                <img src={bsItem.bsImg} alt="" />
                            </figure>
                            <div className="single-c-item d-md-none" key={index}>
                                <p>{bsItem.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </Col>
        </Row>
      </Container>
      <div className="benefit-content-wrapper d-none d-md-block">
        <Container>
            <Row>
                <Col>
                    <div className="content-inner">
                        {bsCitems.map((bsCitem, index)=>(
                            <div className="single-c-item" key={index}>
                                <p>{bsCitem.desc}</p>
                            </div>
                        ))}
                    </div>
                </Col>
            </Row>
        </Container>
      </div>
    </section>
  )
}
