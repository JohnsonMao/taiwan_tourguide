import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import HeaderNavbar from './components/HeaderNavbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import { apiCity } from './api/index';

export default function App() {

  const [ city, setCity ] = useState("all");
  const [ cities, setCities ] = useState([]);

  useEffect(() => {
    apiCity().then( res => {
      setCities(res.data)
    });
  }, [])

  return (
    <BrowserRouter>
      <HeaderNavbar/>
      <Switch>
        <Route path="/" component={() => <Home cities={cities}/>}/>
      </Switch>
      <Footer/>
    </BrowserRouter>
  )
}