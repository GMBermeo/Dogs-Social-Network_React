import React from "react";
import { UserContext } from "../../contexts/UserContext";
import { USER_POST } from "../../lib/api";
import useForm from "../../lib/hooks/useForm";
import { Button, Input } from "../ui";

const SignUpView = () => {
  const username = useForm();
  const email = useForm("email");
  const password = useForm("password");

  const { userLogin } = React.useContext(UserContext);

  async function newUser(event: { preventDefault: () => void }) {
    event.preventDefault();
    const { url, options } = USER_POST({
      username: username.value,
      email: email.value,
      password: password.value,
    });
    const response = await fetch(url, options);
    if (response.ok) userLogin(username.value, password.value);
    console.log(response);
  }

  return (
    <section className="animateLeft">
      <h1 className="title">Sign Up</h1>

      <form onSubmit={newUser}>
        <Input label="Username" id="username" {...username} />
        <Input label="Password" id="password" type="password" {...password} />
        <Input label="E-mail" id="email" {...email} />
        <Button>Create account</Button>
      </form>
    </section>
  );
};

export default SignUpView;
