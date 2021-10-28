import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Container, Navbar, Nav } from 'react-bootstrap';

import './static/_headerNavbar.scss';
import { ReactComponent as Triangle } from './static/triangle.svg';
import { ReactComponent as Square } from './static/square.svg';
import { ReactComponent as Circle } from './static/circle.svg';

export default function HeaderNavbar() {
  return (
    <Navbar className="p-0" sticky="top" bg="light">
      <Container className="align-items-end">
        <Navbar.Brand as="h1" className="m-0 py-5">
          <Link to="#" className="logo">Taiwan° Tourguide</Link>
        </Navbar.Brand>
        <Nav as="ul" className="custom_nav">
          <Nav.Item as="li">
            <NavLink to="/" className="d-flex align-items-end">
              <Triangle/>
              <span className="fs-5 lh-sm">台灣景點</span>
            </NavLink>
          </Nav.Item>
          <Nav.Item as="li">
            <NavLink to="/tourism" className="d-flex align-items-end">
              <Square/>
              <span className="fs-5 lh-sm">美食住宿</span>
            </NavLink>
          </Nav.Item>
          <Nav.Item as="li">
            <NavLink to="/bus" className="d-flex align-items-end">
              <Circle/>
              <span className="fs-5 lh-sm">景點交通</span>
            </NavLink>
          </Nav.Item>
        </Nav>
      </Container>
    </Navbar>
  )
}
