import React from "react";

import Pagination from "../../components/Pagination";

export default function Restaurant({ city, param_city, nearby, keyword }) {
  const childProps = {
    dataType: 'restaurant',
    component: "CardList",
    city: city,
    param_city: param_city,
    title: '熱門美食',
    icon: 'square',
    nearby: nearby,
    keyword: keyword
  }
  return (
    <Pagination {...childProps}/>
  );
}
