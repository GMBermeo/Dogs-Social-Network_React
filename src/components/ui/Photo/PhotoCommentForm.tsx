import React from "react";
import { ModalContext } from "../../../contexts/ModalContext";
import { UserContext } from "../../../contexts/UserContext";
import { ReactComponent as SendSVG } from "../../../assets/svg/send.svg";
import { useFetch } from "../../../lib/hooks";
import { COMMENT_POST } from "../../../lib/api";
import { Comment } from "../../../lib/types/Comment";
import { Error } from "../Helper/Error";

export const PhotoCommentForm = ({ setComments }: any) => {
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

  console.log("PhotoCommentForm: modalPhoto.id ", modalPhoto.id);

  return (
    <form onSubmit={sendComment}>
      <textarea
        id="comment"
        name="comment"
        placeholder="Write a comment..."
        value={comment}
        onChange={({ target }) => setComment(target.value)}
      />
      <button>
        <SendSVG />
      </button>
      <Error error={error} />
    </form>
  );
};
