import { useEffect, useState } from "react";

interface WeekdayProps {}

const now = new Date();

export function Weekday({}: WeekdayProps) {
  const [date, setDate] = useState({
    weekday: now.toLocaleDateString("en", { weekday: "long" }),
  });
  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      setDate({
        weekday: now.toLocaleDateString("en", { weekday: "long" }),
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <span className="text-3xl text-zinc-400 font-medium">{date.weekday}</span>
  );
}
