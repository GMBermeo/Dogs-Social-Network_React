import React from "react";
import s from "./Header.module.css";
import { Link } from "react-router-dom";
import { ReactComponent as LogoDogs } from "../../../assets/svg/dogs.svg";

const Header = () => {
  return (
    <header className={s.header}>
      <nav className={`${s.nav} container`}>
        <Link to="/" aria-label="Home" className={s.logo}>
          <LogoDogs />
        </Link>
        <Link to="/login" className={s.login}>
          Login / Criar
        </Link>
      </nav>
    </header>
  );
};

export default Header;
