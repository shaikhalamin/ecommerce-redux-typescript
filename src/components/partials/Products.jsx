import React from "react";

import { Row, Col, Button } from "react-bootstrap";


const Products = ({ products }) => {

  return (
    <>

      <Row className="mt-4 mb-4">
        {
          products &&
          products.map((item, i) => {
            return (
              <Col xs={6} md={3} key={item.id} className="">
                <div className="border" style={{ textAlign: 'center' }}>
                  <img className="img-fluid" src={item.imgSrc} alt={item.imgAlt} />
                </div>
                <div className="pd-info mb-4">
                  <p style={{ fontSize: '12px', fontWeight: 'bold', height: '30px' }} className="text-center mt-1">{item.title}</p>
                  <p style={{ fontSize: '12px', fontWeight: 'bold', height: '10px' }} className="text-center">
                    <span className="">{item.unit}</span>
                  </p>
                  <p style={{ fontSize: '12px', fontWeight: 'bold' }} className="text-center">
                    <span className="">{item.regPrice
                      ? item.regPrice : 'each'
                    }</span>
                  </p>

                  <Button style={{ fontSize: '12px', fontWeight: 'bold' }} className="text-center btn btn-sm btn-block btn-info text-white">ADD TO CARD</Button>

                </div>
              </Col>
            )
          })
        }
      </Row>
    </>
  );

}




export default Products;