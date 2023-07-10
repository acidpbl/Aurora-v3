import { useWeatherCard } from "./useWeather";
import { IGetWeatherDataResponse } from "../../data/getWeatherData";
import { Input } from "./Input";
import { ChangeEventHandler, ReactNode, useEffect, useState } from "react";
import { HasData } from "./HasData";
import { HasntData } from "./HasntData";

export interface WrapperProps {
  children: ReactNode;
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
  children,
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
    <div className="flex flex-col items-center h-full">
      <Input
        value={citySearchvalue}
        onChange={(e) => {
          onChange(e);
        }}
        handleSubmit={handleSubmit}
      />
      {children}
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
