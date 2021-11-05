import React from 'react'

import CardList from "../../components/CardList";

export default function ScenicSpot(props) {
  const { scenicSpot } = props;
  return (
    <CardList icon="triangle" title="熱門風景" data={scenicSpot} />
  )
}
