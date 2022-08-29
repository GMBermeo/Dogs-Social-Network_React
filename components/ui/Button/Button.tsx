import React from "react";
import s from "./Button.module.css";
import { TButtonProps } from "../../../lib/types/TButton";

export const Button = ({ children, disabled, ...props }: TButtonProps) => {
  return (
    <button className={s.button} disabled={disabled} {...props}>
      {children}
    </button>
  );
};
