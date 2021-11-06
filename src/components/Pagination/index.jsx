import React, { useState } from "react";

import ActivityList from "../../components/ActivityList";
import CardList from "../../components/CardList";

export default function Pagination(props) {
  const { component, data, city } = props;
  return (
    <>
      {component === "ActivityList" ? (
        <ActivityList activity={data} city={city} />
      ) : (
        <CardList data={data} city={city} />
      )}
    </>
  );
}
