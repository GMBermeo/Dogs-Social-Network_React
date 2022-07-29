import React from "react";
import FormButton from "../../../components/form/button";
import Input from "../../../components/form/input";

const TokenPost = () => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [token, setToken] = React.useState("");

  function handleSubmit(event) {
    event.preventDefault();
    fetch("https://dogsapi.origamid.dev/json/jwt-auth/v1/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    })
      .then((response) => {
        console.log("response", response);
        return response.json();
      })
      .then((json) => {
        console.log("json", json);
        setToken(json.token);
        return json;
      });
  }

  return (
    <form onSubmit={handleSubmit} className="mx-4 grid grid-cols-2 gap-x-4">
      <p className="col-span-2 mb-4 break-all">{token}</p>
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

      <FormButton>Gerar token de autorização</FormButton>
    </form>
  );
};

export default TokenPost;
