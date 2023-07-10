import { ReactNode } from "react";

interface ContactsProps {
  children: ReactNode;
}

export function Contacts({ children }: ContactsProps) {
  return (
    <div className="flex flex-col gap-2 justify-center items-center">
      {children}
    </div>
  );
}
