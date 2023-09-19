import { createContext, useState, useEffect } from "react";
import api from "../api";

const initalValue = {
  firstName: null,
  lastName: null,
  email: null,
  role: null,
  id: null,
};

export const LoggedUserContext = createContext([]);

export function LoggedUserContextProvider(props) {
  const { children } = props;
  const [loggedUser, setLoggedUser] = useState(initalValue);

  function logInUser({email, password}) {
    api.get("users").then((result) => {
      let users = result.data;
      const newLoggedUser = users.find((user) => user.email === email);
      if (newLoggedUser) {
        setLoggedUser(newLoggedUser);
      }
    });
  }

  function logOutUser() {
    setLoggedUser(initalValue)
  }

  function isWorker() {
    return loggedUser.role === "worker";
  }

  function isManager() {
    return loggedUser.role === "manager";
  }

  const isLoggedIn = loggedUser.id !== null;

  return (
    <LoggedUserContext.Provider
      value={{
        loggedUser,
        logInUser,
        logOutUser,
        setLoggedUser,
        isWorker,
        isManager,
        isLoggedIn,
      }}
    >
      {children}
    </LoggedUserContext.Provider>
  );
}
