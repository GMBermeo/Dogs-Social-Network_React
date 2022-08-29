import React from "react";
import { UserContext } from "../../contexts/UserContext";
import { PHOTO_GET } from "../../lib/api";
import { useFetch } from "../../lib/hooks";
import { TComment } from "../../lib/types/TComment";
import { PhotoCommentForm } from "./PhotoCommentsForm";
import s from "./PhotoComments.module.css";
import { Loading } from "../ui";

export const PhotoComments = (props: {
  id: number;
  single: boolean | undefined;
}) => {
  const commentsSection = React.useRef<any>(null);
  const { login } = React.useContext(UserContext);
  const [comments, setComments] = React.useState<TComment[]>();
  const { data, loading, error, request } = useFetch();

  React.useEffect(() => {
    const fetchData = async () => {
      const { url, options } = PHOTO_GET(props.id);
      const { json } = await request(url, options);
      const jsonComments = await json.comments;
      setComments(jsonComments);
    };
    fetchData();
  }, [props.id]);

  React.useEffect(() => {
    if (commentsSection.current) {
      commentsSection.current.scrollTop = commentsSection.current.scrollHeight;
    }
  }, [comments]);

  loading && <Loading />;
  return (
    <>
      <ul
        ref={commentsSection}
        className={`${s.comments} ${props.single ? s.single : ""}`}
      >
        {comments &&
          comments.map((comment) => (
            <li key={comment.comment_ID}>
              <b>@{comment.comment_author}: </b>
              <span>{comment.comment_content}</span>
            </li>
          ))}
      </ul>
      {login && (
        <PhotoCommentForm single={props.single} setComments={setComments} />
      )}
    </>
  );
};
