/* Get city from parameter */
export const paramCityFunc = (search) => search.replace(/\?city=/, "");

/* Select City */
export const cityNameFunc = (cities, param_city) => {
  const index = cities.findIndex((obj) => obj.City === param_city)
  if (index === -1) {
    return "不分縣市"
  } else {
    return cities[index].CityName
  }
}

/* Select type */
export const typeValueFunc = (type, pathname) => {
  const index = type.findIndex((obj) => obj.path === pathname)
  if (index === -1) {
    return "類別"
  } else {
    return type[index].type
  }
}
