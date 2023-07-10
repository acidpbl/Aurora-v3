import { ReactNode } from "react";

interface WrapperProps {
  children: ReactNode;
}

export function Wrapper({ children }: WrapperProps) {
  return <div className="flex flex-col gap-8">{children}</div>;
}
