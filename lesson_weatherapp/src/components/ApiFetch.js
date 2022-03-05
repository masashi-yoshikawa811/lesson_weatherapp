//result.jsに統合

import React, { useState, useEffect } from "react";
import axios from "axios";

const API_KEY = "11cd741b711cd0b4a6f05476bc395a72";
const BASE_URL = "http://api.openweathermap.org/data/2.5/forecast";
const url = BASE_URL + "?q=Tokyo&appid=" + API_KEY;

export const ApiFetch = () => {
  const [weather, setWeather] = useState({});
  useEffect(() => {
    axios.get(url).then((response) => {
      setWeather(response.data);
    });
  }, []);
  return <div></div>;
};
