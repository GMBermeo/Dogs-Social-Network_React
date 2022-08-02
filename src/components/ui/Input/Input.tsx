import React from "react";
import s from "./Input.module.css";

interface Props {
  id: any;
  label?: any;
  value?: any;
  onChange?: any;
  type?: any;
  error?: any;
  onBlur?: any;
}

const Input = ({
  id,
  label,
  value,
  onChange,
  type = "text",
  error,
  onBlur,
}: Props) => {
  return (
    <div className={s.wrapper}>
      <label className={s.label} htmlFor={id}>
        {label}
      </label>
      <input
        className={s.input}
        id={id}
        name={id}
        type={type}
        onChange={onChange}
        value={value}
        onBlur={onBlur}
      />
      {error && <p className={s.error}>{error}</p>}
    </div>
  );
};

export default Input;
