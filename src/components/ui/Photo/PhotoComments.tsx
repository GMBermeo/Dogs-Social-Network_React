import React from "react";
import { PHOTO_GET } from "../../../lib/api";
import { useFetch } from "../../../lib/hooks";
import { Comment } from "../../../lib/types/Comment";

export const PhotoComments = (props: { id: number }) => {
  let tempComments: Comment[] = [];
  const [comments, setComments] = React.useState<Comment[]>(tempComments);
  const { data, loading, error, request } = useFetch();

  React.useEffect(() => {
    async function fetchComments() {
      console.log("id", props.id);
      const { url, options } = PHOTO_GET(props.id);
      const { json } = await request(url, options);
      tempComments = json.comments;
      setComments(tempComments);
      console.log("🔥Comments", tempComments);
    }
    fetchComments();
  }, [props.id]);

  React.useEffect(() => {
    setComments(tempComments);
    console.log("✅Comments", comments);
  }, [data]);

  console.log("renderizou Comments");

  return (
    <div>
      <>
        <h2>Comments</h2>
        <ul>
          {comments.map((comment: Comment) => (
            <li key={comment.comment_ID}>{comment.comment_content}</li>
          ))}
        </ul>
        fim do comments
      </>
    </div>
  );
};
