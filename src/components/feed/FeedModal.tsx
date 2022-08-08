import React from "react";
import { useFetch } from "../../lib/hooks";
import s from "./FeedModal.module.css";
import { PHOTO_GET } from "../../lib/api";
import { ModalContext } from "../../contexts/ModalContext";
import { Error, Loading } from "../ui/";
import { PhotoContent } from "../ui/";

export const FeedModal = () => {
  const { data, error, loading, request } = useFetch();
  const { modalPhoto } = React.useContext(ModalContext);

  return (
    <div className={s.modal}>
      {error && <Error error={error} />}
      {loading && <Loading />}
      {/* {data && <img src={data[0].src} alt={data[0].title} />} */}
      {modalPhoto && <PhotoContent />}
    </div>
  );
};
