import React from "react";
import { Photo } from "../../lib/types/Photo";
import { FeedModal } from "./FeedModal";
import { FeedPhotos } from "./FeedPhotos";
import { ModalContext } from "../../contexts/ModalContext";

export const Feed = () => {
  const { modalOpen } = React.useContext(ModalContext);
  // const [modalPhoto, setModalPhoto] = React.useState<Photo>();

  return (
    <div>
      {modalOpen && <FeedModal />}
      <FeedPhotos />
    </div>
  );
};
