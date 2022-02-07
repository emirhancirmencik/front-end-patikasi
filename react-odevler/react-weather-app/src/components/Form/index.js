/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useState, useEffect } from "react";
import LoadingContext from "../../context/LoadingContext";
import axios from "axios";
import WeatherContext from "../../context/WeatherContext";
import ApiContext from "../../context/ApiContext";

function Form() {
  const { weather, setWeather, location, setLocation } =
    useContext(WeatherContext);
  const { loading, setLoading } = useContext(LoadingContext);
  const { API_KEY } = useContext(ApiContext);

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
      <div className="row rounded mycard today p-2 align-items-center">
        <div className="row">
          <div className="col-3">
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
          <div className="col-6 align-self-center">
            {location ? `${location[0].name}, ${location[0].country}` : " "}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form;
