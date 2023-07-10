interface NameProps {
  name: string;
}

export function Name({ name }: NameProps) {
  return <span className="font-medium text-sm">{name}</span>;
}
