import { ElementType } from "react";

interface IconProps {
  icon: ElementType;
  variant: "fill" | "regular" | "bold";
  author?: boolean;
}

export function Icon({ icon: Icon, variant, author }: IconProps) {
  return (
    <div>
      <Icon
        className={`w-20 h-20 p-3 rounded-3xl bg-violet-200 hover:bg-violet-300 ${
          author
            ? `text-violet-600 hover:text-violet-800`
            : `hover:text-violet-600`
        }`}
        weight={variant}
      />
    </div>
  );
}
