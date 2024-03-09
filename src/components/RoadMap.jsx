import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
export default function RoadMap() {
  const title = "ROADMAP"
  return (
    <section className='roadMap' id='roadmap'>
      <Container>
        <Row>
          <Col>
            <div className="section-title">
              <h2>{title}</h2>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
