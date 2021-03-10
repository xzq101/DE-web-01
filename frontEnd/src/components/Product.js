import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  return (
    <Card className="my-3 p-3 rounded">
      <Link to={`/class/${product._id}`}>
        <Card.Title as="h4">
          <strong>{product.name}</strong>
        </Card.Title>
      </Link>
      <Card.Body>
        <Card.Text as="div">intro</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
