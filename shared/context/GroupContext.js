import { createContext, useState, useEffect } from "react";
import api from "../api";

export const GroupContext = createContext([]);

export function GroupContextProvider(props) {
  const { children } = props;
  const [groups, setGroups] = useState([]);

  function fetchGroups() {
    api.get("groups").then((result) => {
      setGroups(result.data);
    });
  }

  useEffect(() => {
    fetchGroups()
  }, []);

  function findGroupById(id) {
    return groups.find(group => group.id === id)
  }

  return <GroupContext.Provider value={{groups, fetchGroups, setGroups, findGroupById}}>{children}</GroupContext.Provider>;
}
