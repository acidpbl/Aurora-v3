import { useState, useEffect } from "react";

interface TimeProps {}

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "Dezember",
];

const now = new Date();

export function Time({}: TimeProps) {
  const [date, setDate] = useState({
    hours: now.getHours(),
    minutes: now.getMinutes(),
    seconds: now.getSeconds(),
    today: now.getDate(),
    month: now.getMonth(),
    year: now.getFullYear(),
  });
  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      setDate({
        hours: now.getHours(),
        minutes: now.getMinutes(),
        seconds: now.getSeconds(),
        today: now.getDate(),
        month: now.getMonth(),
        year: now.getFullYear(),
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);
  return (
    <span
      className="w-[17rem] text-center py-6 rounded-xl bg-violet-200 text-7xl font-medium transition-all ease-linear hover:bg-violet-300 hover:text-violet-600"
      onClick={() => {
        navigator.clipboard.writeText(
          `${date.today} ${months[date.month]}, ${date.year}`
        );
      }}
    >
      {`${date.hours < 10 ? `0${date.hours}` : date.hours}:${
        date.minutes < 10 ? `0${date.minutes}` : date.minutes
      }`}
    </span>
  );
}
