import React from "react";
ChartJS.register(ArcElement, Tooltip, Legend);
import { Container, Row, Col } from "react-bootstrap";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import chartShap from '../assets/img/chartMshap.png';



export default function Tokenomics() {
  const title = "AAVAULT IS THE <br> NATIVE <span>currency</span> ";
  const desc =
    "Maximize your experience with the $AAVL token: enjoy exclusive access, reduced fees, staking rewards, and DAO governance. Join the whitelist for a chance to be part of our journey.";

    const totalSupply = 500;
    const data = {
        labels: false,
        datasets: [
            {
            data: [50, 30, 8, 12],
            backgroundColor: ["#29D93B", "#19F9C3", "#19D1F9", "#C0DF7E"],
            borderColor: ["#29D93B", "#19F9C3", "#19D1F9", "#C0DF7E"],
            weight: 0.2,
            borderWidth: 1,
            borderRadius: 30,
            cutout: "90%",
            rotation: 5,
            devicePixelRatio: 1,
            },
        
        ],
    };
    const options = {
        plugins: {
          legend: {
            display: true,
            position: 'bottom', // Change the position of the legend as needed
          },
        },
        cutoutPercentage: 70,
        elements: {
          center: {
            text: `${totalSupply} MILLION\nTOTAL SUPPLY`, // Center text with total supply value
            color: '#000000', // Text color
            fontStyle: 'Arial', // Font style
            sidePadding: 20, // Padding around the text
          },
        },
      };
  return (
    <section className="tokenomicsArea" id="tokenomics">
      <Container>
        <Row>
          <Col md={7}>
            <div className="section-title">
              <span className="subTitle">Token and tokenomics</span>
              <h2 dangerouslySetInnerHTML={{ __html: title }} />
              <p>{desc}</p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg={6}></Col>
          <Col lg={6}>
            <div className="chart" style={{maxWidth: '663px'}}>
                <figure className="chartShap">
                    <img src={chartShap} alt="" />
                </figure>
                <Doughnut data={data}  options={options}/>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
