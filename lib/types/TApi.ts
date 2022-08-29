export interface TBodyLogin {
  username: string;
  password: string;
}

export interface TBodySignup {
  username: string;
  password: string;
  email: string;
}

export interface TPhotosGet {
  page: number;
  total: number;
  user: number;
}
