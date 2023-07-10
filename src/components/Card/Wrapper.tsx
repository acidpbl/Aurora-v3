import { ReactNode } from "react";

interface WrapperProps {
  children: ReactNode;
  variant: "sm" | "md" | "lg";
}

export function Wrapper({ variant, children }: WrapperProps) {
  let VAR_STYLE;

  if (variant == "sm") {
    VAR_STYLE = "aspect-square";
  } else if (variant == "md") {
    VAR_STYLE = "aspect-[2.05/1]";
  } else {
    VAR_STYLE = "aspect-[3.1/1]";
  }

  return (
    <div
      className={`p-4 bg-slate-50 rounded-[2rem] h-[23rem] flex flex-col gap-4 shadow-md ${VAR_STYLE} `}
    >
      {children}
    </div>
  );
}
