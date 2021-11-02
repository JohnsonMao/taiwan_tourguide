import React from "react";
import { Container, Row, Col, Card, Ratio, Button } from "react-bootstrap";

import Banner from "../../components/Banner";
import ActivityList from "../../components/ActivityList";
import CardList from "../../components/CardList";
import { ReactComponent as Triangle } from "../../asset/icon/triangle.svg";
import { ReactComponent as MapM } from "../../asset/icon/map_M.svg";
import { apiActivity, apiRestaurant } from '../../api/index';
import './static/_popularCities.scss';

function Location() {

  const popularCities = [
    {city: '台東', mobile: true, img: ''},
    {city: '台北', mobile: true, img: ''},
    {city: '台中', mobile: true, img: ''},
    {city: '台南', mobile: true, img: ''},
    {city: '高雄', mobile: true, img: ''},
    {city: '花蓮', mobile: true, img: ''},
    {city: '宜蘭', mobile: false, img: ''},
    {city: '屏東', mobile: false, img: ''},
    {city: '嘉義', mobile: false, img: ''},
    {city: '南投', mobile: false, img: ''},
    {city: '苗栗', mobile: false, img: ''},
    {city: '新竹', mobile: false, img: ''},
    {city: '外島', mobile: false, img: ''}
  ]

  return (
      <section className="popularCities position-relative">
        <h4 className="fw-normal fs-2 mb-3">
          <Triangle className="me-4" />
          熱門城市
        </h4>
        <Row xs={2} md={4} xl={5} as="ul"
          className="flex-column g-3 section"
        >
          {
            popularCities.map((item, index) => (
              <Col key={index} as="li">
                <Card className={`shadow ${index % 3 === 0 ? 'p-3' : 'p-2'}`}>
                  <Ratio aspectRatio={index % 3 === 0 ? '3x4' : '5x3'}>
                    <img src={require("./static/banner.png").default} alt="city" />
                  </Ratio>
                  <Card.ImgOverlay 
                    className="d-flex flex-column align-items-center justify-content-center"
                  >
                    <MapM className="mb-2"/>
                    <Card.Title className="text-light fs-2" as="h3">{item.city}</Card.Title>
                  </Card.ImgOverlay>
                </Card>
              </Col>
            ))
          }
        </Row>
      <Button className="p-3 lh-1 position-absolute top-50 translate-middle-y shadow prev"
      >
        <span className="prev-icon d-block"></span>
      </Button>
      <Button className="p-3 lh-1 position-absolute top-50 translate-middle-y shadow next"
      >
        <span className="next-icon d-block"></span>
      </Button>
    </section>
  );
}

export default function Home(props) {
  const { cities } = props;

  const type = [
    {
      type: "景點",
      path: "/scenicspot"
    },
    {
      type: "活動",
      path: "/activity"
    }
  ]
  return (
    <>
      <Banner cities={cities} img="Home/static/banner.png" type={type} />
      <Container>
        <Location />
        <ActivityList />
        <CardList icon="square" title="熱門餐飲" />
      </Container>
    </>
  );
}
