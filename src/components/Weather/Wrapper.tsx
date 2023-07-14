import { useWeatherCard } from "./useWeather";
import { IGetWeatherDataResponse } from "../../data/getWeatherData";
import { Input } from "./Input";
import { ChangeEventHandler, useEffect, useState } from "react";
import { HasData } from "./HasData";
import { HasntData } from "./HasntData";

export interface WrapperProps {
  weatherCardData: IGetWeatherDataResponse;
  citySearchvalue: string;
  handleSubmit: () => void;
  onChange: ChangeEventHandler<HTMLInputElement>;
  errorHelperText: {
    text: string;
    icon: JSX.Element;
  };
}

export function Wrapper({
  weatherCardData,
  citySearchvalue,
  handleSubmit,
  onChange,
  errorHelperText,
}: WrapperProps) {
  const { actions } = useWeatherCard();
  const [, setNewIcon] = useState<JSX.Element>();

  function SetUniqueIcon() {
    if (weatherCardData === undefined) {
      setNewIcon(actions.RandomWeatherIcon());
    }
  }

  useEffect(() => {
    SetUniqueIcon();
  }, [weatherCardData]);

  return (
    <div className="flex flex-col items-center justify-center h-full">
      <Input
        value={citySearchvalue}
        onChange={(e) => {
          onChange(e);
        }}
        handleSubmit={handleSubmit}
      />
      {weatherCardData ? (
        <HasData
          citySearchvalue={citySearchvalue}
          errorHelperText={errorHelperText}
          handleSubmit={handleSubmit}
          onChange={onChange}
          weatherCardData={weatherCardData}
        />
      ) : (
        <HasntData
          citySearchvalue={citySearchvalue}
          errorHelperText={errorHelperText}
          handleSubmit={handleSubmit}
          onChange={onChange}
          weatherCardData={weatherCardData}
        />
      )}
    </div>
  );
}
