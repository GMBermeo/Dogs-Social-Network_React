import React from "react";

const Heading = ({ children }) => {
  return (
    <h1 className="mb-3 ml-1 text-xl font-bold underline decoration-red-400">
      {children}
    </h1>
  );
};

export default Heading;
