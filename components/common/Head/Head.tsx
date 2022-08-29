import React from "react";

export const Head = (props: { title?: string; description?: string }) => {
  React.useEffect(() => {
    document.title = props.title + " | Dogs";
    document
      .querySelector("meta[name='description']")
      ?.setAttribute("content", props.description || "");
  }, [props]);

  return <></>;
};
