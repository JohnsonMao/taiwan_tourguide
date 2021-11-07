import { useEffect, useState } from "react";

import {
  apiActivity,
  apiRestaurant,
  apiScenicSpot,
  apiHotel,
} from "../api/index";

export default function useHttp(
  type = "",
  city = "",
  count = 60,
  page = 1,
  filter = ""
) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [data, setData] = useState([]);
  const skip = page - 1;

  useEffect(() => {
    setData([]);
    console.log('news')
  }, [type])

  useEffect(() => {
    setLoading(true);
    setError(false);

    const updateData = async () => {
      try {
        switch (type) {
          case "activity":
            const { data: activity } = await apiActivity(
              { $top: count, $skip: count * skip },
              city
            );
            setData(prevData => ([...prevData, ...activity]));
            break;
          case "scenicSpot":
            const { data: scenicSpot } = await apiScenicSpot(
              { $top: count, $skip: count * skip },
              city
            );
            setData(prevData => ([...prevData, ...scenicSpot]));
            break;
          case "restaurant":
            const { data: restaurant } = await apiRestaurant(
              { $top: count, $skip: count * skip },
              city
            );
            setData(prevData => ([...prevData, ...restaurant]));
            break;
          case "hotel":
            const { data: hotel } = await apiHotel(
              { $top: count, $skip: count * skip },
              city
            );
            setData(prevData => ([...prevData, ...hotel]));
            break;
          case "bus":
        }
        setLoading(false);
      } catch (error) {
        setError(true);
      }
    };
    const delay = setTimeout(() => {
      updateData();
    }, 0);
    return () => {
      clearTimeout(delay);
    };
    console.log('update')
  }, [city, page, filter]);
  console.log('run')
  return { loading, error, data };
}
