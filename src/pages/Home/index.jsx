import React from 'react';
import { Container, Row, Col, Card, Ratio } from 'react-bootstrap';

import Banner from '../../components/Banner';
import { ReactComponent as Triangle } from '../../asset/icon/triangle.svg';
import { ReactComponent as Square } from '../../asset/icon/square.svg';

function Location() {
  return (
    <>
      <h4 className="fw-normal fs-2 mb-3"><Triangle className="me-4"/>熱門城市</h4>
      <Row lg={5} className="gx-3 section">
        <Col>
            <Card className="shadow p-3">
                <Ratio aspectRatio="3x4">
                  <img src={require("./static/banner.png").default} alt="city"/>
                </Ratio>
                <Card.ImgOverlay>
                  123
                </Card.ImgOverlay>
            </Card>
        </Col>
        <Col>
            <Card className="shadow p-2 mb-1">
                <Ratio aspectRatio="5x3">
                  <img src={require("./static/banner.png").default} alt="city"/>
                </Ratio>
                <Card.ImgOverlay>
                  123
                </Card.ImgOverlay>
            </Card>
            <Card className="shadow p-2">
                <Ratio aspectRatio="5x3">
                  <img src={require("./static/banner.png").default} alt="city"/>
                </Ratio>
                <Card.ImgOverlay>
                  123
                </Card.ImgOverlay>
            </Card>
        </Col>
      </Row>
    </>
  )
}

export default function Home() {
  return (
    <>
      <Banner img='Home/static/banner.png' alt="banner"/>
      <Container>
        <Location/>
      </Container>
    </>
  )
}
