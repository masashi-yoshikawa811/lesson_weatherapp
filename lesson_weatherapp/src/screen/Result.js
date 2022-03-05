import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { LinkButton } from "../components/Button";
import { Sysdate } from "../components/Sysdate";
import axios from "axios";

const API_KEY = "11cd741b711cd0b4a6f05476bc395a72";
const BASE_URL = "http://api.openweathermap.org/data/2.5/forecast";

const styles = {
  innerContaints: { margin: 100, backgroundColor: "#fff" },
  title: {
    width: 500,
    textAlign: "center",
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 30,
    paddingLeft: 30,
    marginTop: 200,
    marginBottom: 30,
    marginRight: "auto",
    marginLeft: "auto",
    fontSize: 40,
  },
  table: {
    marginRight: "auto",
    marginLeft: "auto",
    writingMode: "vertical-lr",
  },
  th: {
    writingMode: "horizontal-tb",
  },
  td: {
    writingMode: "horizontal-tb",
    textAlign: "center",
  },
  p: {
    marginTop: 5,
    marginBottom: 5,
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  resultButton: {
    width: 100,
    marginTop: 40,
    marginRight: "auto",
    marginLeft: "auto",
  },
};
const Result = () => {
  const location = useLocation();
  const url =
    BASE_URL +
    "?q=" +
    location.state.prefecturalName +
    "&units=metric&lang=ja&appid=" +
    API_KEY;

  const [weather, setWeather] = useState([]);
  let weatherobject = {};

  // 3時間ごとのデータを8個いれる配列
  const weatherDataForPeriod = [];
  let mainWeatherColor = "";
  if (weather.length > 0) {
    weather.forEach((value) => {
      if (weatherDataForPeriod.length < 8) {
        const dt_txt_date = new Date(value.dt_txt);
        const dt_txt_month = (dt_txt_date.getMonth() + 1).toString();
        const dt_txt_day = dt_txt_date.getDate().toString();
        const dt_txt_hour = dt_txt_date.getHours().toString();
        const dt_txt =
          dt_txt_month + "月" + dt_txt_day + "日" + dt_txt_hour + "時";
        // const dt_txt =
        //   value.dt_txt.substring(5, 7) +
        //   "月" +
        //   value.dt_txt.substring(8, 10) +
        //   "日" +
        //   value.dt_txt.substring(11, 13) +
        //   "時";

        let mainWeather = "";

        const mainWeatherimg =
          "http://openweathermap.org/img/w/" + value.weather[0].icon + ".png";
        if (value.weather[0].main === "Thunderstorm") {
          mainWeather = "雷雨";
          mainWeatherColor = "#ffff00";
        } else if (value.weather[0].main === "Drizzle") {
          // 霧雨
          mainWeather = "小雨";
          mainWeatherColor = "#00bfff";
        } else if (value.weather[0].main === "Rain") {
          mainWeather = "雨";
          mainWeatherColor = "#0000cd";
        } else if (value.weather[0].main === "Snow") {
          mainWeather = "雪";
          mainWeatherColor = "#fffafa";
        } else if (value.weather[0].main === "Clear") {
          mainWeather = "晴れ";
          mainWeatherColor = "#ffa500";
        } else if (value.weather[0].main === "Clouds") {
          mainWeather = "曇り";
          mainWeatherColor = "d3d3d3";
        } else {
          mainWeather = "その他";
          mainWeatherColor = "#000000";
        }

        weatherobject = {
          dt_txt: dt_txt,
          temp: value.main.temp,
          mainWeather: mainWeather,
          mainWeatherimg: mainWeatherimg,
          humidity: value.main.humidity,
          rain: value.rain ? value.rain["3h"] : 0,
        };

        weatherDataForPeriod.push(weatherobject);
      }
    });
  }
  const rows = weatherDataForPeriod.map((weatherDataForPeriod) => (
    <tr key={weatherDataForPeriod.dt_txt}>
      <td style={styles.td}>{weatherDataForPeriod.dt_txt}</td>
      <td style={styles.td}>
        <img src={weatherDataForPeriod.mainWeatherimg} alt="天気のアイコン" />
        <p style={styles.p}>{weatherDataForPeriod.mainWeather}</p>
      </td>
      <td style={styles.td}>{weatherDataForPeriod.temp}</td>
      <td style={styles.td}>{weatherDataForPeriod.humidity}</td>
      <td style={styles.td}>{weatherDataForPeriod.rain}</td>
    </tr>
  ));

  useEffect(() => {
    axios.get(url).then((response) => {
      setWeather(response.data.list);
    });
  }, []);

  const [outLineColor, setoutLineColor] = useState({});

  const weatherCount = [];
  let weatherCountObject = {};
  for (let i = 0; i < weatherDataForPeriod.length; i++) {
    //weatherCountObjectにmainweather,count,time(mainweatherの一番早い時間)をいれる
    weatherCountObject = {
      mainWeatherCount: weatherDataForPeriod.mainWeather,
    };
    //weatherCountにweatherCountObjectをいれる
  }
  //countで比較して同数がなければ

  return (
    <>
      <div style={{ backgroundColor: mainWeatherColor }}>
        <div style={styles.innerContaints}>
          <div style={styles.title}>
            <Sysdate />
            の天気
          </div>
          <table border="1" cellSpacing="0" style={styles.table}>
            <thead>
              <tr>
                <th style={styles.th}>時刻</th>
                <th style={styles.th}>天気</th>
                <th style={styles.th}>気温（℃）</th>
                <th style={styles.th}>湿度（％）</th>
                <th style={styles.th}>降水量（mm）</th>
              </tr>
            </thead>
            <tbody>{rows}</tbody>
          </table>
          <div style={styles.resultButton}>
            <Link to="/">
              <LinkButton title="戻る" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Result;
