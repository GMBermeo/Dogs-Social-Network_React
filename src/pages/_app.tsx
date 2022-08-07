import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../assets/css/app.css";
import "../assets/css/animations.css";
import "../assets/css/headings.css";
import { Home, Login, User } from "./";
import { Header, Footer } from "../components/common";
import { PrivateRoute } from "../components/auth";
import { UserStorage } from "../contexts/UserContext";

export function App() {
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
