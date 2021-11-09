import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { Card, Ratio, Button } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react.js";
import SwiperCore, { Navigation, Grid } from "swiper";
import "swiper/swiper.scss";
import "swiper/modules/navigation/navigation.scss";
import "swiper/modules/grid/grid.scss";

import { ReactComponent as Triangle } from "../../asset/icon/triangle.svg";
import { ReactComponent as MapM } from "../../asset/icon/map_M.svg";
import "./static/_cityList.scss";

SwiperCore.use([Navigation, Grid]);

export default function CityList() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  /* `$popularCities` */
  const popularCities = [
    {
      cityName: "台東",
      city: 'TaitungCounty',
      mobile: true,
      img: "https://images.unsplash.com/photo-1584672534914-50ac33ca00f7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=10",
    },
    {
      cityName: "台北",
      city: 'Taipei',
      mobile: true,
      img: "https://images.unsplash.com/photo-1621415814107-4595c7b2b4fe?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=10",
    },
    {
      cityName: "台中",
      city: 'Taichung',
      mobile: true,
      img: "https://images.unsplash.com/photo-1614518921956-3dc707dbc218?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=10",
    },
    {
      cityName: "台南",
      city: 'Tainan',
      mobile: true,
      img: "https://images.unsplash.com/photo-1582557881844-12b774f6abb6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=10",
    },
    {
      cityName: "高雄",
      city: 'Kaohsiung',
      mobile: true,
      img: "https://images.unsplash.com/photo-1552903346-3fef7ff1b4a0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=10",
    },
    {
      cityName: "花蓮",
      city: 'HualienCounty',
      mobile: true,
      img: "https://images.unsplash.com/photo-1624650727156-dad96f051375?ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MjF8fHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=10",
    },
    {
      cityName: "宜蘭",
      city: 'YilanCounty',
      mobile: false,
      img: "https://images.unsplash.com/photo-1629372282451-74fba8263845?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=10",
    },
    {
      cityName: "嘉義",
      city: 'Chiayi',
      mobile: false,
      img: "https://images.unsplash.com/photo-1586753080433-3b98668a4085?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=10",
    },
    {
      cityName: "南投",
      city: 'NantouCounty',
      mobile: false,
      img: "https://images.unsplash.com/photo-1635441629083-de8117bde098?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=10",
    },
    {
      cityName: "屏東",
      city: 'PingtungCounty',
      mobile: false,
      img: "https://images.unsplash.com/photo-1609147110643-963090d85ff5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=10",
    },
    {
      cityName: "苗栗",
      city: 'MiaoliCounty',
      mobile: false,
      img: "https://images.unsplash.com/photo-1542976813-986a8fccbd1c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=10",
    },
    {
      cityName: "新竹",
      city: 'HsinchuCounty',
      mobile: false,
      img: "https://images.unsplash.com/photo-1592912925002-02623714abfb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=10",
    },
    {
      cityName: "澎湖",
      city: 'PenghuCounty',
      mobile: false,
      img: "https://images.unsplash.com/photo-1578028076641-ef1d08387c14?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=10",
    },
  ];

  /* `$SwiperSlide` */
  const CitySwiperSlide = popularCities.map((item, index) => (
    <SwiperSlide key={index} tag="li">
      <Link to={`/scenicspot?city=${item.city}`}>
        <Card className={`shadow ${index % 3 === 0 ? "p-3 mt-fix me-1" : "p-2 me-1"}`}>
          <Ratio aspectRatio={index % 3 === 0 ? "3x4" : "5x3"}>
            <img src={item.img} alt={item.cityName} />
          </Ratio>
          <Card.ImgOverlay className="d-flex flex-column align-items-center justify-content-center">
            <MapM className="mb-2" />
            <Card.Title className="text-light fs-2" as="h3">
              {item.cityName}
            </Card.Title>
          </Card.ImgOverlay>
        </Card>
      </Link>
    </SwiperSlide>
  ));

  /* `$Swiper` */
  const swiperConfig = {
    spaceBetween: 6,
    breakpoints: {
      0: {
        slidesPerView: 2,
        grid: {
          rows: 1.5
        },
      },
      576: {
        slidesPerView: 4,
        grid: {
          rows: 1.5
        },
      },
      992: {
        slidesPerView: 5,
        grid: {
          rows: 1.5
        },
      },
    },
    wrapperTag: "ul",
    onInit: (swiper) => {
      swiper.params.navigation.prevEl = prevRef.current;
      swiper.params.navigation.nextEl = nextRef.current;
      swiper.navigation.init();
      swiper.navigation.update();
    },
    className: "ps-1"
  };
  return (
    <section className="cityList position-relative">
      <h4 className="fw-normal fs-2 mb-1">
        <Triangle className="mb-1 me-4" />
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
        <Ratio aspectRatio='cityList'>
          <Swiper {...swiperConfig}>{CitySwiperSlide}</Swiper>
        </Ratio>
      </div>
    </section>
  );
}