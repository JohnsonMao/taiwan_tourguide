import React from "react";

import Pagination from "../../components/Pagination";

export default function Hotel({ city, param_city }) {
  const childProps = {
    dataType: 'hotel',
    component: "CardList",
    city: city,
    param_city: param_city,
    title: '推薦住宿',
    icon: 'square'
  }
  return (
    <Pagination {...childProps}/>
  );
}
