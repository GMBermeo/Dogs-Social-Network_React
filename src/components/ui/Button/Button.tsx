import React from "react";
import s from "./Button.module.css";

interface ButtonProps {
  // children: React.ReactNode;
  disabled?: boolean;
  children: React.ReactNode;
}

export const Button = ({ children, disabled, ...props }: ButtonProps) => {
  return (
    <button className={s.button} disabled={disabled} {...props}>
      {children}
    </button>
  );
};
