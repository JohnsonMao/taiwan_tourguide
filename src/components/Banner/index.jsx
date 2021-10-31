import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, Form, FormControl, Button, Row, Col } from 'react-bootstrap';

import { ReactComponent as Search } from '../../asset/icon/search.svg';
import { ReactComponent as GPS } from '../../asset/icon/GPS.svg';
import './static/_banner.scss';

export default function Banner(props) {
  const { img, type, cities } = props;

  const [ typeIndex, setTypeIndex] = useState("-1");

  const handleType = (e) => {
    const { classList } = e.currentTarget;
    console.log(e.target.dataset.node)
    console.log(e.target)
    switch(e.target.dataset.node){
      case "select_focus":
        classList.add('active');
        break;
      case "select_link":
        classList.remove('active');
        setTypeIndex(e.target.dataset.type);
        break;
      case "select_option":
        classList.remove('active');
        break;
      default:
        classList.remove('active');
    }
  }

  const configLink = {
    "data-node": "select_link",
    className: "d-block text-dark px-3 py-2",
    replace: true,
    onBlur: console.log("a")
  }

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
                  <div className="position-relative h-100 select" tabIndex="0"
                    onClick={handleType}>
                    <div className="form-control h-100" aria-label="選擇類別"
                      data-node="select_focus">{
                      typeIndex === "-1" ? "類別" : type[typeIndex].type
                    }</div>
                    <ul className="position-absolute top-0 start-0 flex-column
                                  w-100 rounded"
                    >
                      <li className="option">
                        <Link to='/' data-type={typeIndex} {...configLink}>
                          {typeIndex === "-1" ? '類別' : type[typeIndex].type}
                        </Link>
                      </li>
                      {
                        type.map((item, index) => (
                          +typeIndex === index ? (
                            <li key='-1' className="option">
                              <Link to='/' data-type="-1" {...configLink}>
                                類別
                              </Link>
                            </li>
                          ) : (
                            <li key={index} className="option order-1">
                              <Link to={item.path} data-type={index} {...configLink}>
                                {item.type}
                              </Link>
                            </li>
                          )
                        ))
                      }
                    </ul>
                  </div>
                </Col>
                <Col>
                  <div className="position-relative h-100 select" tabIndex="0"
                    onClick={handleType}>
                    <div className="form-control h-100" aria-label="選擇縣市"
                      data-node="select_focus">{
                      "不分縣市"
                    }</div>
                    <ul className="position-absolute top-0 start-0 flex-column
                                  w-100 rounded"
                    >
                      <li className="option px-3 py-2" 
                        data-city="-1" data-node="select_option" >
                        不分縣市
                      </li>
                      {
                        cities.map((item, index) => (
                          <li key={item.City} data-city={index} data-node="select_option" 
                            className="option px-3 py-2">
                            {item.CityName}
                          </li>
                        ))
                      }
                    </ul>
                  </div>
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
