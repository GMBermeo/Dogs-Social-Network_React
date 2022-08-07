import React from "react";
import { PhotoData } from "../../../lib/interfaces/photoData";
import s from "./FeedPhotosItem.module.css";

export const FeedPhotosItem = (photo: PhotoData) => {
  return (
    <li className={s.photo}>
      <img src={photo.src} alt={photo.title} />
      <span>{photo.acessos}</span>
    </li>
  );
};
