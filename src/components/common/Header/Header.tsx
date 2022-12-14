import React from "react";
import s from "./Header.module.css";
import { Link } from "react-router-dom";
import { ReactComponent as LogoDogs } from "../../../assets/svg/dogs.svg";
import { UserContext } from "../../../contexts/UserContext";

export const Header = () => {
  const { data, userLogout } = React.useContext(UserContext) || {};

  return (
    <header className={s.header}>
      <nav className={`${s.nav} container`}>
        <Link to="/" aria-label="Home" className={s.logo}>
          <LogoDogs />
        </Link>
        {data ? (
          <div className="inline-flex gap-x-4">
            <Link to="/myAccount" className={s.login}>
              {data?.nome.charAt(0).toUpperCase() + data?.nome.slice(1)}
            </Link>
          </div>
        ) : (
          <Link to="/login" className={s.login}>
            Login / Sign Up
          </Link>
        )}
      </nav>
    </header>
  );
};
