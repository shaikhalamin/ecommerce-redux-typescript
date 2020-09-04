import React, { useState, useEffect } from "react";

import {
  Link
} from "react-router-dom";

import { ListGroup } from "react-bootstrap";
import menusData from './menu.json';

const AppSideBar = () => {

  const [menus, setMenus] = useState([]);

  useEffect(() => {
    setMenus(menusData);
  }, []);

  return (
    <>
      {
        menus &&
        menus.map((item, i) => {
          return (
            <ListGroup key={item.id} className="mb-1 d-none d-sm-block">
              <ListGroup.Item variant="light" className="padding-0">
                <p style={{ fontSize: '16px', fontWeight: 'bold' }} className="text-center mt-3">
                  <Link to="/products" className="side-menu-link">
                    {item.title}
                  </Link>
                </p>
              </ListGroup.Item>
            </ListGroup>
          )
        })
      }
    </>
  );

}




export default AppSideBar;