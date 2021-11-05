import React from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import { Container } from "react-bootstrap";

import Banner from "../../components/Banner";
import CityList from "../../components/CityList";
import ActivityList from "../../components/ActivityList";
import CardList from "../../components/CardList";
import Activity from "../../pages/Activity";
import ScenicSpot from "../../pages/ScenicSpot";

function Index(props) {
  const { activity, restaurant } = props;
  return (
    <>
      <CityList />
      <ActivityList activity={activity} />
      <CardList icon="square" title="熱門餐飲" data={restaurant} />
    </>
  );
}

export default function Home(props) {
  const { cities, activity, restaurant, scenicSpot } = props;
  const activityHome = activity.slice(0, 4);
  const restaurantHome = restaurant.slice(0, 10);
  const location = useLocation();

  const type = [
    {
      type: "景點",
      path: "/scenicspot",
    },
    {
      type: "活動",
      path: "/activity",
    },
  ];

  return (
    <>
      <Banner
        cities={cities}
        location={location}
        img="Home/static/banner.png"
        type={type}
      />

      <Container>
        <Switch>
          <Route
            path="/activity"
            component={() => (
              <Activity activity={activity} />
            )}
          />
          <Route
            path="/scenicspot"
            component={() => (
              <ScenicSpot scenicSpot={scenicSpot} />
            )}
          />
          <Route
            path="/"
            component={() => (
              <Index activity={activityHome} restaurant={restaurantHome} />
            )}
          />
        </Switch>
      </Container>
    </>
  );
}
