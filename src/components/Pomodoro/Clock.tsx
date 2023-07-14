interface ClockProps {
  minutes: number;
  seconds: number;
  title: string;
  focus: boolean;
}

export function Clock({ focus, minutes, seconds, title }: ClockProps) {
  return (
    <div className="flex flex-col gap-1 justify-center items-center">
      <span
        className={`text-center w-[17rem] py-6 rounded-xl text-7xl font-medium transition-all ease-linear  ${
          focus
            ? "bg-violet-200 hover:bg-violet-300 hover:text-violet-600"
            : "text-zinc-500 bg-violet-200 hover:bg-zinc-300 hover:text-zinc-600"
        }`}
      >
        {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
      </span>
      <span
        className={`transition-all ease-linear ${
          focus ? "text-xl text-violet-600 font-bold" : "text-sm font-medium"
        }`}
      >
        {title}
      </span>
    </div>
  );
}
