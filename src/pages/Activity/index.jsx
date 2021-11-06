import React from "react";

import Pagination from "../../components/Pagination";

export default function Activity(props) {
  const { activity, city } = props;
  return (
    <Pagination data={activity} city={city} component="ActivityList" />
  );
}
