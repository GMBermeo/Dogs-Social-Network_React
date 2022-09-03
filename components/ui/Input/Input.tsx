import React from "react";
import s from "./Input.module.css";
import { TInputProps } from "../../../lib/types/TInput";

export const Input = ({
  id,
  label,
  value,
  onChange,
  type = "text",
  error,
  onBlur,
}: TInputProps) => {
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
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      {error && <p className={s.error}>{error}</p>}
    </div>
  );
};
