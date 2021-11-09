import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import HeaderNavbar from "./components/HeaderNavbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import FoodAndInn from "./pages/FoodAndInn";
import Bus from "./pages/Bus";

export default function App() {
  return (
    <BrowserRouter>
      <HeaderNavbar/>
      <Switch>
        <Route path="/home" component={Home}/>
        <Route path="/foodAndInn" component={FoodAndInn}/>
        <Route path="/bus" component={Bus}/>
        <Redirect to="/home" />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}
