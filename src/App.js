import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import HeaderNavbar from "./components/HeaderNavbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import {
  apiCity,
  apiActivity,
  apiRestaurant,
  apiScenicSpot,
} from "./api/index";

export default function App() {
  const [cities, setCities] = useState([]);
  const [activity, setActivity] = useState([]);
  const [scenicSpot, setScenicSpot] = useState([]);
  const [restaurant, setRestaurant] = useState([]);
  
  useEffect(() => {
    apiCity().then((res) => {
      setCities(res.data);
    });
    apiActivity().then((res) => {
      setActivity(res.data);
    });
    apiScenicSpot().then((res) => {
      setScenicSpot(res.data);
    });
    apiRestaurant().then((res) => {
      setRestaurant(res.data);
    });
    console.log("Get Data")
  }, []);
  return (
    <BrowserRouter>
      <HeaderNavbar />
      <Switch>
        <Route
          path="/"
          component={() => (
            <Home
              cities={cities}
              activity={activity}
              restaurant={restaurant}
              scenicSpot={scenicSpot}
            />
          )}
        />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}
