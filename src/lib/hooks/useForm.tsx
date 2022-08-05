import React from "react";

const types = {
  email: {
    regex:
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: "Invalid email address.",
  },
  password: {
    regex: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/,
    message:
      "Passwords must be at least 8 characters and contain at least one number, one uppercase and one lowercase letter, and one special character.",
  },
};

const useForm = (type?: string) => {
  const [value, setValue] = React.useState("");
  const [error, setError] = React.useState<string>();

  function validate(value: string): boolean {
    if (value.length === 0) {
      setError("Required.");
      return false;
    } else if (type !== undefined) {
      if (types[type as keyof typeof types].regex.test(value)) {
        setError(undefined);
        return true;
      } else {
        setError(types[type as keyof typeof types].message);
        return false;
      }
    } else {
      setError(undefined);
      return true;
    }
  }

  function onChange({ target }: React.ChangeEvent<HTMLInputElement>) {
    if (error) {
      validate(target.value);
    }
    setValue(target.value);
  }

  return {
    value,
    error,
    setValue,
    onChange,
    validate: () => validate(value),
    onBlur: () => validate(value),
  };
};

export default useForm;
