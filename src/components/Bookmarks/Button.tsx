import { ButtonHTMLAttributes, ElementType } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: ElementType;
  text: string;
}

export function Button({ icon: Icon, text }: ButtonProps) {
  return (
    <div className="flex flex-col items-center gap-1 group/button cursor-pointer">
      <div className="flex justify-center items-center p-4 transition-all ease-linear bg-violet-200 rounded-xl hover:bg-violet-300 text-violet-600 hover:text-violet-700">
        <Icon className="w-10 h-10" weight="fill" />
      </div>
      <span className="text-sm font-medium text-violet-600 group-hover/button:text-violet-700">
        {text}
      </span>
    </div>
  );
}
