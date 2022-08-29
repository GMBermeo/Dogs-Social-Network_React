export interface TFeedProps {
  user: number;
  page: number;
  total: number;
  setInfinite: React.Dispatch<React.SetStateAction<boolean>>;
}
