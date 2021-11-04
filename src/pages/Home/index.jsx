import React, { useState, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Container, Card, Ratio, Button } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react.js";
import SwiperCore, { Navigation, Grid } from "swiper";
import "swiper/swiper.scss";
import "swiper/modules/navigation/navigation.scss";
import "swiper/modules/grid/grid.scss";

import Banner from "../../components/Banner";
import ActivityList from "../../components/ActivityList";
import CardList from "../../components/CardList";
import { ReactComponent as Triangle } from "../../asset/icon/triangle.svg";
import { ReactComponent as MapM } from "../../asset/icon/map_M.svg";
import { apiActivity, apiRestaurant } from "../../api/index";
import "./static/_popularCities.scss";

SwiperCore.use([Navigation, Grid]);

function CityList(props) {
  const { setSelect } = props;
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  /* `$popularCities` */
  const popularCities = [
    {
      city: "台東",
      mobile: true,
      img: "https://images.unsplash.com/photo-1584672534914-50ac33ca00f7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=10",
    },
    {
      city: "台北",
      mobile: true,
      img: "https://images.unsplash.com/photo-1621415814107-4595c7b2b4fe?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=10",
    },
    {
      city: "台中",
      mobile: true,
      img: "https://images.unsplash.com/photo-1614518921956-3dc707dbc218?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=10",
    },
    {
      city: "台南",
      mobile: true,
      img: "https://images.unsplash.com/photo-1582557881844-12b774f6abb6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=10",
    },
    {
      city: "高雄",
      mobile: true,
      img: "https://images.unsplash.com/photo-1552903346-3fef7ff1b4a0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=10",
    },
    {
      city: "花蓮",
      mobile: true,
      img: "https://images.unsplash.com/photo-1624650727156-dad96f051375?ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MjF8fHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=10",
    },
    {
      city: "宜蘭",
      mobile: false,
      img: "https://images.unsplash.com/photo-1629372282451-74fba8263845?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=10",
    },
    {
      city: "嘉義",
      mobile: false,
      img: "https://images.unsplash.com/photo-1586753080433-3b98668a4085?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=10",
    },
    {
      city: "南投",
      mobile: false,
      img: "https://images.unsplash.com/photo-1635441629083-de8117bde098?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=10",
    },
    {
      city: "屏東",
      mobile: false,
      img: "https://images.unsplash.com/photo-1609147110643-963090d85ff5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=10",
    },
    {
      city: "苗栗",
      mobile: false,
      img: "https://images.unsplash.com/photo-1542976813-986a8fccbd1c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=10",
    },
    {
      city: "新竹",
      mobile: false,
      img: "https://images.unsplash.com/photo-1592912925002-02623714abfb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=10",
    },
    {
      city: "外島",
      mobile: false,
      img: "https://images.unsplash.com/photo-1578028076641-ef1d08387c14?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=10",
    },
  ];

  /* `$SwiperSlide` */
  const CitySwiperSlide = popularCities.map((item, index) => (
    <SwiperSlide key={index} tag="li">
      <Link to="/scenicspot" onClick={setSelect}>
        <Card className={`shadow ${index % 3 === 0 ? "p-3 mt-2" : "p-2"}`}>
          <Ratio aspectRatio={index % 3 === 0 ? "3x4" : "5x3"}>
            <img src={item.img} alt={item.city} />
          </Ratio>
          <Card.ImgOverlay className="d-flex flex-column align-items-center justify-content-center">
            <MapM className="mb-2" />
            <Card.Title className="text-light fs-2" as="h3">
              {item.city}
            </Card.Title>
          </Card.ImgOverlay>
        </Card>
      </Link>
    </SwiperSlide>
  ));

  /* `$Swiper` */
  const swiperConfig = {
    spaceBetween: 8,
    breakpoints: {
      420: {
        slidesPerView: 2,
      },
      860: {
        slidesPerView: 4,
      },
      1024: {
        slidesPerView: 5,
      },
    },
    grid: {
      rows: 1.5
    },
    wrapperTag: "ul",
    onInit: (swiper) => {
      swiper.params.navigation.prevEl = prevRef.current;
      swiper.params.navigation.nextEl = nextRef.current;
      swiper.navigation.init();
      swiper.navigation.update();
    },
  };
  return (
    <section className="popularCities position-relative">
      <h4 className="fw-normal fs-2 mb-1">
        <Triangle className="me-4" />
        熱門城市
      </h4>
      <div className="section">
        <Button
          as="button"
          variant="light"
          className="swiper-button-prev"
          ref={prevRef}
        ></Button>
        <Button
          as="button"
          variant="light"
          className="swiper-button-next"
          ref={nextRef}
        ></Button>
        <Ratio aspectRatio='15x4'>
          <Swiper {...swiperConfig}>{CitySwiperSlide}</Swiper>
        </Ratio>
      </div>
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
