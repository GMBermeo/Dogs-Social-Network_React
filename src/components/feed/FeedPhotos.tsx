import React from "react";
import { PHOTOS_GET } from "../../lib/api";
import { useFetch } from "../../lib/hooks";
import { Error, Loading } from "../ui";
import { FeedPhotosItem } from "./FeedPhotosItem";
import { TPhoto } from "../../lib/types/TPhoto";
import s from "./FeedPhotos.module.css";

export const FeedPhotos = () => {
  const { data, loading, error, request } = useFetch();

  React.useEffect(() => {
    async function fetchPhotos(): Promise<void> {
      const { url, options } = PHOTOS_GET({ page: 1, total: 6, user: 0 });
      const { json } = await request(url, options);
    }
    fetchPhotos();
  }, [request]);

  loading && <Loading />;
  error && <Error error={error} />;
  if (data) {
    return (
      <div>
        <ul className={`${s.feed} animeLeft`}>
          {data.map((photo: TPhoto) => (
            <FeedPhotosItem key={photo.id} photo={photo} />
          ))}
        </ul>
      </div>
    );
  } else return null;
};
