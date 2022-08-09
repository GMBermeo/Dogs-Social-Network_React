import React from "react";
import { useFetch } from "../../lib/hooks";
import s from "./FeedModal.module.css";
import { PHOTO_GET } from "../../lib/api";
import { ModalContext } from "../../contexts/ModalContext";
import { Error, Loading } from "../ui/";
import { PhotoContent } from "../ui/";

export const FeedModal = () => {
  const { data, error, loading, request } = useFetch();
  const { modalPhoto, setModal } = React.useContext(ModalContext);

  function handleOutsideClick(event: any) {
    if (event.target === event.currentTarget) {
      setModal();
    }
  }

  return (
    <div className={s.modal} onClick={handleOutsideClick}>
      {error && <Error error={error} />}
      {loading && <Loading />}
      {/* {data && <img src={data[0].src} alt={data[0].title} />} */}
      {modalPhoto && <PhotoContent />}
    </div>
  );
};
