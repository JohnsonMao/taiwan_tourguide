import React from 'react';
import { Row, Col, Card, Ratio } from 'react-bootstrap';

import { ReactComponent as Triangle } from '../../asset/icon/triangle.svg';
import { ReactComponent as Square } from '../../asset/icon/square.svg';
import { ReactComponent as Map } from '../../asset/icon/map.svg';

export default function CardList(props) {
  const { icon, title } = props;
  return (
    <section className="section">
      <h4 className="fw-normal fs-2 mb-3">
        {
          icon === 'triangle'
            ? <Triangle className="me-4"/>
            : <Square className="me-4"/>
        }
        { title }
      </h4>
      <Row xs={2} sm={4} md={5}>
        <Col>
          <Card className="custom_shadow p-3">
            <Ratio aspectRatio="4x3" className="mb-3">
              <img 
                src={require('../../pages/Home/static/banner.png').default} 
                alt="cover" 
              />
            </Ratio>
            <Card.Body className="p-0">
              <Card.Title as="h2" className="title fs-5 mb-3">
                標題
              </Card.Title>
              <Card.Text className="fs-6 fw-light text-info d-flex align-items-center pb-1">
                <Map/>地點
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </section>
  )
}
