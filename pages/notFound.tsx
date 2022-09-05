import { NextPage } from "next";
import React from "react";

const NotFound: NextPage = () => {
  return (
    <div className="mainContainer container">
      <h1>Error: 404</h1>
      <p>Page not found.</p>
    </div>
  );
};
export default NotFound;
