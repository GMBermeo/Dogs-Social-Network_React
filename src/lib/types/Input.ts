export interface InputProps {
  id: string;
  label: string;
  value: string | number;
  type?: "text" | "password" | "number";
  error: string | undefined;
  onChange: ({ target }: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: () => boolean | undefined;
  validate: () => boolean | undefined;
}
