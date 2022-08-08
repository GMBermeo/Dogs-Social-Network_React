export interface UserData {
  email: string;
  id: number;
  nome: string;
  username: string;
}

export interface UserContextValue {
  data: UserData | undefined;
  error: string | undefined;
  loading: boolean;
  login: boolean;
  userLogin: (username: string, password: string) => void;
  userLogout: () => void;
}
