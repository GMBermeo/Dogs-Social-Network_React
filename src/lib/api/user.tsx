import { API_URL } from "./_url";
import { TBodySignup } from "../types/TApi";

export function USER_GET(token: string) {
  return {
    url: API_URL + "api/user",
    options: {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token,
      },
    },
  };
}

export function USER_POST(body: TBodySignup) {
  return {
    url: API_URL + "api/user",
    options: {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    },
  };
}
