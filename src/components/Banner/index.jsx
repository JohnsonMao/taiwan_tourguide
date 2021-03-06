import React, { useState, useEffect, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import useGeolocation from "react-hook-geolocation";
import { Card, Form, FormControl, Button, Row, Col } from "react-bootstrap";

import { paramCityFunc, cityNameFunc, typeValueFunc } from '../../utils/select';
import { homeType, foodAndInnType, cities } from '../../utils/selectConfig';
import { ReactComponent as LogoText } from "./static/logoText.svg";
import { ReactComponent as Search } from "../../asset/icon/search.svg";
import { ReactComponent as GPS } from "../../asset/icon/GPS.svg";
import "./static/_banner.scss";

export default function Banner({ img, typeStr, setNearby, setKeyword }) {
  const { pathname, search } = useLocation();
  const type = typeStr === 'homeType' ? homeType : foodAndInnType;
  /* Get city from parameter */
  const param_city = paramCityFunc(search);
  /* Select Func */
  const cityName = cityNameFunc(cities, param_city);
  const typeValue = typeValueFunc(type, pathname);

  /* keyword input */
  const [keywordInput, setKeywordInput] = useState('');

  /* Select UI State */
  const [select, setSelect] = useState({
    cityShow: false,
    typeShow: false,
  });

  /* Select action type */
  const SELECT_TYPE = "select_type";
  const SELECT_CITY = "select_city";
  const SELECT_OPTION = "select_option";
  const SEARCH = "search";
  const SEARCH_BTN = "search_btn";
  const TOGGLE_GPS = "toggle_GPS";
  const { latitude, longitude, error } = useGeolocation();

  const handleSubmit = (e) => {
    e.preventDefault();
    setKeyword(keywordInput.trim());
  }

  /* Control Select onClick */
  const handleSelect = useCallback(async(e) => {
    const { node } = e.target.dataset;
    switch (node) {
      case SELECT_TYPE:
        setSelect({ cityShow: false, typeShow: true });
        break;
      case SELECT_CITY:
        setSelect({ cityShow: true, typeShow: false });
        break;
      case SELECT_OPTION:
        setSelect({ cityShow: false, typeShow: false });
        break;
      case SEARCH:
        break;
      case SEARCH_BTN:
        setKeyword(keywordInput.trim());
        break;
      case TOGGLE_GPS:
        !error
          ? await setNearby(`nearby(${latitude}, ${longitude}, 2500)`)
          : await setNearby(error);
        break;
      default:
    }
  }, [error, keywordInput, latitude, longitude, setKeyword, setNearby]);

  const handleAllSelect = useCallback((e) => {
    if (select.cityShow || select.typeShow) {
      setSelect({ cityShow: false, typeShow: false });
    }
    handleSelect(e)
  }, [select, setSelect, handleSelect])

  useEffect(() => {
    window.addEventListener('click', handleAllSelect)
    return () => {
      window.removeEventListener('click', handleAllSelect)
    }
  }, [handleAllSelect])

  const configLink = {
    "data-node": SELECT_OPTION,
    className: "d-block px-3 py-2",
    replace: true,
  };

  return (
    <Card className="custom_banner custom_shadow p-5">
      <div>
        <img src={img} alt="banner" />
        <Card.ImgOverlay className="d-flex justify-content-center align-items-center">
          <div>
            <Card.Title as="h2" className="text-shadow">
              <LogoText />
            </Card.Title>
            <Card.Text className="text-light">
              ????????????????????????????????????????????????????????????
            </Card.Text>
            <Form onSubmit={handleSubmit}>
              <Row className="gx-2">
                <Col>
                  <FormControl
                    className="h-100"
                    data-node={SEARCH}
                    onChange={(e) => setKeywordInput(e.target.value.trim())}
                    value={keywordInput}
                    placeholder="???????????????"
                    aria-label="???????????????"
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
                      aria-label="????????????"
                      data-node={SELECT_TYPE}
                    >
                      {typeValue}
                    </div>
                    <ul className="position-absolute top-0 start-0 flex-column w-100 rounded">
                      <li className="option">
                        <Link to={pathname + search} {...configLink}>
                          {typeValue}
                        </Link>
                      </li>
                      {type.map((item) =>
                        item.path === pathname ? (
                          <li key="index" className="option">
                            <Link to={typeStr === 'homeType' ? '/home' : '/foodandinn'} {...configLink}>
                              ??????
                            </Link>
                          </li>
                        ) : (
                          <li key={item.path} className="option order-1">
                            <Link to={item.path + "?city=" + param_city} {...configLink}>
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
                      aria-label="????????????"
                      data-node={SELECT_CITY}
                    >
                      {cityName}
                    </div>
                    <ul className="position-absolute top-0 start-0 flex-column w-100 rounded">
                      <li className="option">
                        <Link to={pathname + search} {...configLink}>
                          {cityName}
                        </Link>
                      </li>
                      {cities.map((item) =>
                        item.City === param_city ? (
                          <li key="all" className="option">
                            <Link to={pathname + "?city="} {...configLink}>
                              ????????????
                            </Link>
                          </li>
                        ) : (
                          <li key={item.City} className="option order-1">
                            <Link
                              to={pathname + "?city=" + item.City}
                              {...configLink}
                            >
                              {item.CityName}
                            </Link>
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                </Col>
                <Col xs="auto">
                  <Link
                    to={pathname + "?city=nearby"}
                    className="btn btn-secondary lh-1 p-2"
                    data-node={TOGGLE_GPS}
                  >
                    <GPS data-node={TOGGLE_GPS} />
                  </Link>
                </Col>
              </Row>
            </Form>
          </div>
        </Card.ImgOverlay>
      </div>
    </Card>
  );
}
