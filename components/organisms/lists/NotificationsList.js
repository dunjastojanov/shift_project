import { View } from "react-native";
import { styles } from "../../../shared/Styles";
import { NotificationCard } from "../cards/NotificationCard";
import { useContext } from "react";
import { NotificationContext } from "../../../shared/context/NotificationContext";
import { LoggedUserContext } from './../../../shared/context/LoggedUserContext';

export function NotificationsList() {
  const { notifications } = useContext(NotificationContext);
  const {isManager, isWorker} = useContext(LoggedUserContext)
  
  function show(notification) {
    if (notification.type === "request") {
      let header = notification.header.toLocaleLowerCase(); 
      if (header.includes("sick") && isManager()) return true;
      if (header.includes("vacation") && isManager()) return true;
      if (header.includes("switch") && isWorker()) return true;
      else return false;
    }
    return true;
  }

  return (
    <View style={styles.pageElementContainer}>
      {notifications.map((notification, index) => {
        if (show(notification)) return <NotificationCard notification={notification} key={index} />;
      })}
    </View>
  );
}
