import React, { useState, useEffect } from "react";

import { Container, Row, Col } from "react-bootstrap";
import AppSideBar from "../partials/AppSideBar";
import Products from "../partials/Products";

import productsData from './products.json';

const ProductsShow = () => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Should not ever set state during rendering, so do this in useEffect instead.
    setProducts(productsData);
  }, []);

  return (
    <Container>
      <Row className="py-5">
        <Col md={3} className="mt-4">
          <AppSideBar />
        </Col>
        <Col md={9}>
          <Products products={products} />
        </Col>
      </Row>
    </Container>
  );

}



export default ProductsShow;