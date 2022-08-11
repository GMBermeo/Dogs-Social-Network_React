export interface TUserData {
  email: string;
  id: number;
  nome: string;
  username: string;
}

export interface TUserContextValue {
  data: TUserData | undefined;
  error: string | undefined;
  loading: boolean;
  login: boolean;
  userLogin: (username: string, password: string) => void;
  userLogout: () => void;
}
