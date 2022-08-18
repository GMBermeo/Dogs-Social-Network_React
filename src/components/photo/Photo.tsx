import React from "react";
import { useParams } from "react-router-dom";
import { ModalContext } from "../../contexts/ModalContext";
import { PHOTO_GET } from "../../lib/api";
import { useFetch } from "../../lib/hooks";
import { Error, Loading } from "../ui";
import { PhotoContent } from "./PhotoContent";

export const Photo = () => {
  const { id } = useParams();
  const { data, loading, error, request } = useFetch();
  const { closeModal } = React.useContext(ModalContext);

  React.useEffect(() => {
    if (id) {
      const { url, options } = PHOTO_GET(id);
      request(url, options);
    }
  }, [request, id]);

  if (error) return <Error error={error} />;
  if (loading) return <Loading />;
  if (data)
    return (
      <section className="mainContainer container">
        <PhotoContent single={true} data={data} />
      </section>
    );
  else return null;
};
