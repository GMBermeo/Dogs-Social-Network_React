import React from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";

const PrivateRoute: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { login } = React.useContext(UserContext);

  return login ? <>{children}</> : <Navigate to="/login" />;
};

export default PrivateRoute;
