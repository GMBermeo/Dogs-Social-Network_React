import { API_URL } from "./_url";

export function GET_STATS() {
  return {
    url: API_URL + "api/stats",
    options: {
      method: "GET",
      headers: {
        Authorization: "Bearer " + window.localStorage.getItem("token"),
      },
    },
  };
}
