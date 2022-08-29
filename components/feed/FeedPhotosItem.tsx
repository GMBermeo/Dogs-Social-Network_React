import React from "react";
import { TPhoto } from "../../lib/types/TPhoto";
import s from "./FeedPhotosItem.module.css";
import { ModalContext } from "../../contexts/ModalContext";
import { Image } from "../ui";

export const FeedPhotosItem = (props: { photo: TPhoto }) => {
  const { openModal } = React.useContext(ModalContext);

  function openPhotoModal() {
    openModal(props.photo);
  }

  return (
    <li className={s.photo} onClick={openPhotoModal}>
      <Image src={props.photo.src} alt={props.photo.title} />
      <span>{props.photo.acessos}</span>
    </li>
  );
};
