import { useState } from "react";

import {
  CircleNotch,
  Cloud,
  CloudFog,
  CloudLightning,
  CloudMoon,
  CloudRain,
  CloudSnow,
  CloudSun,
  Lightning,
  Moon,
  MoonStars,
  Rainbow,
  RainbowCloud,
  Snowflake,
  Sun,
  SunHorizon,
  Wind,
} from "@phosphor-icons/react";

export function useWeatherCard() {
  function RandomWeatherIcon() {
    const icons = [
      <Cloud weight="fill" className="w-[5rem] h-[5rem] transition-all ease-linear" />,
      <CloudFog weight="fill" className="w-[5rem] h-[5rem] transition-all ease-linear" />,
      <CloudLightning weight="fill" className="w-[5rem] h-[5rem] transition-all ease-linear" />,
      <CloudMoon weight="fill" className="w-[5rem] h-[5rem] transition-all ease-linear" />,
      <CloudRain weight="fill" className="w-[5rem] h-[5rem] transition-all ease-linear" />,
      <CloudSnow weight="fill" className="w-[5rem] h-[5rem] transition-all ease-linear" />,
      <CloudSun weight="fill" className="w-[5rem] h-[5rem] transition-all ease-linear" />,
      <Lightning weight="fill" className="w-[5rem] h-[5rem] transition-all ease-linear" />,
      <Moon weight="fill" className="w-[5rem] h-[5rem] transition-all ease-linear" />,
      <MoonStars weight="fill" className="w-[5rem] h-[5rem] transition-all ease-linear" />,
      <Rainbow weight="fill" className="w-[5rem] h-[5rem] transition-all ease-linear" />,
      <RainbowCloud weight="fill" className="w-[5rem] h-[5rem] transition-all ease-linear" />,
      <Snowflake weight="fill" className="w-[5rem] h-[5rem] transition-all ease-linear" />,
      <Sun weight="fill" className="w-[5rem] h-[5rem] transition-all ease-linear" />,
      <SunHorizon weight="fill" className="w-[5rem] h-[5rem] transition-all ease-linear" />,
      <Wind weight="fill" className="w-[5rem] h-[5rem] transition-all ease-linear" />,
    ];

    const icon = Math.floor(Math.random() * icons.length);

    return icons[icon];
  }

  const [isWeatherLoading, setIsWeatherLoading] = useState(false);

  function SetLoadingWeather(input: string): boolean {
    if (input.trim().length) {
      return true;
    }
    return false;
  }

  return {
    states: {
      isWeatherLoading,
      setIsWeatherLoading,
    },
    actions: { RandomWeatherIcon, SetLoadingWeather },
    elements: {
      CircleNotch,
    },
  };
}
