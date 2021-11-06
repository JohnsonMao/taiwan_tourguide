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
import { homeType } from "../../utils/typeConfig";

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
  const { cities, activity, restaurant, scenicSpot } = props;
  const activityHome = activity.slice(0, 4);
  const restaurantHome = restaurant.slice(0, 10);
  const { search } = useLocation();
  const param_city = paramCityFunc(search);
  const cityName = cityNameFunc(cities, param_city);
  return (
    <>
      <Banner cities={cities} img="Home/static/banner.png" type={homeType} />

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
