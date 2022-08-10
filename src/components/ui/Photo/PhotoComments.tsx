import React from "react";
import { UserContext } from "../../../contexts/UserContext";
import { PHOTO_GET } from "../../../lib/api";
import { useFetch } from "../../../lib/hooks";
import { Comment } from "../../../lib/types/Comment";
import { PhotoCommentForm } from "./PhotoCommentForm";
import s from "./PhotoComments.module.css";

export const PhotoComments = (props: { id: number }) => {
  let tempComments: Comment[] = [];
  const { login } = React.useContext(UserContext);
  const [comments, setComments] = React.useState<Comment[]>(tempComments);
  const { data, loading, error, request } = useFetch();

  React.useEffect(() => {
    async function fetchComments() {
      console.log("fetch Comments id", props.id);
      const { url, options } = PHOTO_GET(props.id);
      const { json } = await request(url, options);
      tempComments = await json.comments;
      setComments(tempComments);
    }
    fetchComments();
  }, [props.id]);

  React.useEffect(() => {
    setComments(tempComments);
  }, [request]);

  console.log("renderizou Comments");

  loading && <p>Loading...</p>;
  return (
    <>
      <h2>Comments</h2>
      <ul className={s.comments}>
        {comments &&
          comments.map((comment) => (
            <li key={comment.comment_ID}>
              <b>{comment.comment_author}</b>
              <span>{comment.comment_content}</span>
            </li>
          ))}
      </ul>
      {login && <PhotoCommentForm setComments={setComments} />}
    </>
  );
};
