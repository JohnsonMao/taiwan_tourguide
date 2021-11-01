import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, Form, FormControl, Button, Row, Col } from 'react-bootstrap';

import { ReactComponent as Search } from '../../asset/icon/search.svg';
import { ReactComponent as GPS } from '../../asset/icon/GPS.svg';
import './static/_banner.scss';

export default function Banner(props) {
  const { img, type, cities } = props;

  const [ typeSelect, setTypeSelect] = useState({type: "-1", show: false});
  const [ citySelect, setCitySelect] = useState({city: "", show: false});

  const SELECT_TYPE = "select_type";
  const SELECT_CITY = "select_city";
  const SELECT_TYPE_INDEX = "select_type_index";
  const SELECT_CITY_INDEX = "select_city_index";

  const handleType = (e) => {
    const { node, type, city } = e.target.dataset;
    
    console.log(node);
    switch(node){
      case SELECT_TYPE:
        setTypeSelect(typeSelect => ({...typeSelect, show: true}));
        break;
      case SELECT_CITY:
        setTypeSelect(typeSelect => ({...typeSelect, show: false}));
        setCitySelect(CitySelect => ({...CitySelect, show: true}));
        break;
      case SELECT_TYPE_INDEX:
        setTypeSelect({type, show: false});
        break;
      case SELECT_CITY_INDEX:
        setCitySelect({city, show: false});
        break;
      default:
        setTypeSelect(typeSelect => ({...typeSelect, show: false}));
        setCitySelect(citySelect => ({...citySelect, show: false}));
    }
  }

  const configLink = {
    "data-node": SELECT_TYPE_INDEX,
    className: "d-block text-dark px-3 py-2",
    replace: true
  }

  return (
    <Card className="custom_banner custom_shadow p-5" onClick={handleType}>
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
                  <div className={`position-relative h-100 select 
                    ${typeSelect.show ? 'active' : null}`} tabIndex="0">
                    <div className="form-control h-100" aria-label="選擇類別"
                      data-node={SELECT_TYPE}>{
                      typeSelect.type === "-1" ? "類別" : type[typeSelect.type].type
                    }</div>
                    <ul className="position-absolute top-0 start-0 flex-column
                                  w-100 rounded"
                    >
                      <li className="option">
                        <Link to={
                          typeSelect.type === "-1" ? '/' : type[typeSelect.type].path
                        } data-type={typeSelect.type} {...configLink}>
                          {typeSelect.type === "-1" ? '類別' : type[typeSelect.type].type}
                        </Link>
                      </li>
                      {
                        type.map((item, index) => (
                          +typeSelect.type === index ? (
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
                <div className={`position-relative h-100 select 
                    ${citySelect.show ? 'active' : null}`} tabIndex="0">
                    <div className="form-control h-100" aria-label="選擇縣市"
                      data-node={SELECT_CITY}>{
                      "不分縣市"
                    }</div>
                    <ul className="position-absolute top-0 start-0 flex-column
                                  w-100 rounded"
                    >
                      <li className="option px-3 py-2" 
                        data-city="" data-node={SELECT_CITY_INDEX}>
                        不分縣市
                      </li>
                      {
                        cities.map( item => (
                          <li key={item.City} data-city={item.City} 
                            data-node={SELECT_CITY_INDEX} className="option px-3 py-2">
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
