import { ReactNode } from "react";

interface IconsProps {
  children: ReactNode;
}

export function Icons({ children }: IconsProps) {
  return <div className="flex gap-8">{children}</div>;
}
