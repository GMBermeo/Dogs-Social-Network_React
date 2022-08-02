import React from "react";
import s from "./Button.module.css";

interface Props {
  children?: React.ReactNode;
  // any props that come into the component
}

const Button = ({ children, ...props }: Props) => {
  return (
    <button className={s.button} {...props}>
      {children}
    </button>
  );
};

export default Button;
