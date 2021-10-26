import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Container, Navbar, Nav } from 'react-bootstrap';

import './scss/_headerNavbar.scss';
import { ReactComponent as Triangle } from './scss/triangle.svg';
import { ReactComponent as Square } from './scss/square.svg';
import { ReactComponent as Circle } from './scss/circle.svg';

export default function HeaderNavbar() {
  return (
    <Navbar className="p-0" bg="light">
      <Container className="align-items-end">
        <Navbar.Brand as="h1" className="m-0 py-5">
          <Link to="#" className="logo">Taiwan° Tourguide</Link>
        </Navbar.Brand>
        <Nav as="ul" className="custom_nav">
          <Nav.Item as="li">
            <NavLink to="/">
              <Triangle/>
              <span>台灣景點</span>
            </NavLink>
          </Nav.Item>
          <Nav.Item as="li">
            <NavLink to="/tourism">
              <Square/>
              <span>美食住宿</span>
            </NavLink>
          </Nav.Item>
          <Nav.Item as="li">
            <NavLink to="/bus">
              <Circle/>
              <span>景點交通</span>
            </NavLink>
          </Nav.Item>
        </Nav>
      </Container>
    </Navbar>
  )
}
