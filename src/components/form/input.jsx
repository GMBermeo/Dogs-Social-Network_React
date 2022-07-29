import React from "react";

const Input = ({
  id,
  label,
  setValue,
  type = "text",
  cols = "1",
  ...props
}) => {
  return (
    <div className={`col-span-${cols}`}>
      <label htmlFor={id} className="text-base font-medium">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        onChange={({ target }) => setValue(target.value)}
        {...props}
        className={"mb-2 w-full rounded-md border-2 border-red-400 px-2 py-1"}
      />
    </div>
  );
};

export default Input;
