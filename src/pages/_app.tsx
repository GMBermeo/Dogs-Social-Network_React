import React from "react";
import "../assets/css/app.css";
import "../assets/css/animations.css";
import "../assets/css/headings.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header, Footer } from "../components/common";
import { PrivateRoute } from "../components/auth/";
import Home from "./home";
import Login from "./login";
import User from "./user";
import { UserStorage } from "../contexts/UserContext";

function App() {
  return (
    <BrowserRouter>
      <UserStorage>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login/*" element={<Login />} />
          <Route
            path="myAccount/*"
            element={
              <PrivateRoute>
                <User />
              </PrivateRoute>
            }
          />
        </Routes>
        <Footer />
      </UserStorage>
    </BrowserRouter>
  );
}

export default App;
