import React from 'react';
import { Card, Form, FormControl, Button, Row, Col } from 'react-bootstrap';

import { ReactComponent as Search } from '../../asset/icon/search.svg';
import { ReactComponent as GPS } from '../../asset/icon/GPS.svg';
import './static/_banner.scss';

export default function Banner(props) {
  const { img, type } = props;
  return (
    <Card className="custom_banner custom_shadow p-5">
      <div>
        <img src={require(`../../pages/${img}`).default} alt="banner"/>
        <Card.ImgOverlay className="d-flex justify-content-center align-items-center">
          <div>
            <Card.Title as="h2" className="text-light fs-1 fw-bold">Welcome to 
              <span className="text-primary"> Taiwan°</span>
            </Card.Title>
            <Card.Text className="text-light">台北、台中、台南、屏東、宜蘭……遊遍台灣</Card.Text>
            <Form>
              <Row className="gx-2">
                <Col>
                <FormControl
                  className="h-100"
                  placeholder="搜尋關鍵字"
                  aria-label="搜尋關鍵字"
                />
                </Col>
                <Col xs="auto">
                  <Button className="lh-1 p-2"><Search/></Button>
                </Col>
              </Row>
            </Form>
            <Form>
              <Row className="gx-2">
                <Col>
                  <Form.Select aria-label="選擇類別" className="h-100">
                    <option>類別</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                </Col>
                <Col>
                  <Form.Select aria-label="選擇縣市" className="h-100">
                    <option>不分縣市</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                </Col>
                <Col xs="auto">
                  <Button variant="secondary" className="lh-1 p-2"><GPS/></Button>
                </Col>
              </Row>
            </Form>
          </div>
        </Card.ImgOverlay>
      </div>
    </Card>
  )
}
