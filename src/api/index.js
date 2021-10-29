import ajax from './ajax';

/* 基本資料 API url */
const BASIC_URL = 'https://gist.motc.gov.tw/gist_api/V3/Map/Basic';
/* 觀光 API url */
const TOURISM_URL = 'https://ptx.transportdata.tw/MOTC/v2/Tourism';

/* 城市 API */
export const apiCity = () => ajax(BASIC_URL + '/City');
/* 活動 API */
export const apiActivity = (City) => ajax(TOURISM_URL + '/Activity/' + City);
/* 餐飲 API */
export const apiRestaurant = (City) => ajax(TOURISM_URL + '/Restaurant/' + City);
/* 景點 API */
export const apiScenicSpot = (City) => ajax(TOURISM_URL + '/ScenicSpot/' + City);
/* 住宿 API */
export const apiHotel = (City) => ajax(TOURISM_URL + '/Hotel/' + City);

/* 交通 API */
/* 路線資料：RouteUID（路線識別代碼）、TaiwanTripName（台灣好行路線名稱）
 *  url?$select=RouteUID,TaiwanTripName
 */
export const apiBusByCity = () => 
  ajax(TOURISM_URL + '/Bus/Route/TaiwanTrip', {$select: ["RouteUID", "TaiwanTripName"]});
// 預估到站資料
export const apiBusEstimatedTime = (TaiwanTripName) => 
  ajax(TOURISM_URL + '/Bus/EstimatedTimeOfArrival/TaiwanTrip/' + TaiwanTripName);
// 動態定點資料
export const apiBusNearStop = (TaiwanTripName) => 
  ajax(TOURISM_URL + '/Bus/RealTimeNearStop/TaiwanTrip/' + TaiwanTripName);
