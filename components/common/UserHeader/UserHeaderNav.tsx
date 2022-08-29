import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { UserContext } from "../../../contexts/UserContext";
import { useMedia } from "../../../lib/hooks";
import s from "./UserHeaderNav.module.css";
import { ReactComponent as FeedIcon } from "../../../assets/svg/feed.svg";
import { ReactComponent as StatsIcon } from "../../../assets/svg/stats.svg";
import { ReactComponent as PostIcon } from "../../../assets/svg/post.svg";
import { ReactComponent as LogoutIcon } from "../../../assets/svg/logout.svg";

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
          <FeedIcon />
          {mobile && "My Feed"}
        </NavLink>
        <NavLink to="stats">
          <StatsIcon />
          {mobile && "Stats"}
        </NavLink>
        <NavLink to="post">
          <PostIcon />
          {mobile && "Post photo"}
        </NavLink>
        <button onClick={userLogout}>
          <LogoutIcon />
          {mobile && "Logout"}
        </button>
      </nav>
    </>
  );
};
