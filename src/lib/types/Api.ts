export interface BodyLogin {
  username: string;
  password: string;
}

export interface BodySignup {
  username: string;
  password: string;
  email: string;
}

export interface PhotosGet {
  page: number;
  total: number;
  user: number;
}
