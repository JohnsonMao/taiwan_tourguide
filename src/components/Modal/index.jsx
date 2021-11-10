import React, { useRef } from "react";
import { Modal, Ratio, Button, Row, Col } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react.js";
import SwiperCore, { Navigation } from "swiper";
import "swiper/swiper.scss";
import "swiper/modules/navigation/navigation.scss";
import './static/_modal.scss';

import { ReactComponent as Close } from "../../asset/icon/close.svg";
import { ReactComponent as Tel } from "../../asset/icon/tel.svg";
import { ReactComponent as Ticket } from "../../asset/icon/ticket.svg";
import { ReactComponent as Time } from "../../asset/icon/time.svg";
import { ReactComponent as MapM } from "../../asset/icon/map_M.svg";

SwiperCore.use([Navigation]);

const initData = {
  Picture: {},
  StartTime: '',
  EndTime: '',
}

export default function CostomModal({ show, handleClose, data = initData }) {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  /* 整理照片資料變成陣列型式 */
  const pictureArr = Object.entries(data.Picture);
  const newPicture = [];
  for (let i = 0; i < pictureArr.length; i++) {
    if (i % 2 === 0) {
      /* 
       * pictureArr[i][1]     為 PictureUrl
       * pictureArr[i + 1][1] 為 PictureDescription
       */
      let arrVal = [pictureArr[i][1], pictureArr[i + 1][1]];
      newPicture.push(arrVal);
    }
  }
  const CitySwiperSlide = newPicture.map((item, index) => (
    <SwiperSlide key={index} tag="li">
      <Ratio aspectRatio="4x3">
        <img src={item[0]} alt={item[1]} />
      </Ratio>
    </SwiperSlide>
  ));
  /* `$Swiper` */
  const swiperConfig = {
    wrapperTag: "ul",
    onInit: async (swiper) => {
      await prevRef.current;
      await nextRef.current;
      swiper.params.navigation.prevEl = prevRef.current;
      swiper.params.navigation.nextEl = nextRef.current;
      swiper.navigation.init();
      swiper.navigation.update();
    }
  };

  const dateFormat = (date) => {
    const index = date.indexOf('T');
    const year = data.StartTime.slice(0, index);
    const month = year.replace('-', ' 年 ');
    const day = month.replace('-', ' 月 ');
    const newDate = day + ' 日 '
    return newDate
  }

  const startDate = dateFormat(data.StartTime);
  const endDate = dateFormat(data.EndTime);

  return (
    <Modal show={show} onHide={handleClose} size="lg" centered>
      <Button onClick={handleClose}>
        <Close />
      </Button>
      <Ratio aspectRatio="4x3">
        <Swiper {...swiperConfig}>{CitySwiperSlide}</Swiper>
      </Ratio>
      <div className="d-flex justify-content-end">
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
      </div>
      <Modal.Body className="p-0" scrollable>
        <h2 className="mb-5 fs-3">{data.Name}</h2>
        <p className="mb-5 fs-5">{data.Description}</p>
        
        <Row xs={2} className="gy-5">
          <Col>
            <span className="d-flex align-items-center">
              <Time className="me-3"/>
              {startDate === endDate ? startDate : startDate + '到 ' + endDate}
            </span>
          </Col>
          <Col>
            <span className="d-flex align-items-center">
              <Ticket className="me-3" />
              {data.Charge || '未提供資訊'}
            </span>
          </Col>
          <Col>
            <span className="d-flex align-items-center">
              <MapM className="fill-primary me-3" />
              {data.Address || '未提供地址'}
            </span>
          </Col>
          <Col>
            <span className="d-flex align-items-center">
              <Tel className="me-3" />
              {data.Phone || '未提供電話'}
            </span>
          </Col>
        </Row>
      </Modal.Body>
    </Modal>
  );
}
