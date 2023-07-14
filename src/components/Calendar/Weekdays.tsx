interface WeekdaysProps {
  nav: number;
}

export function Weekdays({ nav }: WeekdaysProps) {
  const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const today = new Date().toLocaleDateString("en-us", {
    weekday: "short",
  });

  return (
    <div className="flex justify-between px-8 mt-2">
      {weekdays.map((weekday: string, index: any) => {
        return (
          <span
            key={index}
            className={`w-[28.58px] transition-all ease-linear flex justify-center text-sm font-medium ${
              today === weekday && nav === 0 ? "text-violet-500" : ""
            }`}
          >
            {weekday}
          </span>
        );
      })}
    </div>
  );
}
