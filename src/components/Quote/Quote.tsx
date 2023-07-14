import { ButtonHTMLAttributes } from "react";

interface QuoteProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  quoteData: {
    quote: string;
    character: string;
    title: string;
  };
}

export function Quote({ quoteData, ...rest }: QuoteProps) {
  return (
    <span
      className="text-4xl transition-all ease-linear pl-2 hover:text-violet-600"
      {...rest}
    >
      "{quoteData?.quote}"
    </span>
  );
}
