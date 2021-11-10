import React from "react";
import { Row, Col, Card, Ratio } from "react-bootstrap";

import { ReactComponent as Triangle } from "../../asset/icon/triangle.svg";
import { ReactComponent as Square } from "../../asset/icon/square.svg";
import { ReactComponent as Map } from "../../asset/icon/map.svg";

export default function CardList(props) {
  const { icon, title, data, city, keyword, nearby } = props;
  return (
    <section className="section">
      <h4 className="fw-normal fs-2 mb-3">
        {icon === "triangle" ? (
          <Triangle className="mb-1 me-4" />
        ) : (
          <Square className="mb-1 me-4" />
        )}
        {keyword
          ? `有關「${keyword}」的${title.substr(-2)}`
          : nearby 
          ? '附近的' + title.substr(-2)
          : city === "不分縣市"
          ? title
          : city + title.substr(-2)}
      </h4>
      <Row xs={2} md={4} lg={5} as="ul" className="gx-3 gy-6">
        {data.map((item, index) => (
          <Col key={index} as="li">
            <Card className="custom_shadow p-3">
              <Ratio aspectRatio="4x3" className="mb-3">
                <img
                  src={item.Picture.PictureUrl1}
                  alt={item.Picture.PictureDescription1}
                />
              </Ratio>
              <Card.Body className="p-0">
                <Card.Title as="h2" className="title fs-5 mb-3">
                  {item.Name}
                </Card.Title>
                <Card.Text className="fs-6 fw-light text-info d-flex align-items-center pb-1">
                  <Map className="flex-shrink-0" />
                  <span className="text-overflow text-overflow-1">
                    {item.Address}
                  </span>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </section>
  );
}
