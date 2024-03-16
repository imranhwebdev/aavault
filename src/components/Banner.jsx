import {React} from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import heroTopShap from '../assets/img/heroTop-shap.png';
import heroRgif from '../assets/img/hero.gif';
import twitter from '../assets/img/twitter.svg'
import tlegram from '../assets/img/tlegram.svg'
import discord from '../assets/img/discord.svg'
import translate from '../assets/img/ic_outline-g-translate.svg'
export default function Banner(){
    const socialItems = [
        {
            socialIcon: twitter,
            socialLink: "https://google.com",
        },
        {
            socialIcon: tlegram,
            socialLink: "https://google.com",
        },
        {
            socialIcon: discord,
            socialLink: "https://google.com",
        },
        {
            socialIcon: translate,
            socialLink: "https://google.com",
        },
    ];

    const subTitle = "WELCOME TO AAVAULT";
    const title = "Discover DEX Trading in a";
    const desc = 'AAVAULT is revolutionizing decentralized exchanges (DEX) by incorporating the finest trading tools available';
   

    const arrowDown = <svg xmlns="http://www.w3.org/2000/svg" width="20" height="28" viewBox="0 0 20 28" fill="none">
    <rect x="19.2367" y="0.748612" width="25.5789" height="18.4737" rx="9.23684" transform="rotate(90 19.2367 0.748612)" stroke="url(#paint0_linear_4035_329)" stroke-width="1.42105"/>
    <path d="M9.49758 20.4352C9.77506 20.7127 10.2249 20.7127 10.5024 20.4352L15.0242 15.9135C15.3017 15.636 15.3017 15.1861 15.0242 14.9086C14.7467 14.6312 14.2968 14.6312 14.0193 14.9086L10 18.928L5.98065 14.9086C5.70318 14.6312 5.2533 14.6312 4.97582 14.9086C4.69834 15.1861 4.69834 15.636 4.97582 15.9135L9.49758 20.4352ZM9.28947 0.0380858L9.28947 19.9328L10.7105 19.9328L10.7105 0.038086L9.28947 0.0380858Z" fill="url(#paint1_linear_4035_329)"/>
    <defs>
      <linearGradient id="paint0_linear_4035_329" x1="46.9473" y1="8.99071" x2="31.9311" y2="9.5568" gradientUnits="userSpaceOnUse">
        <stop stop-color="#19ECB1"/>
        <stop offset="1" stop-color="white" stop-opacity="0"/>
      </linearGradient>
      <linearGradient id="paint1_linear_4035_329" x1="10" y1="19.9328" x2="10" y2="0.0380859" gradientUnits="userSpaceOnUse">
        <stop stop-color="#1CE897"/>
        <stop offset="1" stop-color="white" stop-opacity="0"/>
      </linearGradient>
    </defs>
  </svg>
    return(
        <div className="hero">
            <p className='siteC'>AAVAULT MULTI BLOCKCHAIN</p>
            <figure className="heroTopShap">
                <img src={heroTopShap} alt="" />
            </figure>
            <ul className="social-links">
                {socialItems.map((socialItem, index) => (
                    <li key={index}><a href={socialItem.socialLink}><img src={socialItem.socialIcon} alt="" /></a></li>
                ))}
            </ul>
            
            <Container>
                <Row className='align-items-end'>
                    <Col md={7}>
                        <div className="hero-content">
                            <span className='subTitle'>{subTitle}</span>
                            <h1>{title}</h1>
                            <h2 className='newWay'>New Way</h2>
                            <div className="hero-right d-md-none">
                                <p>{desc}</p>
                            </div>
                            <Form className='subscribeForm'>
                                <input type="email" placeholder="Enter you email"
                                required />
                                <Button type="submit" className='gBtn'>waitlist</Button>
                            </Form>
                        </div>
                    </Col>
                    <Col md={5} className='d-none d-md-block'>
                        <div className="hero-right">
                            <figure className='mb-0 heroGif'>
                                <img src={heroRgif} alt="" />
                            </figure>
                            <p>{desc}</p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className="scrollDown text-center d-none d-md-block mt-5">
		                    <a href='#about' class="mouse"></a>
                            <p>Scroll down</p>
                            <a href='#about' className='down'>{arrowDown}</a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
