import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ children }) => {
  const logged = localStorage.getItem("user") ?? "";

  return logged ? children : <Navigate to="/" />;
};
