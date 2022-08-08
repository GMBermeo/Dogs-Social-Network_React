import React from "react";
import { Feed } from "../components/feed/Feed";
import { ModalStorage } from "../contexts/ModalContext";

export const Home = () => {
  return (
    <section className="mainContainer container">
      <ModalStorage>
        <Feed />
      </ModalStorage>
    </section>
  );
};
