import React from "react";
import { TErrorProps } from "../../../lib/types/TError";

export const Error = ({ error }: TErrorProps) => {
  if (!error) return null;
  return <p className="my-4 mx-0 text-red-400">{error}</p>;
};
