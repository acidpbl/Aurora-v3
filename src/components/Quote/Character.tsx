interface QuoteProps {
  quoteData: {
    quote: string;
    character: string;
    title: string;
  };
}

export function Character({ quoteData }: QuoteProps) {
  return (
    <span className="px-4 py-2 rounded-xl bg-zinc-200 border-[1px] border-zinc-400 border-opacity-25 text-violet-500 transition-all ease-linear text-lg hover:bg-zinc-300 hover:text-violet-700">
      — {quoteData.character}
    </span>
  );
}
