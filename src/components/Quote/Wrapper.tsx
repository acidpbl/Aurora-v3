import { ReactNode } from "react";

interface WrapperProps {
  children: ReactNode;
}

export function Wrapper({ children }: WrapperProps) {
  return <div className="w-full h-full flex flex-col items-start p-8 justify-between gap-16">{children}</div>;
}
