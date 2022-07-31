import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../assets/css/app.css";
import Footer from "../components/common/Footer/Footer";
import Header from "../components/common/Header/Header";
import Home from "./home";
import Login from "./login/login";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
