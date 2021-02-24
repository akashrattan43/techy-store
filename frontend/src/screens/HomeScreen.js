import React from "react";
import products from "../products";
import Product from '../components/Product'
import { Row, Col } from "react-bootstrap";

function HomeScreen() {
  return (
    <>
      <h1>Lates Products</h1>
      <Row>
        {products.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <h5><Product product={product}/></h5>
          </Col>
        ))}
      </Row>
    </>
  );
}

export default HomeScreen;