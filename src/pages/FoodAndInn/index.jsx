import React from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import { Container } from "react-bootstrap";

import Banner from "../../components/Banner";
import CardList from "../../components/CardList";
import Restaurant from "../Restaurant";
import Hotel from "../Hotel";
import { paramCityFunc, cityNameFunc } from "../../utils/select";
import { cities } from "../../utils/selectConfig";

function Index(props) {
  const { hotel, restaurant, city } = props;
  return (
    <>
      <CardList icon="square" title="熱門美食" city={city} data={restaurant} />
      <CardList icon="square" title="推薦住宿" city={city} data={hotel} />
    </>
  );
}

export default function Home(props) {
  const { hotel, restaurant } = props;
  const hotelFoodAndInn = hotel.slice(0, 10);
  const restaurantFoodAndInn = restaurant.slice(0, 10);
  const { search } = useLocation();
  const param_city = paramCityFunc(search);
  const cityName = cityNameFunc(cities, param_city);
  return (
    <>
      <Banner
        img={`https://images.unsplash.com/photo-1552993873-0dd1110e025f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1171&q=80`}
        typeStr="foodAndInnType"
      />

      <Container>
        <Switch>
          <Route
            path="/hotel"
            component={() => <Hotel city={cityName} data={hotel} />}
          />
          <Route
            path="/restaurant"
            component={() => (
              <Restaurant city={cityName} data={restaurant} />
            )}
          />
          <Route
            path="/foodandinn"
            component={() => (
              <Index
                city={cityName}
                restaurant={restaurantFoodAndInn}
                hotel={hotelFoodAndInn}
              />
            )}
          />
        </Switch>
      </Container>
    </>
  );
}
