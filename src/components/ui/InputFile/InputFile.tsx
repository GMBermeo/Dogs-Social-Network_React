import React from "react";
import s from "./InputFile.module.css";

interface InputFileProps {
  id: string;
  label: string;
  //   value: string | number;
  //   error: string | undefined;
  onChange: ({ target }: React.ChangeEvent<HTMLInputElement>) => void;
  //   onBlur: () => boolean | undefined;
  //   validate: () => boolean | undefined;
}

export const InputFile = ({ id, label, ...props }: InputFileProps) => {
  return (
    <div className={s.wrapper}>
      <label htmlFor={id} className={s.label}>
        {label}
      </label>
      <input
        id={id}
        name={id}
        type="file"
        {...props}
        // onChange={({ target }) => setValue(target.files[0])}
        className={s.input}
      />
    </div>
  );
};
