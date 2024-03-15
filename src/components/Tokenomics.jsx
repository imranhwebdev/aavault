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
  
    const chartData = [
      {
        label:"Private",
        data: "12",
        value: "275 Million",
        color: '#4286F5'
      },
      {
        label:"Serie A",
        data: "30",
        value: "150 Million ",
        color: '#EA4235'
      },
      {
        label:"Airdrop (Tasks)",
        data: "5",
        value: "25 Million ",
        color: '#FABD03'
      },
      {
        label:"Team and Advisers",
        data: "10",
        value: "25 Million ",
        color: '#34A853'
      },
      {
        label:"DAO",
        data: "10",
        value: "25 Million ",
        color: '#FF6D00'
      },
      {
        label:"Liquidity",
        data: "10",
        value: "25 Million ",
        color: '#46BCC6'
      },
      {
        label:"Foundation",
        data: "10",
        value: "25 Million ",
        color: '#7BABF7'
      },
      {
        label:"Reserves",
        data: "10",
        value: "25 Million ",
        color: '#FF8278'
      },
    ];
  
    const data = {
      labels: chartData.map(item => item.label),
      value: chartData.map(item => item.value),
      datasets: [
        {
          data: chartData.map(item => item.data),
          backgroundColor: chartData.map(item => item.color),
          borderColor: chartData.map(item => item.color),
          weight: 0.2,
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
          display: false,
        },
        tooltip: {
          display:false,
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
              <p className="d-none d-lg-block">{desc}</p>
            </div>
          </Col>
        </Row>
        <Row className="align-items-center">
          <Col md={6} className="order-2 order-md-1">
            <div className="chartDetails">
              {chartData.map((item, index)=>(
                <div className="chart-d-item d-flex align-items-center justify-content-between" key={index}>
                <div className="left">
                    <h5>{item.label}</h5>
                    <span>({item.data}%)</span>
                </div>
                <div className="right">
                  <p>{item.value}</p>
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
