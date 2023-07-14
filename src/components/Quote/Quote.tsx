interface QuoteProps {
  quoteData: {
    quote: string;
    character: string;
    title: string;
  };
}

export function Quote({ quoteData }: QuoteProps) {
  return (
    <span className="text-4xl transition-all ease-linear pl-2 hover:text-violet-600">
      "{quoteData?.quote}"
    </span>
  );
}
