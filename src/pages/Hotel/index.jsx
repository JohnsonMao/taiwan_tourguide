import React from "react";

import Pagination from "../../components/Pagination";
import useHttp from "../../utils/useHttp";

export default function Hotel(props) {
  const { data, city } = props;
  return (
    <Pagination
      data={data}
      city={city}
      title="推薦住宿"
      icon="square"
      component="CardList"
    />
  );
}
