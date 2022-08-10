import { API_URL } from "./_url";

export function COMMENT_POST(id: number, body: any) {
  return {
    url: `${API_URL}api/comment/${id}`,
    options: {
      method: "POST",
      cache: "no-store",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + window.localStorage.getItem("token"),
      },
      body: JSON.stringify(body),
    },
  };
}
