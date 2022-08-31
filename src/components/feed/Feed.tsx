import React from "react";
import { FeedModal } from "./FeedModal";
import { FeedPhotos } from "./FeedPhotos";
import { ModalContext } from "../../contexts/ModalContext";

export const Feed = ({ user = 0 }: any) => {
  const { modalOpen } = React.useContext(ModalContext) ?? {};
  const [pages, setPages] = React.useState([1]);
  const [infinite, setInfinite] = React.useState<boolean>(true);
  // const [modalPhoto, setModalPhoto] = React.useState<Photo>();

  React.useEffect(() => {
    let wait = false;
    function infiniteScroll() {
      if (infinite) {
        const scroll = window.scrollY;
        const height = document.body.offsetHeight - window.innerHeight;
        if (scroll > height * 0.75 && !wait && infinite) {
          setPages((pages) => [...pages, pages.length + 1]);
          wait = true;
          setTimeout(() => {
            wait = false;
          }, 500);
        }
      }
    }
    window.addEventListener("wheel", infiniteScroll);
    window.addEventListener("scroll", infiniteScroll);
    return () => {
      window.removeEventListener("wheel", infiniteScroll);
      window.removeEventListener("scroll", infiniteScroll);
    };
  }, [infinite]);

  return (
    <div>
      {modalOpen && <FeedModal />}
      {pages.map((page: number) => (
        <FeedPhotos
          key={page}
          user={user}
          page={page}
          setInfinite={setInfinite}
          total={6}
        />
      ))}
    </div>
  );
};
