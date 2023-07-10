import { useEffect, useState } from "react";

interface TodayDateProps {}

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

export function TodayDate({}: TodayDateProps) {
  const [date, setDate] = useState({
    today: now.getDate(),
    month: now.getMonth(),
    year: now.getFullYear(),
  });
  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      setDate({
        today: now.getDate(),
        month: now.getMonth(),
        year: now.getFullYear(),
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <span className="text-3xl text-zinc-400">
      {`${date.today} ${months[date.month]}, ${date.year}`}
    </span>
  );
}
