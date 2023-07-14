import { useState } from "react";
import { getWeatherData, IGetWeatherDataResponse } from "./data/getWeatherData";

interface QuoteProps {
  quote: string;
  character: string;
  title: string;
}

export function useApp() {
  const [city, setCity] = useState("");
  const [weatherData, setWheatherData] = useState<IGetWeatherDataResponse>();
  const [helperText, setHelperText] = useState("");
  const [errorText, setErrorText] = useState("");

  const [quoteData, setQuoteData] = useState<QuoteProps | null>(null);

  async function fetchQuote() {
    try {
      const response = await fetch("https://www.ultima.rest/api/random");
      const data = await response.json();
      setQuoteData(data);
    } catch (error) {
      console.error("Error fetching quote:", error);
    }
  }

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
      quoteData,
    },
    actions: {
      getCityWeather,
      resetHelperText,
      resetErrorText,
      fetchQuote,
    },
  };
}
