import { useState } from "react";
import { getWeatherData, IGetWeatherDataResponse } from "./data/getWeatherData";

export function useApp() {
  const [city, setCity] = useState("");
  const [weatherData, setWheatherData] = useState<IGetWeatherDataResponse>();
  const [helperText, setHelperText] = useState("");
  const [errorText, setErrorText] = useState("");

  function resetHelperText() {
    setHelperText("");
  }

  function resetErrorText() {
    setErrorText("");
  }

  function checkIfInputExists(input: string): boolean {
    if (input.trim().length) {
      return true;
    }
    setHelperText("Type a city to find out");
    setErrorText("This city wasn't founded");
    setWheatherData(undefined);

    return false;
  }
  async function getCityWeather() {
    if (checkIfInputExists(city)) {
      const data = await getWeatherData(city);
      setWheatherData(data);
      setCity("");
    }
  }

  return {
    states: {
      city,
      setCity,
      weatherData,
      helperText,
      setWheatherData,
      errorText,
    },
    actions: {
      getCityWeather,
      resetHelperText,
      resetErrorText,
    },
  };
}
