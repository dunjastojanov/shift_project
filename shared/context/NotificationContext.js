import { createContext, useState, useEffect } from "react";
import api from "../api";

export const NotificationContext = createContext([]);

export function NotificationContextProvider(props) {
  const { children } = props;
  const [notifications, setNotifications] = useState([]);

  function fetchNotifications() {
    api.get("notifications").then((result) => {
      setNotifications(result.data);
    });
  }

  useEffect(() => {
    fetchNotifications()
  }, []);

  return <NotificationContext.Provider value={{notifications, fetchNotifications, setNotifications}}>{children}</NotificationContext.Provider>;
}
