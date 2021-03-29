import React from "react";
import pyclass from "../pyclass";
import { Container, Row, Col, Card } from "react-bootstrap";
import classTwo2 from "../img/class2021summer2.png";
import classTwo3 from "../img/class-3-2021-summer.png";
const class_1 = (id) => {
  if (id.C_id === "1") {
    let product = pyclass.find((p) => p._id === "1");

    return (
      <Container>
        <Row>
          <Col sm={12}>
            <Card className="my-3 p-3 rounded">
              <Card.Title>本课程需要的基础</Card.Title>
              <Card.Body>
                力学是物理的基础课，因此无需物理基础。数学方面需要有代数基础，能用字母求解二元一次方程，多元一次方程组，以及分析图表。无需三角函数基础。
              </Card.Body>
              <Card.Title>授课语言</Card.Title>
              <Card.Body>英语</Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col sm={12}>
            <Card className="my-3 p-3 rounded">
              <Card.Title>上课时间</Card.Title>
              <Card.Body>
                2021年暑假的力学课开设两个时段。两个时段的总授课时间和每周进度保持一致。每次课课后作业时间在1个小时左右。
              </Card.Body>
              <Row>
                <Col sm={6}>
                  <Card className="my-3 p-3 rounded">
                    <Card.Img variant="top" src={classTwo2} />
                  </Card>
                </Col>
                <Col sm={6}>
                  <Card className="my-3 p-3 rounded">
                    <Card.Img variant="top" src={classTwo3} />
                  </Card>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  } else {
    return <div> </div>;
  }
};

export default class_1;
