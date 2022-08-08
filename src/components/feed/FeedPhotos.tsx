import React from "react";
import { PHOTOS_GET } from "../../lib/api";
import { useFetch } from "../../lib/hooks";
import { Error, Loading } from "../ui";
import { FeedPhotosItem } from "./FeedPhotosItem";
import { Photo, PhotoDetails } from "../../lib/types/Photo";
import s from "./FeedPhotos.module.css";

export const FeedPhotos = () => {
  const { data, loading, error, request } = useFetch();

  React.useEffect(() => {
    async function fetchPhotos() {
      const { url, options } = PHOTOS_GET({ page: 1, total: 6, user: 0 });
      const { json } = await request(url, options);
    }
    fetchPhotos();
  }, [request]);

  error && <Error error={error} />;
  loading && <Loading />;
  if (data) {
    return (
      <div>
        <ul className={`${s.feed} animeLeft`}>
          {data.map((photo: Photo) => (
            <FeedPhotosItem key={photo.id} photo={photo} />
          ))}
        </ul>
      </div>
    );
  } else return null;
};
