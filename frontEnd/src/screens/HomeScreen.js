import React from "react";

import ProductList from "../components/ProductList";
import { Row, Col } from "react-bootstrap";
import ProductCarousel from "../components/ProductCarousel";
import pyclasses from "../pyclass";

import "./HomeScreen.css";

const HomeScreen = () => {
  return (
    <>
      <ProductCarousel />

      <h1 className="my-5 class-col" id="t_pyclass">
        Physics Courses
      </h1>
      <Row>
        {pyclasses
          .filter((inClass) => inClass.category === "Physics")
          .map((pyclass, key) => (
            <Col sm={12} md={6} lg={6}>
              <ProductList product={pyclass} />
            </Col>
          ))}
      </Row>
      <h1 className="my-5 class-col " id="t_mathclass">
        Math Courses
      </h1>
      <Row>
        {pyclasses
          .filter((inClass) => inClass.category === "Math")
          .map((mathclass, key) => (
            <Col sm={12} md={6} lg={6}>
              <ProductList product={mathclass} />
            </Col>
          ))}
      </Row>
    </>
  );
};

export default HomeScreen;
