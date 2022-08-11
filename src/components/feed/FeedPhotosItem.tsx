import React from "react";
import { TPhoto } from "../../lib/types/TPhoto";
import s from "./FeedPhotosItem.module.css";
import { ModalContext } from "../../contexts/ModalContext";

export const FeedPhotosItem = (props: { photo: TPhoto }) => {
  const { openModal, setModalPhoto } = React.useContext(ModalContext);

  function openPhotoModal() {
    openModal(props.photo);
  }

  return (
    <li className={s.photo} onClick={openPhotoModal}>
      <img src={props.photo.src} alt={props.photo.title} />
      <span>{props.photo.acessos}</span>
    </li>
  );
};
