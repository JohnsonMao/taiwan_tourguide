import React, { useState } from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import { Container } from "react-bootstrap";

import Banner from "../../components/Banner";
import CardList from "../../components/CardList";
import Restaurant from "../Restaurant";
import Hotel from "../Hotel";
import { paramCityFunc, cityNameFunc } from "../../utils/select";
import { cities } from "../../utils/selectConfig";
import useHttp from "../../utils/useHttp";

function Index({ city, param_city, nearby, keyword }) {
  const api_param =
    param_city === "nearby"
      ? {
          hotel: ["hotel", param_city, 10, 1, keyword, nearby],
          restaurant: ["restaurant", param_city, 10, 1, keyword, nearby],
        }
      : {
          hotel: ["hotel", param_city, 10, 1, keyword],
          restaurant: ["restaurant", param_city, 1, 10, keyword],
        };
  const { data: hotel, loading: hotelLoading } = useHttp(...api_param.hotel);
  const { data: restaurant, loading: restaurantLoading } = useHttp(
    ...api_param.restaurant
  );
  return (
    <>
      <CardList
        icon="square"
        title="熱門美食"
        city={city}
        data={restaurant}
        nearby={nearby}
        keyword={keyword}
      />
      <CardList
        icon="square"
        title="推薦住宿"
        city={city}
        data={hotel}
        nearby={nearby}
        keyword={keyword}
      />
    </>
  );
}

export default function FoodAndInn() {
  const { search } = useLocation();
  const param_city = paramCityFunc(search);
  const cityName = cityNameFunc(cities, param_city);
  const [nearby, setNearby] = useState("");
  const [keyword, setKeyword] = useState("");

  const nearbyFunc = (e) => setNearby(e);
  const keywordFunc = (e) => setKeyword(e);

  const bannerProps = {
    img: "https://images.unsplash.com/photo-1552993873-0dd1110e025f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1171&q=80",
    typeStr: "foodAndInnType",
    setNearby: nearbyFunc,
    setKeyword: keywordFunc,
  };
  const routeProps = {
    city: cityName,
    param_city: param_city,
    nearby: nearby,
    keyword: keyword,
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
