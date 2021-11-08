import { useEffect, useState, useCallback, useMemo } from "react";

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
  filter = "",
  nearby = ""
) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [data, setData] = useState([]);
  const [skip, setSkip] = useState(0);
  /* 1, 5, 9, 13...每 4 頁新增一次新的 4 頁內容 */
  const UPDATE_SKIP = 4;
  const newSkip = Math.floor((page - 1) / UPDATE_SKIP);
  const newCount = skip === 0 ? count : (count / 8) * UPDATE_SKIP;
  /* 往回按不會重複請求 */
  if (skip < newSkip) setSkip(newSkip);
  /* 基礎參數 */
  let api_param = useMemo(() => {
    return {
      $top: newCount,
      $skip: count * skip,
    };
  }, [newCount, count, skip]);
  /* 使用定位 nearby */
  if (city === "nearby" && nearby) {
    api_param.$spatialFilter = nearby;
    city = "";
  }
  /* 搜尋關鍵字 */
  const filterKeyword = `contains(Name,'${filter}') or contains(Address,'${filter}') or contains(Description,'${filter}')`;
  if (filter.trim()) {
    api_param.$filter = filterKeyword;
  }
  /* 當是首頁的時候，嚴格限制要有圖片 */
  if (count < 20) {
    if (filter.trim()) {
      api_param.$filter += " and Picture/PictureUrl1 ne null";
    } else {
      api_param.$filter = "Picture/PictureUrl1 ne null";
    }
  }

  const updateData = useCallback(async () => {
    try {
      switch (type) {
        case "activity":
          const { data: activity } = await apiActivity(api_param, city);
          setData((prevData) => [...prevData, ...activity]);
          break;
        case "scenicSpot":
          const { data: scenicSpot } = await apiScenicSpot(api_param, city);
          setData((prevData) => [...prevData, ...scenicSpot]);
          break;
        case "restaurant":
          const { data: restaurant } = await apiRestaurant(api_param, city);
          setData((prevData) => [...prevData, ...restaurant]);
          break;
        case "hotel":
          const { data: hotel } = await apiHotel(api_param, city);
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
  }, [api_param, city, type]);

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
