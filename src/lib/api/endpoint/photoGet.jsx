import React from "react";
import FormButton from "../../../components/form/button";
import Input from "../../../components/form/input";

const PhotoGet = () => {
  const [id, setId] = React.useState("");

  function handleSubmit(event) {
    event.preventDefault();
    fetch(`https://dogsapi.origamid.dev/json/api/photo/${id}`)
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
    <>
      <form onSubmit={handleSubmit} className="mx-4 grid grid-cols-1">
        <Input label="Id da foto" id="idFoto" value={id} setValue={setId} />
        <FormButton>Buscar foto</FormButton>
      </form>
    </>
  );
};

export default PhotoGet;
