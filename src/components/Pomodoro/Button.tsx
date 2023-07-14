import { ButtonHTMLAttributes, ElementType } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  icon: ElementType;
  iconSide: boolean;
  iconWeight?: string;
}

export function Button({
  text,
  icon: Icon,
  iconSide,
  iconWeight,
  ...rest
}: ButtonProps) {
  return (
    <button
      className="py-3 w-24 rounded-lg transition-all ease-linear bg-violet-600 text-violet-50 hover:bg-violet-700 hover:text-violet-200 flex items-center justify-center gap-2 focus:outline-violet-800 focus:outline-4"
      {...rest}
    >
      {iconSide ? (
        <>
          {text ? <span className="text-xs">{text}</span> : ""}
          <Icon className="w-4 h-4" weight={iconWeight ? iconWeight : "fill"} />
        </>
      ) : (
        <>
          <Icon className="w-4 h-4" weight={iconWeight ? iconWeight : "fill"} />
          {text ? <span className="text-xs">{text}</span> : ""}
        </>
      )}
    </button>
  );
}
