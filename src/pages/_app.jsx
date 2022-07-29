import React from "react";
import "../assets/app.css";
import Heading from "../components/heading";
import UserPost from "../lib/api/endpoint/userPost";
import TokenPost from "../lib/api/endpoint/tokenPost";
import PhotoPost from "../lib/api/endpoint/photoPost";
import PhotoGet from "../lib/api/endpoint/photoGet";

function App() {
  return (
    <div>
      <h1 className="mt-4 text-center text-3xl font-bold underline decoration-red-400">
        Application Programming Interfaces
      </h1>
      <div className="mx-auto my-4 flex max-w-sm flex-col rounded-lg bg-slate-50 p-6 shadow-2xl md:max-w-md">
        <Heading>User POST</Heading>
        <UserPost />
        <Heading>Token POST</Heading>
        <TokenPost />
        <Heading>Photo POST</Heading>
        <PhotoPost />
        <Heading>Photo GET</Heading>
        <PhotoGet />
      </div>
    </div>
  );
}

export default App;
