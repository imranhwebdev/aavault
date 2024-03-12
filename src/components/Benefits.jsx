import React, { useRef, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import { Autoplay} from 'swiper/modules';
import bsImg1 from "../assets/img/bsImg1.png";
import bsImg2 from "../assets/img/bsImg2.png";
import bsImg3 from "../assets/img/bsImg3.svg";
import bsImg4 from "../assets/img/bsImg4.svg";
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
        {
            bsTitle:"Speed",
            bsImg: bsImg4,
            desc:"Capture tokens instantly, never miss a market move",
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
            <Swiper 
        slidesPerView={3}
        spaceBetween={0}
        autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          speed={1000}
          modules={[Autoplay]}
        loop={true}
        breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
         className="benefits-wrapper">
        {bsItems.map((bsItem, index)=>(
            <SwiperSlide>
                <div className="benefits-single-item" key={index}>
                    <h4>{bsItem.bsTitle}</h4>
                    <figure>
                        <img src={bsItem.bsImg} alt="" />
                    </figure>
                    <div className="single-c-item d-md-none" key={index}>
                        <p>{bsItem.desc}</p>
                    </div>
                </div>
            </SwiperSlide>
        ))}
      </Swiper>
         
                
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
