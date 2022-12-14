import React from "react";
import { Route, Routes } from "react-router-dom";
import { UserHeader, UserPhotoPost, UserStats } from "../components/user";
import { Feed } from "../components/feed/Feed";
import { UserContext } from "../contexts/UserContext";
import { NotFound } from "./notFound";
import { Head } from "../components/common";

export const User = () => {
  const { data } = React.useContext(UserContext);

  return (
    <section className="container">
      <Head title="My account" />
      <UserHeader />
      <Routes>
        <Route path="/" element={<Feed user={data?.id} />} />
        <Route path="post" element={<UserPhotoPost />} />
        <Route path="stats" element={<UserStats />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </section>
  );
};
