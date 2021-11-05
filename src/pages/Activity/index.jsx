import React from 'react';

import ActivityList from "../../components/ActivityList";

export default function Activity(props) {
  const { activity } = props;
  return (
    <ActivityList activity={activity} />
  )
}
