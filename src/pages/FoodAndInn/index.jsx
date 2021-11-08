import React from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import { Container } from "react-bootstrap";

import Banner from "../../components/Banner";
import CardList from "../../components/CardList";
import Restaurant from "../Restaurant";
import Hotel from "../Hotel";
import { paramCityFunc, cityNameFunc } from "../../utils/select";
import { cities } from "../../utils/selectConfig";
import useHttp from "../../utils/useHttp";

function Index({city, param_city}) {
  const { data: hotel, loading: hotelLoading } = useHttp(
    "hotel",
    param_city,
    10
  );
  const { data: restaurant, loading: restaurantLoading } = useHttp(
    "restaurant",
    param_city,
    10
  );
  return (
    <>
      <CardList icon="square" title="熱門美食" city={city} data={restaurant} />
      <CardList icon="square" title="推薦住宿" city={city} data={hotel} />
    </>
  );
}

export default function FoodAndInn() {
  const { search } = useLocation();
  const param_city = paramCityFunc(search);
  const cityName = cityNameFunc(cities, param_city);
  const bannerProps = {
    img: "https://images.unsplash.com/photo-1552993873-0dd1110e025f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1171&q=80",
    typeStr: "foodAndInnType",
  };
  const routeProps = {
    city: cityName,
    param_city: param_city,
  };
  return (
    <>
      <Banner {...bannerProps} />

      <Container>
        <Switch>
          <Route
            path="/foodandinn/hotel"
            component={() => <Hotel {...routeProps} />}
          />
          <Route
            path="/foodandinn/restaurant"
            component={() => <Restaurant {...routeProps} />}
          />
          <Route
            path="/foodandinn"
            component={() => <Index {...routeProps} />}
          />
        </Switch>
      </Container>
    </>
  );
}
