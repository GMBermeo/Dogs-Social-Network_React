import React from "react";
import s from "./Button.module.css";

interface ButtonProps {
  // children: React.ReactNode;
  disabled?: boolean;
  children: React.ReactNode;
}

const Button = ({ children, disabled, ...props }: ButtonProps) => {
  return (
    <button className={s.button} disabled={disabled} {...props}>
      {children}
    </button>
  );
};

export default Button;
