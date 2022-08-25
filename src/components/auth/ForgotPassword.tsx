import React from "react";
import { PASSWORD_LOST } from "../../lib/api";
import { useFetch, useForm } from "../../lib/hooks";
import { Button, Error, Input } from "../ui";

export const ForgotPassword = () => {
  const login = useForm();
  const { data, loading, error, request } = useFetch();
  console.log(window.location);

  async function sendResetEmail(event: { preventDefault: () => void }) {
    event.preventDefault();
    if (login.validate()) {
      const { url, options } = PASSWORD_LOST({
        login: login.value,
        url: window.location.href.replace("forgotPassword", "reset"),
      });
      const { json } = await request(url, options);
    }
  }

  return (
    <section>
      <h1 className="title">Reset your password</h1>
      {data ? (
        <p className="text-green-600">{data}</p>
      ) : (
        <form onSubmit={sendResetEmail}>
          <Input
            label="E-mail / Username"
            type="text"
            name="login"
            {...login}
          />
          {loading ? (
            <Button disabled>Sending...</Button>
          ) : (
            <Button>Send me the reset link</Button>
          )}
        </form>
      )}

      <Error error={error} />
    </section>
  );
};
