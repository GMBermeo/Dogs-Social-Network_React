import React from "react";
import s from "./InputFile.module.css";
import { TInputFileProps } from "../../../lib/types/TInputFile";

export const InputFile = ({ id, label, ...props }: TInputFileProps) => {
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
