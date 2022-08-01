import React from "react";
import s from "./Input.module.css";

const Input = ({ id, label, setValue, type = "text", ...props }) => {
  return (
    <>
      <label htmlFor={id} className={s.label}>
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        onChange={({ target }) => setValue(target.value)}
        {...props}
        className={s.input}
      />
    </>
  );
};

export default Input;
