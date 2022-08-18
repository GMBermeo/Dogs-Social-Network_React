import React from "react";
import { ModalContext } from "../../contexts/ModalContext";
import { UserContext } from "../../contexts/UserContext";
import { ReactComponent as SendSVG } from "../../assets/svg/send.svg";
import { useFetch } from "../../lib/hooks";
import { COMMENT_POST } from "../../lib/api";
import { Error } from "../ui/Helper/Error";
import s from "./PhotoCommentsForm.module.css";

export const PhotoCommentForm = (
  { setComments }: any,
  single: boolean | undefined
) => {
  const { request, error } = useFetch();
  const login = React.useContext(UserContext);
  const { modalPhoto } = React.useContext(ModalContext);
  const [comment, setComment] = React.useState<string>("");

  async function sendComment(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const { url, options } = COMMENT_POST(modalPhoto.id, { comment });
    const { response, json } = await request(url, options);
    if (response && response.ok) {
      setComment("");
      setComments((comments: Comment[]) => [...comments, json]);
    }
  }

  return (
    <form
      onSubmit={sendComment}
      className={`${s.form} ${single ? s.single : ""}`}
    >
      <textarea
        id="comment"
        name="comment"
        placeholder="Write a comment..."
        value={comment}
        onChange={({ target }) => setComment(target.value)}
        className={s.textarea}
      />
      <button className={s.button}>
        <SendSVG />
      </button>
      <Error error={error} />
    </form>
  );
};
