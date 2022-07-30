import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className="container">
        <Link to="/">Home</Link>
        <Link to="/login">Login / Criar</Link>
      </nav>
    </header>
  );
};

export default Header;
