import React from "react";
import { Link } from "react-router-dom";
import { Input, Button } from "../ui/index";
import useForm from "../../lib/hooks/useForm";
import { UserContext } from "../../contexts/UserContext";

const LoginView = () => {
  const username = useForm();
  const password = useForm();

  const { userLogin, data, error, loading } = React.useContext(UserContext);

  async function handleLogin(event: { preventDefault: () => void }) {
    event.preventDefault();

    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value);
    }
  }

  return (
    <section className="px-6 pt-6">
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <Input id="username" label="Username" {...username} />
        <Input id="password" label="Password" type="password" {...password} />
        <Button>Login</Button>
        {error && error}
      </form>
      <br></br>
      <Link to="/login/new">Sign Up</Link>
    </section>
  );
};

export default LoginView;
