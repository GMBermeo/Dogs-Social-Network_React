import React, { FC } from "react";
import s from "./Header.module.css";
// import { Link } from "react-router-dom";
import Link from "next/link";
// import LogoDogsSVG from "../../../svg/dogs.svg";
import { UserContext } from "@contexts/UserContext";

export const Header: FC = () => {
  const { data, userLogout } = React.useContext(UserContext) || {};

  return (
    <header className="fixed top-0 z-50 w-full bg-white drop-shadow">
      <nav className="container flex h-[4rem] items-center justify-between">
        <Link href="/" aria-label="Home" className={s.logo}>
          {/* <LogoDogsSVG /> */}home
        </Link>
        {data ? (
          <div className="inline-flex gap-x-4">
            <Link href="/myAccount" className={s.login}>
              {data?.nome.charAt(0).toUpperCase() + data?.nome.slice(1)}
            </Link>
          </div>
        ) : (
          <Link href="/login" className={s.login}>
            Login / Sign Up
          </Link>
        )}
      </nav>
    </header>
  );
};
