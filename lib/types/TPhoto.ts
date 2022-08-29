import { TComment } from "./TComment";

export interface TPhoto {
  acessos: number;
  author: string;
  date: string;
  id: number;
  idade: number;
  peso: number;
  src: string;
  title: string;
  total_comments: string;
}

export interface TPhotoDetails {
  comments: TComment[];
  photo: TPhoto;
}
