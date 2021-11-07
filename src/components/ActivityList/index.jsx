import React from "react";
import { Row, Col, Card, Ratio, Button } from "react-bootstrap";

import { ReactComponent as Triangle } from "../../asset/icon/triangle.svg";
import { ReactComponent as MapM } from "../../asset/icon/map_M.svg";

export default function ActivityList(props) {
  const { data, city } = props;
  /* 
  Address: "苗栗縣苑裡鎮中正里15鄰126-3號"
  Description: "由苗栗縣巧聖技藝傳統文化推展協會主辦－...
  EndTime: "2021-11-14T21:00:00+08:00"
  Name: "2021年全國巧聖先師文化祭會師在苑裡"
  Phone: "886-930905345"
  Picture: {}
  SrcUpdateTime: "2021-11-05T01:12:27+08:00"
  StartTime: "2021-11-13T07:00:00+08:00"
  UpdateTime: "2021-11-05T02:40:
  */
  return (
    <main className="section">
      <h4 className="fw-normal fs-2 mb-3">
        <Triangle className="mb-1 me-4" />
        {city === '不分縣市' ? '熱門' : city}活動
      </h4>
      <Row xs={1} sm={2} as="ul" className="gx-6 gy-8">
        {data.map((item, index) => (
          <Col key={index} as="li">
            <Card className="custom_shadow activity p-4 pe-5">
              <Row className="gx-4">
                <Col>
                  <Ratio aspectRatio="1x1">
                    <img
                      src={item.Picture.PictureUrl1}
                      alt={item.Picture.PictureDescription1}
                    />
                  </Ratio>
                </Col>
                <Col xs={7} className="d-flex flex-column">
                  <Card.Body className="p-0">
                    <Card.Title
                      as="h2"
                      className="text-overflow text-overflow-1 fs-4 mb-3"
                    >
                      {item.Name}
                    </Card.Title>
                    <Card.Text className="text-overflow text-overflow-5 fs-5 text-gray">
                      {item.Description}
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer className="bg-light d-flex justify-content-between p-0 pe-3">
                    <div className="fs-5 d-flex align-items-center">
                      <MapM className="fill-primary me-2" />
                      <span className="text-overflow text-overflow-1">
                        {item.Location}
                      </span>
                    </div>
                    <Button
                      variant="outline-primary"
                      className="fs-5 flex-shrink-0 px-5 py-2"
                    >
                      活動詳情
                    </Button>
                  </Card.Footer>
                </Col>
              </Row>
            </Card>
          </Col>
        ))}
      </Row>
    </main>
  );
}
