import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { UserContext } from "../../../contexts/UserContext";
import { useMedia } from "../../../lib/hooks";
import s from "./UserHeaderNav.module.css";
import FeedIconSVG from "@public/svg/feed.svg";
import StatsIconSVG from "@public/svg/stats.svg";
import PostIconSVG from "@public/svg/post.svg";
import LogoutIconSVG from "@public/svg/logout.svg";

export const UserHeaderNav = () => {
  const { userLogout } = React.useContext(UserContext);
  const mobile = useMedia("(max-width: 40rem)");
  const [mobileMenu, setMobileMenu] = React.useState(false);

  const { pathname } = useLocation();

  React.useEffect(() => {
    setMobileMenu(false);
  }, [pathname]);

  return (
    <>
      {mobile && (
        <button
          aria-label="Menu"
          className={`${s.mobileButton} ${
            mobileMenu ? s.mobileButtonActive : ""
          }`}
          onClick={() => {
            setMobileMenu(!mobileMenu);
          }}
        ></button>
      )}
      <nav
        className={`${mobile ? s.navMobile : s.nav} ${
          mobileMenu && s.navMobileActive
        }`}
      >
        <NavLink to="/myAccount" end>
          <FeedIconSVG />
          {mobile && "My Feed"}
        </NavLink>
        <NavLink to="stats">
          <StatsIconSVG />
          {mobile && "Stats"}
        </NavLink>
        <NavLink to="post">
          <PostIconSVG />
          {mobile && "Post photo"}
        </NavLink>
        <button onClick={userLogout}>
          <LogoutIconSVG />
          {mobile && "Logout"}
        </button>
      </nav>
    </>
  );
};
