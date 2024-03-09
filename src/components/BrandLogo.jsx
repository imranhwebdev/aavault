import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import logo1 from "../assets/img/layers.png";
import logo2 from "../assets/img/sisphus.png";
import logo3 from "../assets/img/circooles.png";
import logo4 from "../assets/img/catalog.png";
import logo5 from "../assets/img/quotient.png";
export default function BrandLogo() {
    const brandLItems = [
        {
            brandlogo: logo1,
        },
        {
            brandlogo: logo2,
        },
        {
            brandlogo: logo3,
        },
        {
            brandlogo: logo4,
        },
        {
            brandlogo: logo5,
        },
    ]
  return (
    <section className='brandLogoArea'>
      <Container>
        <Row>
            <Col>
                <div className="brandLwrapper d-flex justify-content-center flex-wrap">
                    {brandLItems.map((brandLItem, index)=>(
                        <figure className='brandSingleItem' key={index}>
                            <img src={brandLItem.brandlogo} alt="brand logo" />
                        </figure>
                    ))}
                </div>
            </Col>
        </Row>
      </Container>
    </section>
  )
}
