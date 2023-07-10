import { useDate } from "./useCalendar";

interface DaysProps {
  nav: number;
}

export function Days({ nav }: DaysProps) {
  const { days } = useDate(nav);
  return (
    <div className="px-8 py-2 grid grid-cols-7 gap-x-3 h-full">
      {days.map((d: any, index: any) => {
        return (
          <div
            key={index}
            className={`flex justify-center items-center rounded-md bg-violet-200 hover:bg-violet-300 hover:text-violet-600 aspect-square ${
              d.class === "inactive"
                ? "bg-violet-100 text-zinc-500 hover:bg-violet-200 hover:text-zinc-500"
                : ""
            } ${
              d.isCurrentDay
                ? "bg-violet-600 text-violet-50 hover:bg-violet-800 hover:text-violet-200"
                : ""
            }`}
          >
            <span>{d.value}</span>
          </div>
        );
      })}
    </div>
  );
}
