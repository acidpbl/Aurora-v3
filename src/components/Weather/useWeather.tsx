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
      <Cloud weight="fill" className="w-[5rem] h-[5rem]" />,
      <CloudFog weight="fill" className="w-[5rem] h-[5rem]" />,
      <CloudLightning weight="fill" className="w-[5rem] h-[5rem]" />,
      <CloudMoon weight="fill" className="w-[5rem] h-[5rem]" />,
      <CloudRain weight="fill" className="w-[5rem] h-[5rem]" />,
      <CloudSnow weight="fill" className="w-[5rem] h-[5rem]" />,
      <CloudSun weight="fill" className="w-[5rem] h-[5rem]" />,
      <Lightning weight="fill" className="w-[5rem] h-[5rem]" />,
      <Moon weight="fill" className="w-[5rem] h-[5rem]" />,
      <MoonStars weight="fill" className="w-[5rem] h-[5rem]" />,
      <Rainbow weight="fill" className="w-[5rem] h-[5rem]" />,
      <RainbowCloud weight="fill" className="w-[5rem] h-[5rem]" />,
      <Snowflake weight="fill" className="w-[5rem] h-[5rem]" />,
      <Sun weight="fill" className="w-[5rem] h-[5rem]" />,
      <SunHorizon weight="fill" className="w-[5rem] h-[5rem]" />,
      <Wind weight="fill" className="w-[5rem] h-[5rem]" />,
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
