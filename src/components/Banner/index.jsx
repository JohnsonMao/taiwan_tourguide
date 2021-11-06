import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Card, Form, FormControl, Button, Row, Col } from "react-bootstrap";

import { paramCityFunc, cityNameFunc, typeValueFunc } from '../../utils/select';
import { ReactComponent as Search } from "../../asset/icon/search.svg";
import { ReactComponent as GPS } from "../../asset/icon/GPS.svg";
import "./static/_banner.scss";

export default function Banner(props) {
  const { img, type, cities } = props;
  const { pathname, search } = useLocation();
  /* Get city from parameter */
  const param_city = paramCityFunc(search);
  /* Select Func */
  const cityName = cityNameFunc(cities, param_city);
  const typeValue = typeValueFunc(type, pathname);

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

  /* Control Select onClick */
  const handleSelect = (e) => {
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
        if (select.cityShow || select.typeShow) {
          setSelect({ cityShow: false, typeShow: false });
        }
        break;
      case SEARCH_BTN:
        if (select.cityShow || select.typeShow) {
          setSelect({ cityShow: false, typeShow: false });
        }
        break;
      case TOGGLE_GPS:
        if (select.cityShow || select.typeShow) {
          setSelect({ cityShow: false, typeShow: false });
        }
        break;
      default:
        if (select.cityShow || select.typeShow) {
          setSelect({ cityShow: false, typeShow: false });
        }
    }
  };

  const configLink = {
    "data-node": SELECT_OPTION,
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
                          <li key="/" className="option">
                            <Link to={`/`} {...configLink}>
                              類別
                            </Link>
                          </li>
                        ) : (
                          <li key={item.path} className="option order-1">
                            <Link to={item.path + search} {...configLink}>
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
                            <Link to={pathname} {...configLink}>
                              不分縣市
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
