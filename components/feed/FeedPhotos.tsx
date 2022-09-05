import React from "react";
import { PHOTOS_GET } from "../../lib/api";
import { useFetch } from "../../lib/hooks";
import { Error, Loading } from "../ui";
import { FeedPhotosItem } from "./FeedPhotosItem";
import { TPhoto } from "../../lib/types/TPhoto";
import { TFeedProps } from "../../lib/types/TFeed";
import s from "./FeedPhotos.module.css";

export const FeedPhotos = ({ user, page, total, setInfinite }: TFeedProps) => {
  const { data, error, request } = useFetch();

  React.useEffect(() => {
    async function fetchPhotos(): Promise<void> {
      const { url, options } = PHOTOS_GET({ page, total, user });
      const { response, json } = await request(url, options);
      if (response && response.ok && json.length < total) setInfinite(false);
    }
    fetchPhotos();
  }, [request, user, page, setInfinite, total]);

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
  } else return <Loading />;
};
