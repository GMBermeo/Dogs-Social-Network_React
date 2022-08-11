import { API_URL } from "./_url";
import { TBodyLogin } from "../types/TApi";

export function TOKEN_POST(body: TBodyLogin) {
  return {
    url: API_URL + "jwt-auth/v1/token",
    options: {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    },
  };
}

export function TOKEN_VALIDATE_POST(token: string) {
  return {
    url: API_URL + "jwt-auth/v1/token/validate",
    options: {
      method: "POST",
      headers: {
        Authorization: "Bearer " + token,
      },
    },
  };
}
