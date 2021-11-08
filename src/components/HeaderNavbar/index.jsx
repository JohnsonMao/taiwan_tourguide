import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Container, Navbar, Nav } from 'react-bootstrap';

import { paramCityFunc } from '../../utils/select';
import { ReactComponent as Triangle } from './static/triangle.svg';
import { ReactComponent as Square } from './static/square.svg';
import { ReactComponent as Circle } from './static/circle.svg';
import './static/_headerNavbar.scss';

export default function HeaderNavbar() {
  const [isTop, setIsTop] = useState(true);
  const { search } = useLocation();
  const param_city = paramCityFunc(search);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      const isTop = window.pageYOffset < 100;
      setIsTop(isTop);
    });
  }, [])

  return (
    <Navbar className="p-0" sticky="top" bg="light">
      <Container className={`align-items-end ${isTop ? 'isTop' : null}`}>
        <Navbar.Brand as="h1" className="m-0">
          <Link to="#" className="logo">Taiwan° Tourguide</Link>
        </Navbar.Brand>
        <Nav as="ul" className="custom_nav">
          <Nav.Item as="li">
            <NavLink to={`/?city=${param_city}`} className="d-flex align-items-end">
              <Triangle/>
              <span className="fs-5 lh-sm">台灣景點</span>
            </NavLink>
          </Nav.Item>
          <Nav.Item as="li">
            <NavLink to={`/foodandinn?city=${param_city}`} className="d-flex align-items-end">
              <Square/>
              <span className="fs-5 lh-sm">美食住宿</span>
            </NavLink>
          </Nav.Item>
          <Nav.Item as="li">
            <NavLink to={`/bus?city=${param_city}`} className="d-flex align-items-end">
              <Circle/>
              <span className="fs-5 lh-sm">景點交通</span>
            </NavLink>
          </Nav.Item>
        </Nav>
      </Container>
    </Navbar>
  )
}
