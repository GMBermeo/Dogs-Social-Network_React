import React from "react";
import "../assets/css/app.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header, Footer } from "../components/common";
import Home from "./home";
import Login from "./login";
import { UserStorage } from "../contexts/UserContext";

function App() {
  return (
    <BrowserRouter>
      <UserStorage>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login/*" element={<Login />} />
        </Routes>
        <Footer />
      </UserStorage>
    </BrowserRouter>
  );
}

export default App;
