import React from "react";
import s from "./Input.module.css";

interface InputProps {
  id: string;
  label: string;
  value: string | number;
  type?: "text" | "password" | "number";
  error: string | undefined;
  onChange: ({ target }: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: () => boolean | undefined;
  validate: () => boolean | undefined;
}

export const Input = ({
  id,
  label,
  value,
  onChange,
  type = "text",
  error,
  onBlur,
}: InputProps) => {
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
