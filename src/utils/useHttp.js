import { useEffect, useState, useCallback } from "react";

import {
  apiActivity,
  apiRestaurant,
  apiScenicSpot,
  apiHotel,
} from "../api/index";

export default function useHttp(
  type = "",
  city = "",
  count = 100,
  page = 1,
  filter = ""
) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [data, setData] = useState([]);
  const [skip, setSkip] = useState(0);
  /* 1, 5, 9, 13...每 4 頁新增一次新的 4 頁內容 */
  const UPDATE_SKIP = 4;
  const newSkip = Math.floor((page - 1) / UPDATE_SKIP);
  const newCount = skip === 0 ? count : (count / 8) * UPDATE_SKIP;

  if (skip < newSkip) setSkip(newSkip);

  const updateData = useCallback(async () => {
    try {
      switch (type) {
        case "activity":
          const { data: activity } = await apiActivity(
            { $top: newCount, $skip: count * skip },
            city
          );
          setData((prevData) => [...prevData, ...activity]);
          break;
        case "scenicSpot":
          const { data: scenicSpot } = await apiScenicSpot(
            { $top: newCount, $skip: count * skip },
            city
          );
          setData((prevData) => [...prevData, ...scenicSpot]);
          break;
        case "restaurant":
          const { data: restaurant } = await apiRestaurant(
            { $top: newCount, $skip: count * skip },
            city
          );
          setData((prevData) => [...prevData, ...restaurant]);
          break;
        case "hotel":
          const { data: hotel } = await apiHotel(
            { $top: newCount, $skip: count * skip },
            city
          );
          setData((prevData) => [...prevData, ...hotel]);
          break;
        case "bus":
          break;
        default:
          break;
      }
      setLoading(false);
    } catch (error) {
      setError(true);
    }
  }, [city, count, newCount, skip, type]);

  useEffect(() => {
    setData([]);
    console.log("clear");
  }, [type]);

  useEffect(() => {
    setLoading(true);
    setError(false);

    const delay = setTimeout(() => {
      updateData();
      console.log("update");
    }, 0);
    return () => {
      clearTimeout(delay);
    };
  }, [updateData]);
  console.log("run");
  return { loading, error, data };
}
