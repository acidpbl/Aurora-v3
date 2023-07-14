import { ReactNode } from "react";

interface WrapperProps {
  children: ReactNode;
}

export function Wrapper({ children }: WrapperProps) {
  return <div className="grid grid-rows-2 grid-cols-3 gap-y-10 p-8">{children}</div>;
}
