import React from "react";
import { Routes, Route } from "react-router-dom";
import {
  LoginView,
  SignUpView,
  ForgotPassword,
  PasswordReset,
} from "../components/auth";

const Login = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginView />} />
        <Route path="SignUp" element={<SignUpView />} />
        <Route path="ForgotPassword" element={<ForgotPassword />} />
        <Route path="Reset" element={<PasswordReset />} />
      </Routes>
    </div>
  );
};

export default Login;
