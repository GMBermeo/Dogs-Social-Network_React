import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../assets/css/app.css";
import "../assets/css/animations.css";
import "../assets/css/headings.css";
import { Home, Login, User, NotFound } from "./";
import { Header, Footer } from "../components/common";
import { PrivateRoute } from "../components/auth";
import { UserStorage } from "../contexts/UserContext";
import { ModalStorage } from "../contexts/ModalContext";
import { Photo } from "../components/photo/Photo";
import { UserProfile } from "../components/user";

export function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <UserStorage>
          <ModalStorage>
            <Header />
            <main className="AppBody">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="login/*" element={<Login />} />
                <Route path="photo/:id" element={<Photo />} />
                <Route path="profile/:user" element={<UserProfile />} />
                <Route
                  path="myAccount/*"
                  element={
                    <PrivateRoute>
                      <User />
                    </PrivateRoute>
                  }
                />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
          </ModalStorage>
        </UserStorage>
      </BrowserRouter>
    </div>
  );
}
