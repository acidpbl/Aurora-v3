import { ReactNode } from "react";

interface ButtonsProps {
  children: ReactNode;
}

export function Buttons({ children }: ButtonsProps) {
  return <div className="w-full h-full flex flex-col">{children}</div>;
}
