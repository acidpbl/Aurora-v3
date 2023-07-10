import { ButtonHTMLAttributes, ElementType } from "react";

interface NavButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: ElementType;
}
export function NavButton({ icon: Icon, onClick }: NavButtonProps) {
  return (
    <Icon
      onClick={onClick}
      className="w-6 h-6 p-1 bg-violet-200 rounded-md cursor-pointer transition-all ease-linear text-black hover:bg-violet-300 hover:text-violet-600"
      weight="bold"
    />
  );
}
