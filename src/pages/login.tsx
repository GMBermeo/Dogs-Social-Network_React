import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
import {
  LoginView,
  SignUpView,
  ForgotPassword,
  PasswordReset,
} from "../components/auth";

const Login = () => {
  const { login } = React.useContext(UserContext);

  if (login === true) return <Navigate to="/myAccount" />;
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
