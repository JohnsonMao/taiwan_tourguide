import React from "react";
import { Container, Row, Col, Card, Ratio } from "react-bootstrap";

import Banner from "../../components/Banner";
import ActivityList from "../../components/ActivityList";
import CardList from "../../components/CardList";
import { ReactComponent as Triangle } from "../../asset/icon/triangle.svg";
import { ReactComponent as MapM } from "../../asset/icon/map_M.svg";
import './static/_popularCities.scss';

function Location() {

  const popularCities = [
    {city: '台東', mobile: true, img: ''},
    {city: '台北', mobile: true, img: ''},
    {city: '台中', mobile: true, img: ''},
    {city: '台南', mobile: true, img: ''},
    {city: '高雄', mobile: true, img: ''},
    {city: '花蓮', mobile: true, img: ''},
    {city: '屏東', mobile: false, img: ''},
    {city: '嘉義', mobile: false, img: ''},
    {city: '南投', mobile: false, img: ''},
    {city: '宜蘭', mobile: false, img: ''},
    {city: '苗栗', mobile: false, img: ''},
    {city: '新竹', mobile: false, img: ''},
    {city: '外島', mobile: false, img: ''}
  ]

  return (
    <>
      <h4 className="fw-normal fs-2 mb-3">
        <Triangle className="me-4" />
        熱門城市
      </h4>
      <Row xs={2} md={4} xl={5} 
        className="flex-column popularCities g-3 section"
      >
        {
          popularCities.map((item, index) => (
            <Col>
              <Card className={`shadow ${index % 3 === 0 ? 'p-3' : 'p-2'}`}>
                <Ratio aspectRatio={index % 3 === 0 ? '3x4' : '5x3'}>
                  <img src={require("./static/banner.png").default} alt="city" />
                </Ratio>
                <Card.ImgOverlay 
                  className="d-flex flex-column align-items-center justify-content-center"
                >
                  <MapM className="mb-2"/>
                  <Card.Title className="text-light fs-2">{item.city}</Card.Title>
                </Card.ImgOverlay>
              </Card>
            </Col>
          ))
        }
      </Row>
    </>
  );
}

export default function Home() {
  return (
    <>
      <Banner img="Home/static/banner.png" alt="banner" />
      <Container>
        <Location />
        <ActivityList />
        <CardList icon="square" title="熱門餐飲" />
      </Container>
    </>
  );
}
