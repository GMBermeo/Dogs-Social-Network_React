import React from "react";
import FormButton from "../../../components/form/button";
import Input from "../../../components/form/input";
import InputFile from "../../../components/form/inputFile";

const PhotoPost = () => {
  const [token, setToken] = React.useState(
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvZG9nc2FwaS5vcmlnYW1pZC5kZXYiLCJpYXQiOjE2NTkxMDU3MTUsIm5iZiI6MTY1OTEwNTcxNSwiZXhwIjoxNjU5MTkyMTE1LCJkYXRhIjp7InVzZXIiOnsiaWQiOiIxNSJ9fX0.8lyEsMihJkjFl_vY2dj7cE8cq--PCZT66VaVgqUqBiY"
  );
  const [nome, setNome] = React.useState("");
  const [peso, setPeso] = React.useState("");
  const [idade, setIdade] = React.useState("");
  const [foto, setFoto] = React.useState("");

  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData();
    formData.append("img", foto);
    formData.append("nome", nome);
    formData.append("peso", peso);
    formData.append("idade", idade);

    fetch("https://dogsapi.origamid.dev/json/api/photo", {
      method: "POST",
      headers: {
        Authorization: "Bearer " + token,
      },
      body: formData,
    })
      .then((response) => {
        console.log("response", response);
        return response.json();
      })
      .then((json) => {
        console.log("json", json);
        console.log("formData", formData);
        return json;
      });
  }

  return (
    <form onSubmit={handleSubmit} className="mx-4 grid grid-cols-3 gap-x-4">
      <Input
        label="Token"
        id="token"
        value={token}
        setValue={setToken}
        cols="3"
        required
      />
      <InputFile cols="3" label="Foto" id="foto" setValue={setFoto} required />
      <Input label="Nome" id="nome" value={nome} setValue={setNome} required />
      <Input
        label="Peso"
        id="peso"
        value={peso}
        setValue={setPeso}
        type="number"
        max="150"
        required
      />
      <Input
        label="Idade"
        id="idade"
        type="number"
        value={idade}
        setValue={setIdade}
        max="30"
        required
      />

      <p className="col-span-3"></p>
      <FormButton cols="3">Postar foto</FormButton>
    </form>
  );
};

export default PhotoPost;
