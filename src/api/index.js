import ajax from "./ajax";

/* 基本資料 API url */
const BASIC_URL = "https://gist.motc.gov.tw/gist_api/V3/Map/Basic";
/* 觀光 API url */
const TOURISM_URL = "https://ptx.transportdata.tw/MOTC/v2/Tourism";
/* 城市 API */
export const apiCity = () => ajax(BASIC_URL + "/City");

/* 預設篩選活動資料 */
const initActivity = {
  $select: [
    "Name",
    "Description",
    "Address",
    "Location",
    "Phone",
    "Picture",
    "Charge",
    "StartTime",
    "EndTime",
  ],
  $filter: [
    "Picture/PictureUrl1 ne null"
  ]
};
/* 活動 API */
export const apiActivity = (City = "", data = initActivity) =>
  ajax(TOURISM_URL + "/Activity/" + City, data);
/* 預設篩選餐廳資料 */
const initRestaurant = {
  $select: [
    "Name",
    "Description",
    "Address",
    "Phone",
    "Picture",
    "OpenTime",
    "WebsiteUrl",
    "Class"
  ]
};
/* 餐飲 API */
export const apiRestaurant = (City = "", data = initRestaurant) =>
  ajax(TOURISM_URL + "/Restaurant/" + City, data);
/* 景點 API 
  Name,Description,Phone,Address,OpenTime,Picture,TicketInfo 
  $filter=contains(Name%2C'過濾')*/
export const apiScenicSpot = (City = "") =>
  ajax(TOURISM_URL + "/ScenicSpot/" + City);
/* 住宿 API */
export const apiHotel = (City = "") => ajax(TOURISM_URL + "/Hotel/" + City);

/* 交通 API */
/* 路線資料：RouteUID（路線識別代碼）、TaiwanTripName（台灣好行路線名稱）
 *  url?$select=RouteUID,TaiwanTripName
 */
export const apiBusByCity = () =>
  ajax(TOURISM_URL + "/Bus/Route/TaiwanTrip", {
    $select: ["RouteUID", "TaiwanTripName"],
  });
// 預估到站資料
export const apiBusEstimatedTime = (TaiwanTripName) =>
  ajax(
    TOURISM_URL + "/Bus/EstimatedTimeOfArrival/TaiwanTrip/" + TaiwanTripName
  );
// 動態定點資料
export const apiBusNearStop = (TaiwanTripName) =>
  ajax(TOURISM_URL + "/Bus/RealTimeNearStop/TaiwanTrip/" + TaiwanTripName);
