import React, { useEffect, useState } from "react";
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
      label: "Private",
      data: "12",
      value: "1.200.000.000",
      color: '#19F9D1'
    },
    {
      label: "Serie A",
      data: "15",
      value: "1.500.000.000 ",
      color: '#19F99B'
    },
    {
      label: "Airdrop (Tasks)",
      data: "15",
      value: "1.500.000.000",
      color: '#1FF634'
    },
    {
      label: "Team and Advisers",
      data: "16",
      value: "1.600.000.000",
      color: '#29D93B'
    },
    {
      label: "DAO",
      data: "6",
      value: "1.100.000.000",
      color: '#1FF668'
    },
    {
      label: "Liquidity",
      data: "11",
      value: "1.500.000.00",
      color: '#07FA94'
    },
    {
      label: "Foundation",
      data: "15",
      value: "1.100.000.000",
      color: '#19F9F9'
    },
    {
      label: "Reserves",
      data: "10",
      value: "600.000.000",
      color: '#0CB990'
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

  const arrowRight = <svg xmlns="http://www.w3.org/2000/svg" width="31" height="24" viewBox="0 0 31 24" fill="none">
    <rect x="1.05138" y="1.41368" width="28.8806" height="20.7271" rx="10.3636" stroke="url(#paint0_linear_4035_321)" stroke-width="2.10275" />
    <path d="M23.5733 12.5208C23.9839 12.1102 23.9839 11.4445 23.5733 11.0339L16.8824 4.343C16.4718 3.93241 15.8061 3.93241 15.3955 4.343C14.9849 4.75358 14.9849 5.41928 15.3955 5.82987L21.343 11.7773L15.3955 17.7248C14.9849 18.1354 14.9849 18.8011 15.3955 19.2117C15.8061 19.6223 16.4718 19.6223 16.8824 19.2117L23.5733 12.5208ZM-9.19142e-08 12.8287L22.8299 12.8287L22.8299 10.726L9.19142e-08 10.726L-9.19142e-08 12.8287Z" fill="#17C686" />
    <defs>
      <linearGradient id="paint0_linear_4035_321" x1="30.9834" y1="11.7772" x2="14.6337" y2="11.7772" gradientUnits="userSpaceOnUse">
        <stop stop-color="#17C686" />
        <stop offset="1" stop-color="#0B6041" stop-opacity="0" />
      </linearGradient>
    </defs>
  </svg>;

  const btnText = useState('show More');

  const options = {
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        display: false,
      },
    },
  };

  const [showItem , setShowItem] = useState(false);

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
              <div className={`chartDetails-wrap ${showItem ? 'h-auto' : ''}`}>
                {chartData.map((item, index) => (
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
              <button className="inlineBtn text-uppercase" onClick={() => setShowItem(!showItem)}>{btnText} {arrowRight}</button>
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
