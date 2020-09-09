import React from "react";

import { Container, Row, Col } from "react-bootstrap";
import truck from "./images/icon/truck.png";
import bag from "./images/icon/bag.png";
import key from "./images/icon/key.png";


const Moto: React.FC<{}> = () => {

    return (
        <section className="padding-40 bg-white border-top border-bottom mb-5">
            <Container>
                <Row className="">
                    <Col sm={6} md={4} className="mt-2">
                        <div className="feature-box">
                            <span className="icon-radius">
                                <img src={truck} className="img-fluid" alt="truck_icon" />
                            </span>

                            <h6>Free & Next Day Delivery</h6>
                            <p>Lorem, ipsum dolor sit.</p>
                        </div>
                    </Col>
                    <Col sm={6} md={4} className="mt-2">
                        <div className="feature-box">
                            <span className="icon-radius">
                                <img src={bag} className="img-fluid" alt="truck_icon" />
                            </span>
                            <h6>Free & Next Day Delivery</h6>
                            <p>Lorem, ipsum dolor sit.</p>
                        </div>
                    </Col>
                    <Col sm={6} md={4} className="mt-2">
                        <div className="feature-box">
                            <span className="icon-radius">
                                <img src={key} className="img-fluid" alt="truck_icon" />
                            </span>
                            <h6>Free & Next Day Delivery</h6>
                            <p>Lorem, ipsum dolor sit.</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>

    );

}




export default Moto;