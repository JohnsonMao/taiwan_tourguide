import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import HeaderNavbar from "./components/HeaderNavbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import { apiCity } from "./api/index";

export default function App() {
  const [select, setSelect] = useState({
    city: "",
    cityname: "",
    cityShow: false,
    typeShow: false,
  });
  const [cities, setCities] = useState([]);

  useEffect(() => {
    apiCity().then((res) => {
      setCities(res.data);
    });
  }, []);

  return (
    <BrowserRouter>
      <HeaderNavbar />
      <Switch>
        <Route
          path="/"
          component={() => (
            <Home cities={cities} setSelect={(e) => setSelect(e)} select={select} />
          )}
        />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}
