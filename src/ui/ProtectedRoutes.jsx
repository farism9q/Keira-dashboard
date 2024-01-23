import { isAfter } from "date-fns";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ProtectedRoutes = ({ children }) => {
  const navigate = useNavigate();
  const userStr = localStorage.getItem("user");

  // Check if there is logged in user
  const user = userStr && JSON.parse(userStr);

  useEffect(() => {
    if (!user || isAfter(Date.now(), user.tokenExpiresIn)) {
      navigate("/login");
    }
  }, [navigate, user]);

  return children;
};

export default ProtectedRoutes;
