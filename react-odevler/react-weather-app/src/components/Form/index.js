/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useState, useEffect } from "react";
import LoadingContext from "../../context/LoadingContext";
import axios from "axios";
import WeatherContext from "../../context/WeatherContext";
import ApiContext from "../../context/ApiContext";
import ThemeContext from "../../context/ThemeContext";
import { Button } from "reactstrap";

import dark from "../../icons/starry-night.svg";
import light from "../../icons/01d.svg";

function Form() {
  const { setWeather, location, setLocation } = useContext(WeatherContext);
  const { loading, setLoading } = useContext(LoadingContext);
  const { API_KEY } = useContext(ApiContext);
  const { theme, setTheme } = useContext(ThemeContext);

  function changeTheme() {
    if (theme) {
      document.body.style.background =
        "linear-gradient(276deg, rgba(75,137,124,1) 0%, rgba(75,109,137,1) 100%)";
      setTheme(false);
    } else {
      document.body.style.background =
        "linear-gradient(276deg, rgba(0,0,0,1) 17%, rgba(0,9,25,1) 85%)";
      setTheme(true);
    }
  }

  const [form, setForm] = useState(" ");

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/geo/1.0/direct?q=${
          form.length !== 0 ? form : " "
        }&limit=1&appid=${API_KEY}`
      )
      .then((city) => {
        axios(
          `https://api.openweathermap.org/data/2.5/onecall?lat=${city.data[0].lat}&lon=${city.data[0].lon}&lang=tr&units=metric&exclude=minutely,hourly,alerts&appid=${API_KEY}`
        )
          .then((e) => {
            setWeather(e.data);
            setLoading(false);
          })
          .catch((err) => null);
        setLocation(city.data);
      })
      .catch((err) => null);
  }, [form]);
  return (
    <div className="container mt-3">
      <div
        className={`row rounded ${
          theme ? "dark-bg" : "light-bg"
        } today p-2 align-items-center`}
      >
        <div className="row">
          <div className="col-12 col-md-6 col-lg-3 mt-1">
            {loading ? (
              "loading..."
            ) : (
              <div>
                <input
                  className="form-control"
                  placeholder="location"
                  name="city"
                  onChange={(e) => setForm(e.target.value)}
                ></input>
              </div>
            )}
          </div>
          <div className="col-lg-8 col-md-5 col-6 align-self-center text-center mt-1">
            {location ? `${location[0].name}, ${location[0].country}` : " "}
          </div>
          <div className="col-lg-1 col-md-1 col-6 com align-self-center text-center mt-1 mr-1">
            <Button
              type="button"
              onClick={changeTheme}
              className="btn btn-default
                bg-transparent "
            >
              {theme ? (
                <img alt="light" src={light} width="25"></img>
              ) : (
                <img alt="dark" src={dark} width="25"></img>
              )}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form;
