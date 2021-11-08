import React from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import { Container } from "react-bootstrap";

import Banner from "../../components/Banner";
import CityList from "../../components/CityList";
import ActivityList from "../../components/ActivityList";
import CardList from "../../components/CardList";
import Activity from "../Activity";
import ScenicSpot from "../ScenicSpot";
import { paramCityFunc, cityNameFunc } from "../../utils/select";
import { cities } from "../../utils/selectConfig";
import useHttp from "../../utils/useHttp";

function Index({city, param_city}) {
  const { data: activity, loading: activityLoading } = useHttp(
    "activity",
    param_city,
    4
  );
  const { data: restaurant, loading: restaurantLoading } = useHttp(
    "restaurant",
    param_city,
    10
  );

  return (
    <>
      <CityList />
      <ActivityList city={city} data={activity} />
      <CardList icon="square" title="熱門美食" city={city} data={restaurant} />
    </>
  );
}

export default function Home() {
  const { search } = useLocation();
  const param_city = paramCityFunc(search);
  const cityName = cityNameFunc(cities, param_city);

  const bannerProps = {
    img: "https://images.unsplash.com/photo-1576430495691-84b2a311c70a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
    typeStr: "homeType",
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
            path="/activity"
            component={() => <Activity {...routeProps} />}
          />
          <Route
            path="/scenicspot"
            component={() => <ScenicSpot {...routeProps} />}
          />
          <Route path="/" component={() => <Index {...routeProps} />} />
        </Switch>
      </Container>
    </>
  );
}
