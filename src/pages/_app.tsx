import React from "react";
import "../assets/css/app.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header, Footer } from "../components/common";
import Home from "./home";
import Login from "./login";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login/*" element={<Login />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
