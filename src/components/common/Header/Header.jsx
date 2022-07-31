import React from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import { ReactComponent as LogoDogs } from "../../../assets/svg/dogs.svg";

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link to="/" aria-label="Home" className={styles.logo}>
          <LogoDogs />
        </Link>
        <Link to="/login" className={styles.login}>
          Login / Criar
        </Link>
      </nav>
    </header>
  );
};

export default Header;
