interface TitleProps {
  text?: string;
}

export function Title({ text }: TitleProps) {
  return (
    <span className="self-center text-black font-medium">
      {text ? text : "Card"}
    </span>
  );
}
