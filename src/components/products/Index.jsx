import React, { useState, useEffect } from "react";
import { Row, Col, Button } from "react-bootstrap";
import AppNavBar from "../partials/AppNavBar";
import AppSideBar from "../partials/AppSideBar";

import popularData from './chaldal-popular.json';
const Products = () => {

  const [products, setPopular] = useState([]);

  useEffect(() => {
    setPopular(popularData);
  }, []);

  return (
    <>
      <AppNavBar />

      <Row className="py-1" style={{ marginLeft: '0px', marginRight: '0px' }}>
        <Col md={2} className="mt-4 d-xs-none d-md-block">
          <AppSideBar />
        </Col>
        <Col md={10}>
          <Row className="mt-4 mb-4">
            {
              products &&
              products.map((item, i) => {
                //console.log('unique-key-checking: ->', i)
                return (
                  <Col xs={6} md={2} key={i} className="">
                    <div className="border text-center">
                      <img className="img-custom-fluid" src={item.image} alt={item.weight} />
                    </div>
                    <div className="pd-info mb-4">
                      <p style={{ fontSize: '12px', fontWeight: 'bold', height: '30px' }} className="text-center mt-1">{item.name}</p>
                      <p style={{ fontSize: '12px', fontWeight: 'bold', height: '10px' }} className="text-center">
                        <span className="">{item.weight}</span>
                      </p>
                      <p style={{ fontSize: '12px', fontWeight: 'bold' }} className="text-center">
                        <span className="">{item.price
                          ? item.price : 'each'
                        }</span>
                      </p>

                      <Button style={{ fontSize: '12px', fontWeight: 'bold' }} className="text-center btn btn-sm btn-warning btn-block">ADD TO CARD</Button>

                    </div>
                  </Col>
                )
              })
            }
          </Row>
        </Col>
      </Row>

    </>
  );

}

export default Products;
