export interface WeatherIconProps {
  icon: string;
}

export function WeatherIcon({ icon }: WeatherIconProps) {
  return (
    <img
      src={`https://openweathermap.org/img/wn/${icon}@4x.png`}
      alt=""
      className="bg-violet-200 w-20 rounded-3xl transition-all ease-linear hover:bg-violet-300"
    />
  );
}
