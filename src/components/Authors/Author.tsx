import { ReactNode } from "react";

interface AuthorProps {
  children: ReactNode;
}

export function Author({ children }: AuthorProps) {
  return (
    <div className="flex flex-col gap-2 justify-center items-center">
      {children}
    </div>
  );
}
