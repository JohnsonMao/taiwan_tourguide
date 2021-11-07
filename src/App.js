import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import HeaderNavbar from "./components/HeaderNavbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import FoodAndInn from "./pages/FoodAndInn";

export default function App() {
  return (
    <BrowserRouter>
      <HeaderNavbar/>
      <Switch>
        <Route path="/foodAndInn" component={FoodAndInn}/>
        <Route path="/" component={Home}/>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}
