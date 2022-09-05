/* eslint-disable @next/next/no-img-element */
import React, { SyntheticEvent } from "react";
import s from "./Image.module.css";
import { TImageProps } from "../../../lib/types/TImage";

export const Image = ({ alt, ...props }: TImageProps) => {
  const [skeleton, setSkeleton] = React.useState(true);

  function handleLoad(event: SyntheticEvent<HTMLImageElement>) {
    const target = event.target as HTMLElement;
    setSkeleton(false);
    target.style.opacity = "1";
  }

  return (
    <div className={s.wrapper}>
      {skeleton && <div className={s.skeleton}></div>}
      <img onLoad={handleLoad} className={s.img} alt={alt} {...props} />
    </div>
  );
};
