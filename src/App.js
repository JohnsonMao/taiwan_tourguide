import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import HeaderNavbar from "./components/HeaderNavbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import FoodAndInn from "./pages/FoodAndInn";
import {
  apiActivity,
  apiRestaurant,
  apiScenicSpot,
  apiHotel,
} from "./api/index";

export default function App() {
  const [activity, setActivity] = useState([]);
  const [scenicSpot, setScenicSpot] = useState([]);
  const [restaurant, setRestaurant] = useState([]);
  const [hotel, setHotel] = useState([]);
  useEffect(() => {
    apiActivity({$top:24}).then((res) => {
      setActivity(res.data);
    });
    apiScenicSpot({$top:60}).then((res) => {
      setScenicSpot(res.data);
    });
    apiRestaurant({$top:60}).then((res) => {
      setRestaurant(res.data);
    });
    apiHotel({$top:60}).then((res) => {
      setHotel(res.data);
    });
    console.log("Get Data")
  }, []);
  return (
    <BrowserRouter>
      <HeaderNavbar/>
      <Switch>
        <Route
          path="/foodAndInn"
          component={() => (
            <FoodAndInn
              restaurant={restaurant}
              hotel={hotel}
            />
          )}
        />
        <Route
          path="/"
          component={() => (
            <Home
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
