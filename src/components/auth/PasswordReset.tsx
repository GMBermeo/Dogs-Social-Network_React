import React from "react";
import { useNavigate, useNavigationType } from "react-router-dom";
import { URLSearchParams } from "url";
import { PASSWORD_RESET } from "../../lib/api";
import { useFetch, useForm } from "../../lib/hooks";
import { Head } from "../common";
import { Button, Error, Input } from "../ui";

export const PasswordReset = () => {
  const [login, setLogin] = React.useState("");
  const [key, setKey] = React.useState("");
  const password = useForm("password");
  const { error, loading, request } = useFetch();
  const navigate = useNavigate();

  React.useEffect(() => {
    // 💥NOT WORKING💥
    // 💥Uncaught Error: Module "url" has been externalized for browser compatibility. Cannot access "url.URLSearchParams" in client code.💥
    // const params = new URLSearchParams(window.location.search);
    // const key = params.get("key");
    // const login = params.get("login");
    // if (key) setKey(key);
    // if (login) setLogin(login);
  }, []);

  async function setNewPassword(event: { preventDefault: () => void }) {
    event.preventDefault();
    if (password.validate()) {
      const { url, options } = PASSWORD_RESET({
        login,
        key,
        password: password.value,
      });
      const { response } = await request(url, options);
      if (response && response.ok) navigate("/login");
    }
  }

  return (
    <div>
      <Head title="Set a new password" />
      <h1 className="title">Set a new password</h1>
      <form onSubmit={setNewPassword}>
        <Input
          label="New password"
          type="password"
          name="password"
          {...password}
        />
        {loading ? (
          <Button disabled>Setting...</Button>
        ) : (
          <Button>Set password</Button>
        )}
      </form>
      <Error error={error} />
    </div>
  );
};
