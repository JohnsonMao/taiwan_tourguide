import env from 'react-dotenv';

export default function getAuthorizationHeader() {
    let AppID = env.DB_HOST;
    let AppKey = env.DB_HOST;

    let GMTString = new Date().toGMTString();
    
    let ShaObj = new jsSHA('SHA-1', 'TEXT');
    ShaObj.setHMACKey(AppKey, 'TEXT');
    ShaObj.update('x-date: ' + GMTString);
    let HMAC = ShaObj.getHMAC('B64');
    let Authorization = 'hmac username=\"' + AppID + '\", algorithm=\"hmac-sha1\", headers=\"x-date\", signature=\"' + HMAC + '\"';
    return { 'Authorization': Authorization, 'X-Date': GMTString }; 
}