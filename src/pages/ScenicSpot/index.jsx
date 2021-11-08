import React from "react";

import Pagination from "../../components/Pagination";

export default function ScenicSpot({ city, param_city, nearby, keyword }) {
  const childProps = {
    dataType: 'scenicSpot',
    component: "CardList",
    city: city,
    param_city: param_city,
    title: '熱門景點',
    icon: 'triangle',
    nearby: nearby,
    keyword: keyword
  }
  return (
    <Pagination {...childProps}/>
  );
}
