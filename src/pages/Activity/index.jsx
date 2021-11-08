import React from "react";

import Pagination from "../../components/Pagination";

export default function Activity({ city, param_city }) {
  const childProps = {
    dataType: 'activity',
    component: "ActivityList",
    city: city,
    param_city: param_city
  }
  
  return (
    <Pagination {...childProps}/>
  );
}
