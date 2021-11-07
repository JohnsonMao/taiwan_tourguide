import React from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import { Container } from "react-bootstrap";

import Banner from "../../components/Banner";
import CityList from "../../components/CityList";
import ActivityList from "../../components/ActivityList";
import CardList from "../../components/CardList";
import Activity from "../../pages/Activity";
import ScenicSpot from "../../pages/ScenicSpot";
import { paramCityFunc, cityNameFunc } from "../../utils/select";
import { cities } from "../../utils/selectConfig";

function Index(props) {
  const { activity, restaurant, city } = props;
  return (
    <>
      <CityList />
      <ActivityList data={activity} />
      <CardList icon="square" title="餐飲" city={city} data={restaurant} />
    </>
  );
}

export default function Home(props) {
  const { activity, restaurant, scenicSpot } = props;
  const activityHome = activity.slice(0, 4);
  const restaurantHome = restaurant.slice(0, 10);
  const { search } = useLocation();
  const param_city = paramCityFunc(search);
  const cityName = cityNameFunc(cities, param_city);
  return (
    <>
      <Banner
        img={`https://images.unsplash.com/photo-1552993873-0dd1110e025f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1171&q=80`}
        typeStr="homeType"
      />

      <Container>
        <Switch>
          <Route
            path="/activity"
            component={() => <Activity city={cityName} activity={activity} />}
          />
          <Route
            path="/scenicspot"
            component={() => (
              <ScenicSpot city={cityName} scenicSpot={scenicSpot} />
            )}
          />
          <Route
            path="/"
            component={() => (
              <Index
                activity={activityHome}
                city={cityName}
                restaurant={restaurantHome}
              />
            )}
          />
        </Switch>
      </Container>
    </>
  );
}
