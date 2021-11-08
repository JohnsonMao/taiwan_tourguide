import React from "react";

import Pagination from "../../components/Pagination";

export default function ScenicSpot({ city, param_city }) {
  const childProps = {
    dataType: 'scenicSpot',
    component: "CardList",
    city: city,
    param_city: param_city,
    title: '熱門景點',
    icon: 'triangle'
  }
  return (
    <Pagination {...childProps}/>
  );
}
