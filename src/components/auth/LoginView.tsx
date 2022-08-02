import React from "react";
import { Link } from "react-router-dom";
import { Input, Button } from "../ui/index";
import useForm from "../../lib/hooks/useForm";
import { TOKEN_POST, USER_GET } from "../../lib/api";

const LoginView = () => {
  const username = useForm();
  const password = useForm();

  React.useEffect(() => {
    const token = window.localStorage.getItem("token");
    if (token) {
      getUser(token);
    }
  });

  async function getUser(token: string) {
    const { url, options } = USER_GET(token);
    const response = await fetch(url, options);
    const json = await response.json();
    console.log("getUser:", json);
  }

  async function handleLogin(event: { preventDefault: () => void }) {
    event.preventDefault();

    if (username.validate() && password.validate()) {
      const { url, options } = TOKEN_POST({
        username: username.value,
        password: password.value,
      });

      const response = await fetch(url, options);
      const json = await response.json();
      window.localStorage.setItem("token", json.token);
      getUser(json.token);
    }
  }

  return (
    <section>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <Input id="username" label="Username" {...username} />
        <Input id="password" label="Password" type="password" {...password} />
        <Button>Login</Button>
      </form>
      <Link to="/login/new">Create</Link>
    </section>
  );
};

export default LoginView;
