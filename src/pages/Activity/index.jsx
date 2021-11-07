import React from "react";

import Pagination from "../../components/Pagination";
import useHttp from "../../utils/useHttp";

export default function Activity(props) {
  const { city, param_city } = props;
  console.log(param_city)
  
  const { data, loading } = useHttp('activity', param_city, 60);
  return (
    <Pagination data={data} city={city} component="ActivityList" />
  );
}
