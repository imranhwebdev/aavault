import {React} from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import twitter from '../assets/img/twitter.svg'
import tlegram from '../assets/img/tlegram.svg'
import discord from '../assets/img/discord.svg'
export default function Banner(){
    const subTitle = "WELCOME TO AAVAULT";
    const title = "Discover DEX Trading in a";
    const desc = 'AAVAULT is revolutionizing decentralized exchanges (DEX) by incorporating the finest trading tools available';
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
    ]
    return(
        <div className="hero">
            <Container>
                <Row className='align-items-end'>
                    <Col lg={7}>
                        <div className="hero-content">
                            <span>{subTitle}</span>
                            <h1>{title}</h1>
                            <h2 className='newWay'>New Way</h2>
                            
                        </div>
                    </Col>
                    <Col lg={5}>
                        <div className="hero-right">
                            <p>{desc}</p>
                        </div>
                    </Col>
                </Row>
            </Container>
            <ul className="social-links">
                {socialItems.map((socialItem, index) => (
                    <li><a href={socialItem.socialLink}><img src={socialItem.socialIcon} alt="" /></a></li>
                ))}
            </ul>
        </div>
    )
}
