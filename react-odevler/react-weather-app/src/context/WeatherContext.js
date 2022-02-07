/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useState, useContext, useEffect } from "react";
import LoadingContext from "./LoadingContext";
import axios from "axios";
import ApiContext from "./ApiContext";

const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const { loading, setLoading } = useContext(LoadingContext);
  const { API_KEY } = useContext(ApiContext);
  const [weather, setWeather] = useState();
  const [location, setLocation] = useState();
  useEffect(() => {
    if (loading) {
      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            async function getPosition() {
              const lat = position.coords.latitude;
              const lon = position.coords.longitude;
              let perm = await axios(
                `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&exclude=minutely,hourly,alerts&appid=${API_KEY}`
              )
                .then((res) => res.data)
                .then(
                  axios
                    .get(
                      `http://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=1&appid=${API_KEY}`
                    )
                    .then((e) => setLocation(e.data))
                );
              setWeather(perm);
              return perm;
            }
            getPosition();
          },
          () => {
            axios(
              `
              https://api.openweathermap.org/data/2.5/onecall?lat=39.9207886&lon=32.8540482&units=metric&exclude=minutely,hourly,alerts&appid=${API_KEY}`
            )
              .then((res) => setWeather(res.data))
              .then(
                axios
                  .get(
                    `http://api.openweathermap.org/geo/1.0/reverse?lat=39.9207886&lon=32.8540482&limit=1&appid=${API_KEY}`
                  )
                  .then((e) => setLocation(e.data))
              );
          }
        );
      } else {
        axios(
          `https://api.openweathermap.org/data/2.5/onecall?lat=39.9207886&lon=32.8540482&units=metric&exclude=minutely,hourly,alerts&appid=${API_KEY}`
        )
          .then((res) => setWeather(res.data))
          .then(
            axios
              .get(
                `http://api.openweathermap.org/geo/1.0/reverse?lat=39.9207886&lon=32.8540482&limit=1&appid=${API_KEY}`
              )
              .then((e) => setLocation(e.data))
          );
      }
      setLoading(false);
    }
  }, []);
  const values = {
    weather,
    setWeather,
    location,
    setLocation,
  };
  return (
    <WeatherContext.Provider value={values}>{children}</WeatherContext.Provider>
  );
};

export default WeatherContext;
