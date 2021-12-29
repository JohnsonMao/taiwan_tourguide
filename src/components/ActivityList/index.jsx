import React, { useState } from "react";
import { Row, Col, Card, Ratio, Button } from "react-bootstrap";

import Modal from "../Modal";
import Loading from "../Loading";
import { ReactComponent as Triangle } from "../../asset/icon/triangle.svg";
import { ReactComponent as MapM } from "../../asset/icon/map_M.svg";

const initData = {
  Picture: {},
  StartTime: "",
  EndTime: "",
};
export default function ActivityList(props) {
  const { data, city, keyword, nearby, loading } = props;
  const [show, setShow] = useState(false);
  const [modalData, setModalData] = useState(initData);

  const openModal = async (e) => {
    const id = e.target.dataset.id;
    const result = data.find((item) => item.ID === id);
    await setModalData(result);
    setShow(true);
  };

  const closeModal = () => {
    setShow(false);
  };
  return (
    <>
      <main className="section">
        <h4 className="fw-normal fs-2 mb-3">
          <Triangle className="mb-1 me-4" />
          {keyword
            ? `有「${keyword}」關鍵字的`
            : nearby
            ? "附近的"
            : city === "不分縣市"
            ? "熱門"
            : city}
          活動
        </h4>
        {loading ? (
          <Loading />
        ) : (
          <Row xs={1} sm={2} as="ul" className="gx-6 gy-8">
            {data.map((item) => (
              <Col key={item.ActivityID} as="li">
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
                          <MapM className="fill-primary flex-shrink-0 me-2" />
                          <span className="text-overflow text-overflow-1">
                            {item.Location}
                          </span>
                        </div>
                        <Button
                          variant="outline-primary"
                          className="fs-5 flex-shrink-0 px-5 py-2 d-none d-lg-block"
                          onClick={openModal}
                          data-id={item.ID}
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
        )}
      </main>
      <Modal show={show} handleClose={closeModal} data={modalData} />
    </>
  );
}
