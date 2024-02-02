import { createContext, useContext } from "react";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  let user = localStorage.getItem("user");

  if (user) {
    user = JSON.parse(user);
  }

  return (
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  );
};

function useUserContext() {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error("User context was used outside user provider");
  }
  return context;
}

export { UserProvider, useUserContext };
