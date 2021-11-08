import React from "react";

import Pagination from "../../components/Pagination";

export default function Hotel({ city, param_city, nearby, keyword }) {
  const childProps = {
    dataType: 'hotel',
    component: "CardList",
    city: city,
    param_city: param_city,
    title: '推薦住宿',
    icon: 'square',
    nearby: nearby,
    keyword: keyword
  }
  return (
    <Pagination {...childProps}/>
  );
}
