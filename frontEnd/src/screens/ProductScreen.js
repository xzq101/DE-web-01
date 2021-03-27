import React from "react";
import { Row } from "react-bootstrap";
import products from "../products";
import DesCom from "../components/DesCom";
import ConsoleLog from "../components/ConsoleLog";

const ProductScreen = ({ match }) => {
  const product = products.find((p) => p._id === match.params.id);
  console.log(product.description.map);
  return (
    <>
      <h1>{product.name}</h1>
      <Row>
        {product.description.map((description) => (
          <DesCom description={description} />
        ))}
      </Row>
    </>
  );
};

export default ProductScreen;
