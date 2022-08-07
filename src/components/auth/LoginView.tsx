import React from "react";
import { Link } from "react-router-dom";
import { Input, Button, Error } from "../ui/";
import { useForm } from "../../lib/hooks/";
import { UserContext } from "../../contexts/UserContext";
import s from "./auth.module.css";
import btn from "../../components/ui/Button/Button.module.css";

export const LoginView = () => {
  const username = useForm();
  const password = useForm();

  const { userLogin, error, loading } = React.useContext(UserContext) ?? {};

  async function handleLogin(event: { preventDefault: () => void }) {
    event.preventDefault();

    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value);
    }
  }

  return (
    <section className="animeLeft px-6">
      <h1>Login</h1>
      <form onSubmit={handleLogin} className={s.form}>
        <Input id="username" label="Username" {...username} />
        <Input id="password" label="Password" type="password" {...password} />
        {error && <Error error={error} />}
        {loading ? (
          <Button disabled>Loading...</Button>
        ) : (
          <Button>Log In</Button>
        )}
      </form>

      <Link to="/login/lost" className={s.perdeu}>
        Lost password?
      </Link>
      <div className={s.signup}>
        <h2 className={s.subtitle}>Sign Up</h2>
        <p>Don't have an account?</p>
        <Link to="/login/signup" className={btn.button}>
          Create new account
        </Link>
      </div>
    </section>
  );
};
