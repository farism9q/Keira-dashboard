import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useIsValidToken } from "../features/authentication/useIsValidToken";

const ProtectedRoutes = ({ children }) => {
  const navigate = useNavigate();
  const userStr = localStorage.getItem("user");

  // 1- Check if there is logged in user
  const user = userStr && JSON.parse(userStr);

  // 2- Check if the token still valid
  const { isValidToken, isLoading } = useIsValidToken();

  useEffect(() => {
    console.log(user);
    if ((!user || !isValidToken) && !isLoading) {
      navigate("/login");
    }
  }, [navigate, user, isValidToken, isLoading]);

  if (isValidToken) return children;
};

export default ProtectedRoutes;
