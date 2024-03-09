import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import teamImg1 from "../assets/img/teamImg1.png";
import teamBtnImg from "../assets/img/teamBtnImg.svg";

export default function OurTeam() {
    const title = "Meet our team, my <br/> incredible <span>companions!</span>";
    
    const OurTeamItems = [
        {
            teamName: "Artur Mikhaylov",
            desicnation: "(Co-founder, CEO)",
            desc: "An entrepreneur with over four years of experience in IT and a distinguished trader in international tournaments. A dedicated crypto enthusiast and DEX trader with more than two years of experience, Artur is also a keen cryptocurrency market researcher and analyst",
            btnTxt: "Learn more",
            btnLink: "https://google.com",
            btnImg: teamBtnImg,
            teamImg1: teamImg1,
        },
        {
            teamName: "Alfred Arno",
            desicnation: "(Co-founder, CTO)",
            desc: "A seasoned Web3 developer, Alfred brings extensive experience in web development. In recent years, he has concentrated on Web3 and blockchain technologies, studying blockchain at Harvard and machine learning at Austral University. Alfred boasts a portfolio filled with significant crypto and blockchain projects",
            btnTxt: "Learn more",
            btnLink: "https://google.com",
            btnImg: teamBtnImg,
            teamImg1: teamImg1,
        },
        {
            teamName: "Artur Mikhaylov",
            desicnation: "(Co-founder, CEO)",
            desc: "An entrepreneur with over four years of experience in IT and a distinguished trader in international tournaments. A dedicated crypto enthusiast and DEX trader with more than two years of experience, Artur is also a keen cryptocurrency market researcher and analyst",
            btnTxt: "Learn more",
            btnLink: "https://google.com",
            btnImg: teamBtnImg,
            teamImg1: teamImg1,
        },
    ]
  return (
    <section className='outTeam' id='team'>
      <Container>
        <Row>
            <Col>
                <div className="section-title text-center">
                    <h2 dangerouslySetInnerHTML={{ __html: title }} />
                </div>
            </Col>
        </Row>
        <Row>
            <Col>
                <div className="ourTeam-wrapper">
                    {OurTeamItems.map((OurTeamItem, index) => (
                        <div className="single-team-item d-flex justify-content-between" key={index}>
                            <div className="team-content">
                                <h3>{OurTeamItem.teamName}</h3>
                                <span>{OurTeamItem.desicnation}</span>
                                <p>{OurTeamItem.desc}</p>
                                <a href={OurTeamItem.btnLink}><img src={OurTeamItem.btnImg} alt="" />{OurTeamItem.btnTxt}</a>
                            </div>
                            <figure className='team-img'>
                                <img src={OurTeamItem.teamImg1} alt="team image" />
                            </figure>
                        </div>
                    ))}
                    
                </div>
            </Col>
        </Row>
      </Container>
    </section>
  )
}
