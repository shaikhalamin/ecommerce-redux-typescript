import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl'

import {
  Container
} from "react-bootstrap";

import {
  faBars,
  faSearch,
  faCartPlus,
  faTruck,
  faUser,
  faQuestionCircle
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  Link
} from "react-router-dom";

const AppNavBar: React.FC<{}> = () => {

  return (
    <Navbar bg="dark" expand="lg">
      <Navbar.Brand>
        <span className="mr-3">
          <FontAwesomeIcon icon={faBars} />
        </span>

        <Link to="/" className="name-link">
          <span className="brand-name text-danger">Shaikh</span>
          <span className="brand-name">Grocery</span>
        </Link>

      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Container>
          <Nav className="mr-auto text-white">
            <Form inline>
              <FormControl
                type="text"
                placeholder="Seach for your products"
                className="mr-sm-2 nav-search-input b-r-0"
              />
              <Button
                variant="btn btn-info b-r-0"
                style={{ marginLeft: "-10px" }}
              >
                <FontAwesomeIcon icon={faSearch} />
              </Button>
            </Form>
          </Nav>
          <Nav.Link className="text-white">

          </Nav.Link>
          <Button variant="btn btn-outline-info btn-sm text-white">
            <FontAwesomeIcon icon={faTruck} /> Become a supplier
          </Button>
          <Nav.Link href="#home" className="text-white">
            Sign in <FontAwesomeIcon icon={faUser} />
          </Nav.Link>
          <Button variant="btn btn-outline-info btn-sm text-white">
            <FontAwesomeIcon icon={faCartPlus} /> Cart <sup>0</sup>
          </Button>
          <Nav.Link href="#home" className="text-white">
            FAQ <FontAwesomeIcon icon={faQuestionCircle} />
          </Nav.Link>
        </Container>
      </Navbar.Collapse>
    </Navbar>
  );

}


export default AppNavBar;
