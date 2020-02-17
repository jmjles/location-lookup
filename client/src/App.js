import React, { useState, useEffect } from "react";
import { Loader } from "google-maps";
import Locate from "./components/Location";
import axios from "axios";
import { url } from "./misc/config";
export default function App() {
  const [time, setTime] = useState("");
  const [weather, setWeather] = useState("");
  const [news, setNews] = useState([]);
  const [area, setArea] = useState("");
  const [map, setMap] = useState("");
  const [key, setKey] = useState({});

  useEffect(() => {
    const getKeys = async () => {
      const res = await axios("/api", {
        headers: { authorization: "YOU ARE AUTHORIZED" }
      });
      setKey(res.data);
    };
    getKeys();
  }, [key.google]);

  useEffect(() => {
    const loadmap = async () => {
      const loader = new Loader(key.google);
      const google = await loader.load();

      let options = {
        center: { lat: 40, lng: -100 },
        scrollwheel: false,
        zoom: 5
      };
      setMap(new google.maps.Map(document.getElementById("map"), options));
    };
    if (key.google) {
      loadmap();
    }
  }, [key.google]);
  const locate = async () => {
    //* Google Api
    const res = await axios(url.google, {
      params: {
        address: area,
        key: key.google
      }
    });
    const data = res.data;
    const name = data.results[0].address_components[0].long_name;
    const arealat = data.results[0].geometry.location.lat;
    const arealing = data.results[0].geometry.location.lng;

    let zoom;
    data.results[0].types[0] === "locality" ? (zoom = 10) : (zoom = 5);
    map.setCenter({ lat: arealat, lng: arealing });
    map.setZoom(zoom);
    getNews(name);
    getTime(arealat, arealing);
    getWeather(name);
  };
  const getNews = async name => {
    try {
      //* News Api
      const res = await axios(url.news, {
        params: {
          q: name,
          apiKey: key.news,
          pageSize: 6
        }
      });
      let articles = res.data.articles;
      if (articles.length < 0) {
        alert("No News Found");
      } else {
        articles.map(article => {
          const date = article.publishedAt.split("T");
          return setNews(prev => [
            {
              title: article.title,
              url: article.url,
              snippet: article.description,
              img: article.urlToImage,
              source: article.source.name,
              published: date[0]
            },
            ...prev
          ]);
        });
      }
    } catch (er) {
      console.log(er);
    }
  };

  const getTime = async (arealat, arealing) => {
    try {
      //* Time Api
      const res = await axios(url.time, {
        params: {
          format: "json",
          by: "position",
          lat: arealat,
          lng: arealing,
          key: key.time
        }
      });
      const data = res.data;
      const thetime = data.formatted.split(" ");
      setTime(thetime[1]);
    } catch (er) {
      console.log(er);
    }
  };

  const getWeather = async name => {
    try {
      //* Weather Api
      const res = await axios(url.weather, {
        params: {
          q: name,
          units: "imperial",
          appid: key.weather
        }
      });
      const data = res.data;
      const place = data.name;

      let weather = data.weather[0].main;
      let temp = Math.ceil(data.main.temp);
      let wind = data.wind.speed;
      setWeather({ name: place, weather, temp, wind });
    } catch (er) {
      console.log(er);
    }
  };
  return (
    <Locate
      locate={locate}
      area={[area, setArea]}
      time={time}
      weather={weather}
      news={news}
    />
  );
}
