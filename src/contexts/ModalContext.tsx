import React from "react";
import { Photo, PhotoDetails } from "../lib/types/Photo";

export const ModalContext = React.createContext(null as any);

export const ModalStorage = ({ children }: any) => {
  const [modalPhoto, setModalPhoto] = React.useState<Photo | PhotoDetails>();
  const [modalOpen, setModalOpen] = React.useState(false);

  function openModal(photo: Photo) {
    setModalPhoto(photo);
    setModalOpen(!modalOpen);
  }

  function closeModal() {
    setModalOpen(false);
  }

  console.log(modalPhoto);
  console.log(modalOpen);

  return (
    <ModalContext.Provider
      value={{ modalPhoto, openModal, modalOpen, closeModal, setModalPhoto }}
    >
      {children}
    </ModalContext.Provider>
  );
};
