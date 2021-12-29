import React, { useState } from "react";
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

function Index({ city, param_city, nearby, keyword }) {
  const api_param =
    param_city === "nearby"
      ? {
          activity: ["activity", param_city, 4, 1, keyword, nearby],
          restaurant: ["restaurant", param_city, 10, 1, keyword, nearby],
        }
      : {
          activity: ["activity", param_city, 4, 1, keyword],
          restaurant: ["restaurant", param_city, 10, 1, keyword],
        };
  const { data: activity, loading: activityLoading } = useHttp(
    ...api_param.activity
  );
  const { data: restaurant, loading: restaurantLoading } = useHttp(
    ...api_param.restaurant
  );
  return (
    <>
      <CityList />
      <ActivityList
        city={city}
        data={activity}
        nearby={nearby}
        keyword={keyword}
        loading={activityLoading}
        />
      <CardList
        icon="square"
        title="熱門美食"
        city={city}
        data={restaurant}
        nearby={nearby}
        keyword={keyword}
        loading={restaurantLoading}
      />
    </>
  );
}

export default function Home() {
  const { search } = useLocation();
  const param_city = paramCityFunc(search);
  const cityName = cityNameFunc(cities, param_city);
  const [nearby, setNearby] = useState("");
  const [keyword, setKeyword] = useState("");

  const nearbyFunc = (e) => setNearby(e);
  const keywordFunc = (e) => setKeyword(e);

  const bannerProps = {
    img: "https://images.unsplash.com/photo-1576430495691-84b2a311c70a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
    typeStr: "homeType",
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
            path="/home/activity"
            component={() => <Activity {...routeProps} />}
          />
          <Route
            path="/home/scenicspot"
            component={() => <ScenicSpot {...routeProps} />}
          />
          <Route path="/home" component={() => <Index {...routeProps} />} />
        </Switch>
      </Container>
    </>
  );
}
