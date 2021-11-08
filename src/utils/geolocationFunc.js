import useHttp from './useHttp';

export default function geolocationFunc() {

  const msg = ''

  function success(position) {
    const latitude  = position.coords.latitude;
    const longitude = position.coords.longitude;

  }

  function error() {
    msg = '定位不到你的位置';
  }

  if(!navigator.geolocation) {
    msg = '你的瀏覽器不支援定位服務';
  } else {
    msg = '讀取中...';
    navigator.geolocation.getCurrentPosition(success, error);
  }

}