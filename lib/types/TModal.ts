export interface TModalContextValue {
  data: {} | undefined;
  error: string | undefined;
  loading: boolean;
  login: boolean;
  userLogin: (username: string, password: string) => void;
  openModal: () => void;
}
