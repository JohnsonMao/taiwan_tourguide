import React from 'react'

import CardList from "../../components/CardList";

export default function ScenicSpot(props) {
  const { scenicSpot, city } = props;
  return (
    <CardList icon="triangle" title="風景" city={city} data={scenicSpot} />
  )
}
