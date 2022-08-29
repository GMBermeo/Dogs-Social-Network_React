import React from "react";
import s from "./Footer.module.css";
// import DogsFooterSVG from "@public/svg/dogs-footer.svg";

export const Footer = () => {
  return (
    <footer className={s.footer}>
      {/* <DogsFooterSVG /> */}
      <p>Dogs. Alguns direitos reservados.</p>
    </footer>
  );
};
