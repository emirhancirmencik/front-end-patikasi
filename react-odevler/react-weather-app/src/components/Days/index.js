import { useContext } from "react";
import WeatherContext from "../../context/WeatherContext";

import csDay from "../../icons/01d.svg";
import csNight from "../../icons/01n.svg";
import clDay from "../../icons/02d.svg";
import clNight from "../../icons/02n.svg";
import raDay from "../../icons/10d.svg";
import raNight from "../../icons/10n.svg";
import snDay from "../../icons/13d.svg";
import snNight from "../../icons/13n.svg";
import tsDay from "../../icons/11d.svg";
import tsNight from "../../icons/11n.svg";
import miDay from "../../icons/50d.svg";
import miNight from "../../icons/50n.svg";
import humidity from "../../icons/humidity.svg";
import sunrise from "../../icons/sunrise.svg";
import sunset from "../../icons/sunset.svg";
import celcius from "../../icons/celsius.svg";
import warmer from "../../icons/thermometer-warmer.svg";
import colder from "../../icons/thermometer-colder.svg";
import compass from "../../icons/compass.svg";
import windsock from "../../icons/windsock.svg";

import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  CardSubtitle,
  CardImg,
} from "reactstrap";

function Days() {
  const { weather } = useContext(WeatherContext);

  function calcTime(t) {
    const weekDay = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    var date = new Date(t * 1000).toLocaleDateString("tr-TR");
    var time = new Date(t * 1000).toLocaleTimeString("tr-TR");
    var _day = new Date(t * 1000).getUTCDay();

    return { date, time, day: weekDay[_day] };
  }

  function setIcon(id, ic) {
    if (id >= 200 && id <= 232) {
      return ic[2] === "d" ? tsDay : tsNight;
    } else if (id >= 300 && id <= 321) {
      return ic[2] === "d" ? raDay : raNight;
    } else if (id >= 500 && id <= 531) {
      return ic[2] === "d" ? raDay : raNight;
    } else if ((id >= 600 && id <= 622) || id === 511) {
      return ic[2] === "d" ? snDay : snNight;
    } else if (id >= 700 && id <= 781) {
      return ic[2] === "d" ? miDay : miNight;
    } else if (id === 800) {
      return ic[2] === "d" ? csDay : csNight;
    } else if (id >= 801 && id <= 804) {
      return ic[2] === "d" ? clDay : clNight;
    }
  }

  return (
    <div className="container">
      <div className="row today mycard">
        {weather ? (
          <div className="row">
            <div className="col-2 mycard ">
              <Card className="mycard border-0">
                <CardImg
                  alt="Card image cap"
                  src={setIcon(
                    weather.current.weather[0].id,
                    weather.current.weather[0].icon
                  )}
                  top
                  width="100%"
                />
                <CardBody>
                  <CardTitle className="text-center" tag="h5">
                    <div>{weather.current.weather[0].main}</div>
                  </CardTitle>
                  <CardSubtitle
                    className="mb-2 text-muted"
                    tag="h6"
                  ></CardSubtitle>
                  <CardText className="text-center">
                    <span className="heat">
                      {Math.floor(weather.current.temp)}
                      <sup className="deg">°C</sup>
                    </span>
                  </CardText>
                </CardBody>
              </Card>
            </div>
            <div className="col-10">
              <div className="col-12">
                <Card className="mycard border-0">
                  <CardBody>
                    <CardTitle tag="h2">Current Weather</CardTitle>
                    <CardSubtitle>
                      {calcTime(weather.current.dt).date},{" "}
                      {calcTime(weather.current.dt).day}{" "}
                      {calcTime(weather.current.dt).time.substring(0, 5)}
                    </CardSubtitle>
                  </CardBody>
                </Card>
              </div>
              <div className="row p-3">
                <div className="col-3">
                  <div className="row">
                    <div className="col-6">
                      <img src={sunrise} alt="sunrise"></img>
                    </div>
                    <div className="col-6 align-self-center">
                      Sunrise:<br></br>
                      {calcTime(weather.current.sunrise).time.substring(0, 5)}
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-6">
                      <img src={sunset} alt="sunset"></img>
                    </div>
                    <div className="col-6 align-self-center">
                      Sunrise:<br></br>
                      {calcTime(weather.current.sunset).time.substring(0, 5)}
                    </div>
                  </div>
                </div>
                <div className="col-3">
                  <div className="row">
                    <div className="col-6">
                      <img src={humidity} alt="humidity"></img>
                    </div>
                    <div className="col-6 align-self-center">
                      Humidity:<br></br>
                      {weather.current.humidity + "%"}
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-6">
                      <img src={celcius} alt="celcius"></img>
                    </div>
                    <div className="col-6 align-self-center">
                      Feels Like:<br></br>
                      {Math.round(weather.current.feels_like) + "°"}
                    </div>
                  </div>
                </div>
                <div className="col-3">
                  <div className="row">
                    <div className="col-6">
                      <img src={warmer} alt="thermometer"></img>
                    </div>
                    <div className="col-6 align-self-center">
                      Max Temp:<br></br>
                      {Math.ceil(weather.daily[0].temp.max)}
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-6">
                      <img src={colder} alt="thermometer"></img>
                    </div>
                    <div className="col-6 align-self-center">
                      Min Temp:<br></br>
                      {Math.floor(weather.daily[0].temp.min)}
                    </div>
                  </div>
                </div>
                <div className="col-3">
                  <div className="row">
                    <div className="col-6">
                      <img src={windsock} alt="windsock"></img>
                    </div>
                    <div className="col-6 align-self-center">
                      Wind Speed:<br></br>
                      {Math.round(weather.current.wind_speed * 3.6)} {"km/h"}
                    </div>
                  </div>
                  <div className="row">
                    <div
                      className="col-6"
                      style={{
                        transform: `rotate(${weather.current.wind_deg}deg)`,
                      }}
                    >
                      <img src={compass} alt="compass"></img>
                    </div>
                    <div className="col-6 align-self-center">Direction</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          " "
        )}
      </div>
      <div className="row">
        {weather
          ? weather.daily.map((e, i) => {
              if (i > 0 && i < 7) {
                return (
                  <div className="col-2 mt-3" key={i}>
                    <Card className="light-bg">
                      <CardImg
                        alt="Card image cap"
                        src={setIcon(e.weather[0].id, e.weather[0].icon)}
                        top
                        width="100%"
                      />
                      <CardBody>
                        <CardTitle tag="h5">{calcTime(e.dt).day}</CardTitle>
                        <CardSubtitle className="mb-2 text-muted" tag="h6">
                          {e.weather[0].main}
                        </CardSubtitle>
                        <CardText>
                          <span className="heat">
                            {Math.floor(e.temp.day)}
                            <sup className="deg">°C</sup>
                          </span>
                        </CardText>
                      </CardBody>
                    </Card>
                  </div>
                );
              } else {
                return " ";
              }
            })
          : " "}
      </div>
    </div>
  );
}

export default Days;
