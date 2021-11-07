import React from "react";

import Pagination from "../../components/Pagination";
import useHttp from "../../utils/useHttp";

export default function Restaurant(props) {
  const { data, city } = props;
  return (
    <Pagination
      data={data}
      city={city}
      title="熱門美食"
      icon="square"
      component="CardList"
    />
  );
}
