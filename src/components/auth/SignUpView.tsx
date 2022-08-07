import React from "react";
import { UserContext } from "../../contexts/UserContext";
import { USER_POST } from "../../lib/api";
import { useForm, useFetch } from "../../lib/hooks/";
import { Button, Error, Input } from "../ui";

export const SignUpView = () => {
  const username = useForm();
  const email = useForm("email");
  const password = useForm("password");

  const { userLogin } = React.useContext(UserContext);
  const { loading, error, request } = useFetch();

  async function newUser(event: { preventDefault: () => void }) {
    event.preventDefault();
    if (username.validate() && password.validate() && email.validate()) {
      const { url, options } = USER_POST({
        username: username.value,
        email: email.value,
        password: password.value,
      });
      const { response } = await request(url, options);
      if (response?.ok) userLogin(username.value, password.value);
    }
  }

  return (
    <section className="animeLeft">
      <h1 className="title">Sign Up</h1>

      <form onSubmit={newUser}>
        <Input label="Username" id="username" {...username} />
        <Input label="Password" id="password" type="password" {...password} />
        <Input label="E-mail" id="email" {...email} />
        {loading ? (
          <Button>Creating...</Button>
        ) : (
          <Button>Create account</Button>
        )}
        {error && <Error error={error} />}
      </form>
    </section>
  );
};
