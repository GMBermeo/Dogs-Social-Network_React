import React from "react";
import { useParams } from "react-router-dom";
import { Head } from "../common";
import { Feed } from "../feed/Feed";

export const UserProfile = () => {
  const { user } = useParams();

  return (
    <section className="mainContainer container">
      <Head title={user} />
      <h1 className="title">{user}</h1>
      <Feed user={user} />
    </section>
  );
};
