import React from "react";

interface ErrorProps {
  error: string | undefined;
}

const Error = ({ error }: ErrorProps) => {
  if (!error) return null;
  return <p className="my-4 mx-0 text-red-400">{error}</p>;
};

export default Error;
