import { google, news, time, weather } from "./keys";

export const key = {
  google: process.env.GOOGLE || google,
  news: process.env.NEWS || news,
  time: process.env.TIME || time,
  weather: process.env.WEATHER || weather
};

export const url = {
  google: "https://maps.googleapis.com/maps/api/geocode/json",
  news: "https://newsapi.org/v2/everything",
  time: "http://api.timezonedb.com/v2.1/get-time-zone",
  weather: "http://api.openweathermap.org/data/2.5/weather"
};
