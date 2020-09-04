import React from "react";
import { Button, Jumbotron, Container, Row, Col, Form } from "react-bootstrap";
import bG from "./images/landingBanner.jpg";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AppJumbotron: React.FC<{}> = () => {

  return (
    <header>
      <Jumbotron
        style={{
          borderRadius: "0px",
          backgroundImage: `url(${bG})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover"
        }}
      >
        <Container>
          <Row>
            <Col md={12} className="text-center mt-3 mb-3">
              <h3 className="text-dark mb-2">
                <span className="" style={{ padding: "0px" }}>
                  Faster delivery with quality products
                </span>
              </h3>
              <h6 className="text-dark mb-2 ">
                <span className="" style={{ padding: "0px" }}>
                  Get Rice Oil Soap Fish Vegitable Meat & Many More
                </span>
              </h6>
              <Row className="mt-3 mb-3">
                <Col md={{ span: 6, offset: 3 }}>
                  <Form>
                    <Form.Row>
                      <Col className="p-r-l">
                        <Form.Control
                          className="b-r-0"
                          placeholder="Seach for your products"
                        />
                      </Col>
                      <Button variant="btn btn-info b-r-0">
                        <FontAwesomeIcon icon={faSearch} />
                      </Button>
                    </Form.Row>
                  </Form>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Jumbotron>
    </header>
  );
};

export default AppJumbotron;
