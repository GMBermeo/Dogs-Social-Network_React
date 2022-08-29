import React from "react";
import { Link } from "react-router-dom";
import { ModalContext } from "../../contexts/ModalContext";
import { UserContext } from "../../contexts/UserContext";
import { TPhoto, TPhotoDetails } from "../../lib/types/TPhoto";
import { Image } from "../ui/";
import { PhotoComments } from "./PhotoComments";
import s from "./PhotoContent.module.css";
import { PhotoDelete } from "./PhotoDelete";

interface TPhotoContent {
  data?: { photo: TPhoto };
  single?: boolean;
}

export const PhotoContent = ({ data, single }: TPhotoContent) => {
  const { modalPhoto, closeModal } = React.useContext(ModalContext);
  const [photoData, setPhotoData] = React.useState<TPhoto>();

  React.useEffect(() => {
    if (data) {
      setPhotoData(data.photo);
    } else {
      setPhotoData(modalPhoto);
    }
  }, [data, modalPhoto]);

  const user = React.useContext(UserContext);

  if (photoData) {
    return (
      <div className={`${s.photo} ${single ? s.single : ""}`}>
        <div className={s.img}>
          <Image src={photoData.src} alt={photoData.title} />
        </div>
        <div className={s.details}>
          <div>
            <p className={s.author}>
              {user.data && user.data.username === photoData.author ? (
                <PhotoDelete id={photoData.id} />
              ) : (
                <Link
                  to={`/profile/${photoData.author}`}
                  onClick={() => closeModal()}
                >
                  @{photoData.author}
                </Link>
              )}

              <span className={s.views}>{photoData.acessos}</span>
            </p>
            <h1 className="title">
              <Link to={`/photo/${photoData.id}`} onClick={() => closeModal()}>
                {photoData.title}
              </Link>
            </h1>
            <ul className={s.attributes}>
              <li>{photoData.peso} kg</li>
              <li>
                {photoData.idade}{" "}
                {photoData.idade <= 1 ? "year old" : "years old"}
              </li>
            </ul>
          </div>
        </div>
        <PhotoComments id={photoData.id} single={single} />
      </div>
    );
  } else return null;
};
