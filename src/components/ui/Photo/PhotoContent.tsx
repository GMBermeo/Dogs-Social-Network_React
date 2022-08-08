import React from "react";
import { Link } from "react-router-dom";
import { ModalContext } from "../../../contexts/ModalContext";
import { PhotoComments } from "./PhotoComments";
import s from "./PhotoContent.module.css";

export const PhotoContent = () => {
  const { modalPhoto } = React.useContext(ModalContext);

  console.log("data: ", modalPhoto);

  return (
    <div className={s.photo}>
      <div className={s.img}>
        <img src={modalPhoto.src} alt="modalPhoto.title" />
      </div>
      <div className={s.details}>
        <div>
          <p>
            <Link to={`/profile/${modalPhoto.author}`}>
              @{modalPhoto.author}
            </Link>
          </p>
          <span className={s.visualizacoes}>{modalPhoto.acessos}</span>
          <h1 className="title">
            <Link to={`/photo/${modalPhoto.id}`}>{modalPhoto.title}</Link>
          </h1>
          <ul className={s.attributes}>
            <li>{modalPhoto.peso} kg</li>
            <li>
              {modalPhoto.idade}{" "}
              {modalPhoto.idade <= 1 ? "year old" : "years old"}
            </li>
          </ul>
        </div>
      </div>
      <PhotoComments />
    </div>
  );
};
