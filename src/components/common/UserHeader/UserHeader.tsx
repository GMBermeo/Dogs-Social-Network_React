import React from "react";
import { useLocation } from "react-router-dom";
import { UserHeaderNav } from "./UserHeaderNav";

export const UserHeader = () => {
  const [title, setTitle] = React.useState("");
  const location = useLocation();

  React.useEffect(() => {
    const { pathname } = location;
    let titleSub: string = pathname.substring(pathname.lastIndexOf("/") + 1);
    titleSub = titleSub.charAt(0).toUpperCase() + titleSub.slice(1);
    setTitle(titleSub);
  }, [location]);

  return (
    <header className="relative mb-8 mt-4 grid grid-cols-[1fr_auto] items-center">
      <h1 className="title">{title}</h1>
      <UserHeaderNav />
    </header>
  );
};
