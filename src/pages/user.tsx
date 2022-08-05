import React from "react";
import { Route, Routes } from "react-router-dom";
import { UserHeader, UserPhotoPost, UserStats } from "../components/user";
import Feed from "../components/feed/Feed";

const User = () => {
  return (
    <section className="container">
      <UserHeader />
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="post" element={<UserPhotoPost />} />
        <Route path="stats" element={<UserStats />} />
      </Routes>
    </section>
  );
};

export default User;
