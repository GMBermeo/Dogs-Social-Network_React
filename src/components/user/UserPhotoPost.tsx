import React from "react";
import { useNavigate } from "react-router-dom";
import { PHOTO_POST } from "../../lib/api";
import { useFetch, useForm } from "../../lib/hooks";
import { Button, Error, Input, InputFile } from "../ui";
import s from "./UserPhotoPost.module.css";

export const UserPhotoPost = () => {
  const nome = useForm();
  const peso = useForm();
  const idade = useForm();
  const [img, setImg] = React.useState<{ preview: string; raw: Blob }>({
    preview: "",
    raw: new Blob(),
  });
  const { data, error, loading, request } = useFetch();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (data) navigate("/myAccount");
  }, [data, navigate]);

  function postPhoto(event: { preventDefault: () => void }) {
    event.preventDefault();
    const formData = new FormData();
    formData.append("img", img.raw);
    formData.append("nome", nome.value);
    formData.append("peso", peso.value);
    formData.append("idade", idade.value);

    const token = window.localStorage.getItem("token");
    if (
      token &&
      nome.validate() &&
      peso.validate() &&
      idade.validate() &&
      img.raw
    ) {
      const { url, options } = PHOTO_POST(formData, token);
      request(url, options);
    }
  }

  function handleImgChange({ target }: React.ChangeEvent<HTMLInputElement>) {
    target?.files?.length &&
      setImg({
        preview: URL.createObjectURL(target.files[0]),
        raw: target.files[0],
      });
  }

  return (
    <section className={`${s.photoPost} animeLeft`}>
      <form onSubmit={postPhoto}>
        <Input id="nome" label="Name" {...nome} />
        <Input id="peso" label="Weight" type="number" {...peso} />
        <Input id="idade" label="Age" type="number" {...idade} />
        <InputFile id="img" label="Photo" onChange={handleImgChange} />
        {loading ? <Button>Uploading...</Button> : <Button>Post</Button>}
        {error && <Error error={error} />}
      </form>

      {img.preview && (
        <div
          className={s.preview}
          style={{ backgroundImage: `url("${img.preview}")` }}
        ></div>
      )}
    </section>
  );
};
