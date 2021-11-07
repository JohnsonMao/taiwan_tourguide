import React from "react";

import Pagination from "../../components/Pagination";
import useHttp from "../../utils/useHttp";

export default function ScenicSpot(props) {
  const { data, city } = props;
  return (
    <Pagination
      data={data}
      city={city}
      title="熱門景點"
      icon="triangle"
      component="CardList"
    />
  );
}
