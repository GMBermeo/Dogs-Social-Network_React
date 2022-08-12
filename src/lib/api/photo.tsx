import { API_URL } from "./_url";
import { TPhotosGet } from "../types/TApi";

export function PHOTO_POST(formData: FormData, token: string) {
  return {
    url: API_URL + "api/photo",
    options: {
      method: "POST",
      headers: {
        Authorization: "Bearer " + token,
      },
      body: formData,
    },
  };
}

export function PHOTOS_GET({ page, total, user }: TPhotosGet) {
  return {
    url: `${API_URL}api/photo/?_page=${page}&_total=${total}&_user=${user}`,
    options: {
      method: "GET",
      cache: "no-store",
    },
  };
}

export function PHOTO_GET(id: number) {
  return {
    url: `${API_URL}api/photo/${id}`,
    options: {
      method: "GET",
      cache: "no-store",
    },
  };
}

export function PHOTO_DELETE(id: number) {
  return {
    url: `${API_URL}api/photo/${id}`,
    options: {
      method: "DELETE",
      headers: {
        Authorization: "Bearer " + window.localStorage.getItem("token"),
      },
    },
  };
}
