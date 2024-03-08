import { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FooterLogo from '../assets/img/footer-logo.svg'
import twitter from '../assets/img/twitter.svg'
import telegrame from '../assets/img/tlegram.svg'
import discord from '../assets/img/discord.svg'
export default function Footer(){
  
    const newLetterTitle = "JOIN THE waitlist";
    const footerMenuItems = [
        {
            menuTxt: "About Us",
            MenuLink: "#aboutus",
        },
        {
            menuTxt: "Benefits",
            MenuLink: "#benefits",
        },
        {
            menuTxt: "Tokenomics",
            MenuLink: "#tokenomics",
        },
        {
            menuTxt: "Roadmap",
            MenuLink: "#roadmap",
        },
        {
            menuTxt: "Team",
            MenuLink: "#team",
        },
    ];
    const footerTramItems = [
        {
            tramTxt: "Privacy statement",
            tramLink: "#privacy-statement",
        },
        {
            tramTxt: "Cookie Policy",
            tramLink: "#cookie-policy",
        },
        {
            tramTxt: "Terms of service",
            tramLink: "#terms-of-service",
        },
    ];
    const footerSocialItems = [
        {
            socialIcon: twitter,
            socialLink: "https://google.com",
        },
        {
            socialIcon:  telegrame,
            socialLink: "https://google.com",
        },
        {
            socialIcon:  discord,
            socialLink: "https://google.com",
        },
    ];
    const submitIcon = <svg width="25" height="15" viewBox="0 0 25 15" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1.38672 6.62695C0.834434 6.62695 0.386719 7.07467 0.386719 7.62695C0.386719 8.17924 0.834434 8.62695 1.38672 8.62695L1.38672 6.62695ZM24.3243 8.33406C24.7148 7.94354 24.7148 7.31037 24.3243 6.91985L17.9603 0.555887C17.5698 0.165362 16.9366 0.165362 16.5461 0.555887C16.1556 0.946411 16.1556 1.57958 16.5461 1.9701L22.203 7.62695L16.5461 13.2838C16.1556 13.6743 16.1556 14.3075 16.5461 14.698C16.9366 15.0885 17.5698 15.0885 17.9603 14.698L24.3243 8.33406ZM1.38672 8.62695L23.6172 8.62696L23.6172 6.62696L1.38672 6.62695L1.38672 8.62695Z" fill="black"/>
    </svg>
    
    return(
        <footer className="footer">
           <Container>
            <Row>
                <Col>
                    <div className="newsLetter text-center">
                        <h4>{newLetterTitle}</h4>
                        <Form className='subscribeForm'>
                            <input type="email" placeholder="Enter you email"
                            required />
                            <Button type="submit" className='gBtn'>{submitIcon}</Button>
                        </Form>
                    </div>
                </Col>
            </Row>
            <Row className='justify-content-center'>
                <Col lg={4}>
                    <div className="footer-left">
                        <a href="/" className='footer-logo'>
                            <figure>
                                <img src={FooterLogo} alt="" />
                            </figure>
                        </a>
                        <ul className='footerSLogos'>
                            {footerSocialItems.map((footerSocialItem, index) => (
                                <li key={index}><a target='_blank' href={footerSocialItem.socialLink}><img src={footerSocialItem.socialIcon} alt="" /> </a></li>
                            ))}
                        </ul>
                    </div>
                </Col>
                <Col lg={8}>
                    <div className="footer-right">
                        <ul className='footer-menu'>
                            {footerMenuItems.map((footerMenuItem, index) => (
                                <li key={index}><a href={footerMenuItem.MenuLink}>{footerMenuItem.menuTxt}</a></li>
                            ))}
                        </ul>
                        <ul className='footer-trams'>
                            {footerTramItems.map((footerTramItem, index) => (
                                <li key={index}><a href={footerTramItem.tramLink}>{footerTramItem.tramTxt}</a></li>
                            ))}
                        </ul>
                    </div>
                </Col>
            </Row>
           </Container>
        </footer>
    )
}