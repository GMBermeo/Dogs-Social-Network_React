import React from "react";

const Input = ({ id, label, setValue, cols = "2", ...props }) => {
  return (
    <div className={`col-span-${cols} ` + "mb-4 mt-2"}>
      <label htmlFor={id} className="text-base font-medium">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type="file"
        {...props}
        onChange={({ target }) => setValue(target.files[0])}
        className="mt-2 block w-full text-sm text-slate-500 file:mr-4 file:rounded-full file:border-0 file:bg-red-50 file:py-2 file:px-4 file:text-sm file:font-semibold file:text-red-500 hover:file:bg-red-100"
      />
    </div>
  );
};

export default Input;
