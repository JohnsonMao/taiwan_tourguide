import React from "react";

import Pagination from "../../components/Pagination";
import useHttp from "../../utils/useHttp";

export default function Activity(props) {
  const { city } = props;
  
  const { data, loading } = useHttp();
  return (
    <Pagination data={data.activity} city={city} component="ActivityList" />
  );
}
