import React from "react";

const FormButton = ({ cols = "2", children }) => {
  return (
    <button
      className={
        `col-span-${cols} ` +
        "mt-2 mb-8 w-full rounded-sm bg-red-400 px-6 py-2 text-sm font-medium uppercase text-white"
      }
    >
      {children}
    </button>
  );
};

export default FormButton;
