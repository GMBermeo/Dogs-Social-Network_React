export interface TInputProps {
  id: string;
  label: string;
  value: string | number;
  type?: "text" | "password" | "number" | "textarea";
  error: string | undefined;
  onChange: ({ target }: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: () => boolean | undefined;
  validate: () => boolean;
}
