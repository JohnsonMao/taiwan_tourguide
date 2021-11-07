import { useEffect, useState } from 'react';

import {
  apiActivity,
  apiRestaurant,
  apiScenicSpot,
  apiHotel,
} from "../api/index";

export default function useHttp() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [data, setData] = useState({activity:[],restaurant:[],scenicSpot:[],hotel:[]});

  useEffect(() => {  
    setLoading(true);
    setError(false);

    const updateData = async() => {
      try {
        const { data: activity } = await apiActivity({$top:24})
        const { data: scenicSpot } = await apiScenicSpot({$top:60})
        const { data: restaurant } = await apiRestaurant({$top:60})
        const { data: hotel } = await apiHotel({$top:60})
        const newData = {activity, scenicSpot, restaurant, hotel};
        setData(prevData => ({...prevData, ...newData}))
        setLoading(false);
        
        console.log('get',newData)
      } catch (error) {
        setError(true);
      }
    }
    const delay = setTimeout(() => {
      updateData()
    }, 0)
    return () => {
      clearTimeout(delay);
    }
  }, []);
  console.log('finish',data)
  return {loading, error, data}
}
