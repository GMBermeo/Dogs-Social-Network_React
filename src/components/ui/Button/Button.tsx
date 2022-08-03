import React from "react";
import s from "./Button.module.css";

interface ButtonProps {
  // children: React.ReactNode;
  children: React.ReactNode;
}

const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <button className={s.button} {...props}>
      {children}
    </button>
  );
};

export default Button;
