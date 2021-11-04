import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Card, Form, FormControl, Button, Row, Col } from "react-bootstrap";

import { ReactComponent as Search } from "../../asset/icon/search.svg";
import { ReactComponent as GPS } from "../../asset/icon/GPS.svg";
import "./static/_banner.scss";

export default function Banner(props) {
  const { img, type, pathname, cities, select, setSelect } = props;

  const SELECT_TYPE = "select_type";
  const SELECT_CITY = "select_city";
  const SELECT_TYPE_INDEX = "select_type_index";
  const SELECT_CITY_INDEX = "select_city_index";
  const SEARCH = "search";
  const SEARCH_BTN = "search_btn";
  const TOGGLE_GPS = "toggle_GPS";

  const handleSelect = (e) => {
    const { node, city, cityname } = e.target.dataset;
    console.log(node);
    switch (node) {
      case SELECT_TYPE:
        setSelect((state) => ({ ...state, cityShow: false, typeShow: true }));
        break;
      case SELECT_CITY:
        setSelect((state) => ({ ...state, cityShow: true, typeShow: false }));
        break;
      case SELECT_TYPE_INDEX:
        setSelect((state) => ({ ...state, cityShow: false, typeShow: false }));
        break;
      case SELECT_CITY_INDEX:
        setSelect({ city, cityname, cityShow: false, typeShow: false });
        break;
      case SEARCH:
        break;
      case SEARCH_BTN:
        break;
      case TOGGLE_GPS:
        break;
      default:
        setSelect((state) => ({ ...state, cityShow: false, typeShow: false }));
    }
  };

  const configLink = {
    "data-node": SELECT_TYPE_INDEX,
    className: "d-block px-3 py-2",
    replace: true,
  };

  return (
    <Card className="custom_banner custom_shadow p-5" onClick={handleSelect}>
      <div>
        <img src={require(`../../pages/${img}`).default} alt="banner" />
        <Card.ImgOverlay className="d-flex justify-content-center align-items-center">
          <div>
            <Card.Title as="h2" className="text-light fs-1 fw-bold">
              Welcome to
              <span className="text-primary"> Taiwan°</span>
            </Card.Title>
            <Card.Text className="text-light">
              台北、台中、台南、屏東、宜蘭……遊遍台灣
            </Card.Text>
            <Form>
              <Row className="gx-2">
                <Col>
                  <FormControl
                    className="h-100"
                    data-node={SEARCH}
                    placeholder="搜尋關鍵字"
                    aria-label="搜尋關鍵字"
                  />
                </Col>
                <Col xs="auto">
                  <Button
                    className="lh-1 p-2"
                    as="button"
                    data-node={SEARCH_BTN}
                  >
                    <Search data-node={SEARCH_BTN} />
                  </Button>
                </Col>
              </Row>
            </Form>
            <Form>
              <Row className="gx-2">
                <Col>
                  <div
                    className={`position-relative h-100 select ${
                      select.typeShow ? "active" : null
                    }`}
                    tabIndex="0"
                  >
                    <div
                      className="form-control h-100"
                      aria-label="選擇類別"
                      data-node={SELECT_TYPE}
                    >
                      {pathname === "/"
                        ? "類別"
                        : type[type.findIndex((obj) => obj.path === pathname)]
                            .type}
                    </div>
                    <ul className="position-absolute top-0 start-0 flex-column w-100 rounded">
                      <li className="option">
                        <Link
                          to={pathname === "/" ? "/" : pathname}
                          {...configLink}
                        >
                          {pathname === "/"
                            ? "類別"
                            : type[
                                type.findIndex((obj) => obj.path === pathname)
                              ].type}
                        </Link>
                      </li>
                      {type.map((item) =>
                        item.path === pathname ? (
                          <li key="/" className="option">
                            <Link to="/" {...configLink}>
                              類別
                            </Link>
                          </li>
                        ) : (
                          <li key={item.path} className="option order-1">
                            <Link to={item.path} {...configLink}>
                              {item.type}
                            </Link>
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                </Col>
                <Col>
                  <div
                    className={`position-relative h-100 select ${
                      select.cityShow ? "active" : null
                    }`}
                    tabIndex="0"
                  >
                    <div
                      className="form-control h-100"
                      aria-label="選擇縣市"
                      data-node={SELECT_CITY}
                    >
                      {select.city === "" ? "不分縣市" : select.cityname}
                    </div>
                    <ul className="position-absolute top-0 start-0 flex-column w-100 rounded">
                      <li
                        className="option px-3 py-2"
                        data-city={select.city === "" ? "" : select.city}
                        data-cityname={
                          select.city === "" ? "" : select.cityname
                        }
                        data-node={SELECT_CITY_INDEX}
                      >
                        {select.city === "" ? "不分縣市" : select.cityname}
                      </li>
                      {cities.map((item) =>
                        item.City === select.city ? (
                          <li
                            key="all"
                            className="option px-3 py-2"
                            data-city=""
                            data-cityname=""
                            data-node={SELECT_CITY_INDEX}
                          >
                            不分縣市
                          </li>
                        ) : (
                          <li
                            key={item.City}
                            data-city={item.City}
                            data-cityname={item.CityName}
                            data-node={SELECT_CITY_INDEX}
                            className="option order-1 px-3 py-2"
                          >
                            {item.CityName}
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                </Col>
                <Col xs="auto">
                  <Button
                    variant="secondary"
                    className="lh-1 p-2"
                    as="button"
                    data-node={TOGGLE_GPS}
                  >
                    <GPS data-node={TOGGLE_GPS} />
                  </Button>
                </Col>
              </Row>
            </Form>
          </div>
        </Card.ImgOverlay>
      </div>
    </Card>
  );
}
