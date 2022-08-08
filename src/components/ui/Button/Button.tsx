import React from "react";
import s from "./Button.module.css";
import { ButtonProps } from "../../../lib/types/Button";

export const Button = ({ children, disabled, ...props }: ButtonProps) => {
  return (
    <button className={s.button} disabled={disabled} {...props}>
      {children}
    </button>
  );
};
