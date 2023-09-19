import { createContext, useState, useEffect } from "react";
import api from "../api";

export const UserContext = createContext([]);

export function UserContextProvider(props) {
  const { children } = props;
  const [users, setUsers] = useState([]);

  function fetchUsers() {
    api.get("users").then((result) => {
      setUsers(result.data);
    });
  }

  useEffect(() => {
    fetchUsers()
  }, []);

  return <UserContext.Provider value={{users, fetchUsers, setUsers}}>{children}</UserContext.Provider>;
}
