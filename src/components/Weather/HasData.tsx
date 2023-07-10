import { ChangeEventHandler } from "react";
import { IGetWeatherDataResponse } from "../../data/getWeatherData";
import { WeatherIcon } from "./Icon";

interface HasDataProps {
  weatherCardData: IGetWeatherDataResponse;
  citySearchvalue: string;
  handleSubmit: () => void;
  onChange: ChangeEventHandler<HTMLInputElement>;
  errorHelperText: {
    text: string;
    icon: JSX.Element;
  };
}

export function HasData({ weatherCardData, errorHelperText }: HasDataProps) {
  return (
    <div className="p-4 h-full w-full flex flex-col items-center gap-2">
      <span className="text-lg font-medium">{weatherCardData.name}</span>
      <div className="flex gap-4 items-center">
        <WeatherIcon icon={weatherCardData.icon ? weatherCardData.icon : ""} />
        <span className="text-6xl font-medium">
          {weatherCardData.temp.toString().substring(0, 2)}°
        </span>
      </div>
      <div className="flex flex-col gap-1 items-center text-zinc-400 text-3xl">
        <span className="">
          <b>Min:</b> {weatherCardData.temp_min.toString().substring(0, 2)}°{" "}
          <b>Max:</b> {weatherCardData.temp_max.toString().substring(0, 2)}°
        </span>
        <span className="">
          <b>Feels Like:</b>{" "}
          {weatherCardData.feels_like.toString().substring(0, 2)}°
        </span>
      </div>
      <div>
        <span className="flex flex-col text-red-600 items-center text-xs mt-8 gap-2">
          {errorHelperText.icon}
          {errorHelperText.text}
        </span>
      </div>
    </div>
  );
}
