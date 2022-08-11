import React from "react";
import { TPhoto, TPhotoDetails } from "../lib/types/TPhoto";

export const ModalContext = React.createContext(null as any);

export const ModalStorage = ({ children }: any) => {
  const [modalPhoto, setModalPhoto] = React.useState<TPhoto | TPhotoDetails>();
  const [modalOpen, setModalOpen] = React.useState(false);

  function openModal(photo: TPhoto) {
    setModalPhoto(photo);
    setModal();
  }

  function setModal() {
    setModalOpen(!modalOpen);
  }

  return (
    <ModalContext.Provider
      value={{ modalPhoto, openModal, modalOpen, setModal, setModalPhoto }}
    >
      {children}
    </ModalContext.Provider>
  );
};
