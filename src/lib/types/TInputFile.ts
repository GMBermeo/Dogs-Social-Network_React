export interface TInputFileProps {
  id: string;
  label: string;
  onChange: ({ target }: React.ChangeEvent<HTMLInputElement>) => void;
}
