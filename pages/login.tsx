import React from "react";
import s from "../components/auth/auth.module.css";
import { Routes, Route, Navigate } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
import {
  LoginView,
  SignUpView,
  ForgotPassword,
  PasswordReset,
} from "../components/auth";
import { NotFound } from "./notFound";
import { Head } from "../components/common";

const Login = () => {
  const { login } = React.useContext(UserContext) ?? {};

  if (login === true) return <Navigate to="/myAccount" />;
  return (
    <section className={s.login}>
      <Head title="Login" />
      <div className={s.forms}>
        <Routes>
          <Route path="/" element={<LoginView />} />
          <Route path="signup" element={<SignUpView />} />
          <Route path="forgotPassword" element={<ForgotPassword />} />
          <Route path="reset" element={<PasswordReset />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </section>
  );
};

export default Login;
