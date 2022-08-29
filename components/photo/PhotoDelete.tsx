import React from "react";
import { PHOTO_DELETE } from "../../lib/api/photo";
import { useFetch } from "../../lib/hooks";
import s from "./PhotoDelete.module.css";

export const PhotoDelete = (props: { id: number }) => {
  const { loading, request } = useFetch();

  async function deletePhoto() {
    const confirm = window.confirm(
      "Are you sure you want to delete this photo?"
    );
    const { url, options } = PHOTO_DELETE(props.id);
    const { response } = await request(url, options);
    response && response.ok && window.location.reload();
  }

  return (
    <>
      {loading ? (
        <button className={s.delete} onClick={deletePhoto} disabled>
          Delete
        </button>
      ) : (
        <button className={s.delete} onClick={deletePhoto}>
          Delete
        </button>
      )}
    </>
  );
};
