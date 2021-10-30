import React from 'react';
import { Row, Col, Card, Ratio, Button } from 'react-bootstrap';

import { ReactComponent as Triangle } from '../../asset/icon/triangle.svg';
import { ReactComponent as MapM } from '../../asset/icon/map_M.svg';

export default function ActivityList() {
  return (
    <main className="section">
      <h4 className="fw-normal fs-2 mb-3">
        <Triangle className="me-4"/>
        熱門活動
      </h4>
      <Row xs={1} sm={2} as="ul">
        <Col as="li">
          <Card className="custom_shadow activity p-3">
            <Row className="gx-4">
              <Col>
                <Ratio aspectRatio="1x1">
                  <img 
                    src={require('../../pages/Home/static/banner.png').default} 
                    alt="cover" 
                  />
                </Ratio>
              </Col>
              <Col xs={7} className="d-flex flex-column">
                <Card.Body className="p-0">
                  <Card.Title as="h2" className="fs-4 mb-3">
                    標題
                  </Card.Title>
                  <Card.Text className="fs-5 text-gray">
                    內文
                  </Card.Text>
                </Card.Body>
                <Card.Footer 
                  className="bg-light d-flex justify-content-between p-0 pe-3"
                >
                  <span className="fs-5 d-flex align-items-center">
                    <MapM className="fill-primary"/>地點
                  </span>
                  <Button 
                    variant="outline-primary" 
                    className="fs-5 px-7 py-2"
                  >
                    活動詳情
                  </Button>
                </Card.Footer>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </main>
  )
}
