import React from "react";

import Pagination from "../../components/Pagination";

export default function Activity(props) {
  const { data, city } = props;
  return (
    <Pagination data={data} city={city} component="ActivityList" />
  );
}
