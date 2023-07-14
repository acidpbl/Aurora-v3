interface QuoteProps {
  quoteData: {
    quote: string;
    character: string;
    title: string;
  };
}

export function Game({ quoteData }: QuoteProps) {
  return (
    <span className="px-4 py-2 text-lg rounded-xl bg-amber-200 text-amber-700 transition-all ease-linear hover:bg-amber-300 hover:text-amber-800">
      {quoteData.title}
    </span>
  );
}
