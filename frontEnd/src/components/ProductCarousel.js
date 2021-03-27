import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { LinkContainer } from "react-router-bootstrap";
import "./ProductCarousel.css";

import products from "../products";

const ProductCarousel = () => {
  return (
    <Carousel>
      <Carousel.Item pause={"hover"}>
        <LinkContainer to={`/class/1`}>
          <img
            className="d-block w-100 "
            src="/images/me-8-4-3.png"
            alt="First slide"
          />
        </LinkContainer>
        <Carousel.Caption className="ml">
          {/* jsx <h2 className="class-time">2021 summer class registration open</h2>*/}
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <LinkContainer to={`/class/2`}>
          <img
            className="d-block w-100"
            src="/images/amc-mathcount.png"
            alt="Second slide"
          />
        </LinkContainer>
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <LinkContainer to={`/class/3`}>
          <img
            className="d-block w-100"
            src="/images/1ppd.png"
            alt="Third slide"
          />
        </LinkContainer>
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default ProductCarousel;
