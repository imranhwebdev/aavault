import React from "react";
ChartJS.register(ArcElement, Tooltip, Legend);
import { Container, Row, Col } from "react-bootstrap";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import chartShap from "../assets/img/chartMshap.png";

export default function Tokenomics() {
  const title = "AAVAULT IS THE <br> NATIVE <span>currency</span> ";
  const desc =
    "Maximize your experience with the $AAVL token: enjoy exclusive access, reduced fees, staking rewards, and DAO governance. Join the whitelist for a chance to be part of our journey.";

  const totalSupply = 500;
  const data = {
    labels: false,
    datasets: [
      {
        data: [12, 30, 5, 10, 10, 10, 10, 10],
        backgroundColor: ["#4286F5", "#EA4235", "#FABD03", "#34A853", "#FF6D00", "#46BCC6", "#7BABF7", "#FF8278"],
        borderColor: ["#4286F5", "#EA4235", "#FABD03", "#34A853", "#FF6D00", "#46BCC6", "#7BABF7", "#FF8278"],
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
        position: "bottom", // Change the position of the legend as needed
      },
    },
    cutoutPercentage: 70,
    elements: {
      center: {
        text: `${totalSupply} MILLION\nTOTAL SUPPLY`, // Center text with total supply value
        color: "#000000", // Text color
        fontStyle: "Arial", // Font style
        sidePadding: 20, // Padding around the text
      },
    },
  };
  const chartItmes = [
    {
      title:"Private",
      percent: "(12%)",
      value: "275 Million",
    },
    {
      title:"Serie A",
      percent: "(30%)",
      value: "150 Million ",
    },
    {
      title:"Airdrop (Tasks)",
      percent: "(5%)",
      value: "25 Million ",
    },
    {
      title:"Team and Advisers",
      percent: "(10%)",
      value: "25 Million ",
    },
    {
      title:"DAO",
      percent: "(10%)",
      value: "25 Million ",
    },
    {
      title:"Liquidity",
      percent: "(10%)",
      value: "25 Million ",
    },
    {
      title:"Foundation",
      percent: "(10%)",
      value: "25 Million ",
    },
    {
      title:"Reserves",
      percent: "(10%)",
      value: "25 Million ",
    },
  ]
  return (
    <section className="tokenomicsArea" id="tokenomics">
      <Container>
        <Row>
          <Col md={7}>
            <div className="section-title">
              <span className="subTitle">Token and tokenomics</span>
              <h2 dangerouslySetInnerHTML={{ __html: title }} />
              <p className="d-none d-lg-block">{desc}</p>
            </div>
          </Col>
        </Row>
        <Row className="align-items-center">
          <Col md={6} className="order-2 order-md-1">
            <div className="chartDetails">
              {chartItmes.map((chartItme, index)=>(
                <div className="chart-d-item d-flex align-items-center justify-content-between">
                <div className="left">
                    <h5>{chartItme.title}</h5>
                    <span>{chartItme.percent}</span>
                </div>
                <div className="right">
                  <p>{chartItme.value}</p>
                </div>
              </div>
              ))}
              
            </div>
          </Col>
          <Col md={6} className="order-1 order-md-2">
            <div className="chart" style={{ maxWidth: "663px" }}>
              <figure className="chartShap">
                <img src={chartShap} alt="" />
              </figure>
              <div className="ChartMiddleC">
                <span>TOTAL SUPPLY</span>
                <h3>10 Billion</h3>
              </div>
              <Doughnut data={data} options={options} />
              
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
