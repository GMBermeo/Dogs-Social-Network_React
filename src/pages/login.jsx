import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginForm from "../components/auth/LoginView";
import SignUpView from "../components/auth/SignUpView";
import ForgotPassword from "../components/auth/ForgotPassword";
import PasswordReset from "../components/auth/PasswordReset";

const Login = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="SignUp" element={<SignUpView />} />
        <Route path="ForgotPassword" element={<ForgotPassword />} />
        <Route path="Reset" element={<PasswordReset />} />
      </Routes>
    </div>
  );
};

export default Login;
