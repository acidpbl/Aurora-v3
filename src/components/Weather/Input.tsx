interface InputCompProps {
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  handleSubmit: () => void;
}

export function Input({ value, onChange, handleSubmit }: InputCompProps) {
  return (
    <div className="p-1 flex focus-within:bg-violet-800 rounded-xl">
      <input
        className="p-4 w-48 rounded-s-lg bg-violet-200 text-xs transition-all ease-linear placeholder-violet-600 focus:outline-none focus:bg-violet-300 focus:placeholder-black focus:text-violet-600 focus:font-medium"
        placeholder="Your City"
        value={value}
        onChange={(e) => {
          onChange(e);
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSubmit();
          }
        }}
      />
      <button
        className="p-4 rounded-e-lg bg-violet-600 text-xs transition-all ease-linear text-zinc-50 focus:outline-none hover:bg-violet-700 focus:text-violet-200"
        onClick={() => {
          handleSubmit();
        }}
        type="submit"
      >
        Search
      </button>
    </div>
  );
}
