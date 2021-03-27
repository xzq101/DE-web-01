import React from "react";
import products from "../products";
import Product from "../components/Product";
import { Row, Col } from "react-bootstrap";
import ProductCarousel from "../components/ProductCarousel";
import pyclasses from "../pyclass";

const HomeScreen = () => {
  return (
    <>
      <ProductCarousel />
      <h1 className="my-5">Upcomeing Courses</h1>
      <Row>
        {products.map((product) => (
          <Col sm={12} md={6} lg={4}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
      <h1 className="my-5">Physics Courses</h1>
      <Row>
        {pyclasses.map((pyclass) => (
          <Col sm={12} md={6} lg={4}>
            <Product product={pyclass} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomeScreen;
