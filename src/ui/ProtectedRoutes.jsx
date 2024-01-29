import { isBefore } from "date-fns";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ProtectedRoutes = ({ children }) => {
  const navigate = useNavigate();

  let isAuthenticated = false;
  const userStr = localStorage.getItem("user");

  // Check if there is logged in user
  const user = userStr && JSON.parse(userStr);

  if (user) {
    isAuthenticated = isBefore(Date.now(), user.tokenExpiresIn);
  }

  useEffect(() => {
    if (!user || !isAuthenticated) {
      navigate("/login");
    }
  }, [navigate, user]);

  if (isAuthenticated) return children;
};

export default ProtectedRoutes;
