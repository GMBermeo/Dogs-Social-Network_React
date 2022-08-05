import React from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../../../contexts/UserContext";
import s from "./UserHeaderNav.module.css";
import { ReactComponent as FeedIcon } from "../../../assets/svg/feed.svg";
import { ReactComponent as StatsIcon } from "../../../assets/svg/stats.svg";
import { ReactComponent as PostIcon } from "../../../assets/svg/post.svg";
import { ReactComponent as LogoutIcon } from "../../../assets/svg/logout.svg";

const UserHeaderNav = () => {
  const [mobile, setMobile] = React.useState();
  const { userLogout } = React.useContext(UserContext);

  return (
    <nav className={s.nav}>
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
  );
};

export default UserHeaderNav;
