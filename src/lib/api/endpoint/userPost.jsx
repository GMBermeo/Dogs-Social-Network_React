import React from "react";
import FormButton from "../../../components/form/button";
import Input from "../../../components/form/input";

const UserPost = () => {
  const [username, setUsername] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  function handleSubmit(event) {
    event.preventDefault();
    fetch("https://dogsapi.origamid.dev/json/api/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        email,
        password,
      }),
    })
      .then((response) => {
        console.log("response", response);
        return response.json();
      })
      .then((json) => {
        console.log("json", json);
        return json;
      });
  }

  return (
    <form onSubmit={handleSubmit} className="mx-4 grid grid-cols-2 gap-x-4">
      <Input
        label="E-mail"
        id="email"
        value={email}
        setValue={setEmail}
        cols="2"
        required
      />
      <Input
        label="Username"
        id="username"
        value={username}
        setValue={setUsername}
        required
      />
      <Input
        label="Senha"
        type="password"
        id="password"
        value={password}
        setValue={setPassword}
        required
      />

      <FormButton>Criar Usuário</FormButton>
    </form>
  );
};

export default UserPost;
