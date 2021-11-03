import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Container, Row, Col, Card, Ratio, Button } from "react-bootstrap";

import Banner from "../../components/Banner";
import ActivityList from "../../components/ActivityList";
import CardList from "../../components/CardList";
import { ReactComponent as Triangle } from "../../asset/icon/triangle.svg";
import { ReactComponent as MapM } from "../../asset/icon/map_M.svg";
import { apiActivity, apiRestaurant } from "../../api/index";
import "./static/_popularCities.scss";

function CityList(props) {
  const { setSelect } = props;

  const [ citiesPage, setCitiesPage ] = useState(0);

  const x = 80;
  const styles = {
    transform: `translateX(-${x * citiesPage}%)`
  }

  const popularCities = [
    { city: "台東", mobile: true, img: "Taitung.jpg" },
    { city: "台北", mobile: true, img: "Taipei.jpg" },
    { city: "台中", mobile: true, img: "Taichung.jpg" },
    { city: "台南", mobile: true, img: "Tainan.jpg" },
    { city: "高雄", mobile: true, img: "Kaohsiung.jpg" },
    { city: "花蓮", mobile: true, img: "Hualien.jpg" },
    { city: "宜蘭", mobile: false, img: "Yilan.jpg" },
    { city: "屏東", mobile: false, img: "Pingtung.jpg" },
    { city: "嘉義", mobile: false, img: "Chiayi.jpg" },
    { city: "南投", mobile: false, img: "Nantou.jpg" },
    { city: "苗栗", mobile: false, img: "Miaoli.jpg" },
    { city: "新竹", mobile: false, img: "Hsinchu.jpg" },
    { city: "外島", mobile: false, img: "Penghu.jpg" },
  ];
  return (
    <section className="popularCities position-relative">
      <h4 className="fw-normal fs-2 mb-3">
        <Triangle className="me-4" />
        熱門城市
      </h4>
      <div className="section">
        <Row xs={2} md={4} xl={5} as="ul" className="flex-column g-2" style={styles}>
          {popularCities.map((item, index) => (
            <Col key={index} as="li">
              <Link to="/scenicspot" onClick={setSelect}>
                <Card className={`shadow ${index % 3 === 0 ? "p-3" : "p-2"}`}>
                  <Ratio aspectRatio={index % 3 === 0 ? "3x4" : "5x3"}>
                    <img
                      src={require(`./static/${item.img}`).default}
                      alt="city"
                    />
                  </Ratio>
                  <Card.ImgOverlay className="d-flex flex-column align-items-center justify-content-center">
                    <MapM className="mb-2" />
                    <Card.Title className="text-light fs-2" as="h3">
                      {item.city}
                    </Card.Title>
                  </Card.ImgOverlay>
                </Card>
              </Link>
            </Col>
          ))}
        </Row>
      </div>
      <Button
        className="p-3 lh-1 position-absolute top-50 translate-middle-y shadow prev"
        onClick={() => setCitiesPage(citiesPage - 1)}
        as="button"
      >
        <span className="prev-icon d-block"></span>
      </Button>
      <Button
        className="p-3 lh-1 position-absolute top-50 translate-middle-y shadow next"
        onClick={() => setCitiesPage(citiesPage + 1)}
        as="button"
      >
        <span className="next-icon d-block"></span>
      </Button>
    </section>
  );
}

export default function Home(props) {
  const { cities, setSelect, select } = props;

  const location = useLocation();

  const type = [
    {
      type: "景點",
      path: "/scenicspot",
    },
    {
      type: "活動",
      path: "/activity",
    },
  ];

  return (
    <>
      <Banner
        cities={cities}
        select={select}
        setSelect={setSelect}
        pathname={location.pathname}
        img="Home/static/banner.png"
        type={type}
      />
      <Container>
        <CityList setSelect={setSelect} />
        <ActivityList />
        <CardList icon="square" title="熱門餐飲" />
      </Container>
    </>
  );
}
