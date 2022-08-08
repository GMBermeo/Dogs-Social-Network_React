import { Comment } from "./Comment";

export interface Photo {
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

export interface PhotoDetails {
  comments: Comment[];
  photo: Photo;
}
