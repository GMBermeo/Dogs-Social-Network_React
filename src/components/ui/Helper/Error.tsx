import React from "react";
import { ErrorProps } from "../../../lib/types/Errors";

export const Error = ({ error }: ErrorProps) => {
  if (!error) return null;
  return <p className="my-4 mx-0 text-red-400">{error}</p>;
};
