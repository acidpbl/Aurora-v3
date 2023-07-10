import { ChangeEventHandler, useEffect, useState } from "react";
import { useWeatherCard } from "./useWeather";
import { IGetWeatherDataResponse } from "../../data/getWeatherData";

interface HasntDataProps {
  weatherCardData: IGetWeatherDataResponse;
  citySearchvalue: string;
  handleSubmit: () => void;
  onChange: ChangeEventHandler<HTMLInputElement>;
  errorHelperText: {
    text: string;
    icon: JSX.Element;
  };
}

export function HasntData({
  weatherCardData,
  citySearchvalue,
  errorHelperText,
}: HasntDataProps) {
  const { actions, elements } = useWeatherCard();
  const [newIcon, setNewIcon] = useState<JSX.Element>();

  function SetUniqueIcon() {
    if (weatherCardData === undefined) {
      setNewIcon(actions.RandomWeatherIcon());
    }
  }

  useEffect(() => {
    SetUniqueIcon();
  }, [weatherCardData]);

  return (
    <div className="h-full w-full flex flex-col justify-center">
      {actions.SetLoadingWeather(citySearchvalue) ? (
        <div className="flex items-center justify-center">
          <elements.CircleNotch weight="bold" className="w-[5rem] h-[5rem] animate-spin-slow [&>*]:text-violet-600" />
        </div>
      ) : (
        <>
          {errorHelperText.text.length > 0 ? (
            ""
          ) : (
            <div className="flex items-center justify-center [&>*]:text-violet-200 [&>*]:hover:text-violet-300">
              {newIcon}
            </div>
          )}
          {errorHelperText.text.length > 0 ? (
            <span className="flex flex-col text-red-600 items-center text-sm gap-4 [&>*]:w-20 [&>*]:h-20">
              {errorHelperText.icon}
              {errorHelperText.text}
            </span>
          ) : (
            ""
          )}
        </>
      )}
    </div>
  );
}
