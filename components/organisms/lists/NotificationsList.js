import { View } from "react-native";
import { styles } from "../../../shared/Styles";
import { NotificationCard } from "../cards/NotificationCard";
import { useContext } from "react";
import { NotificationContext } from "../../../shared/context/NotificationContext";

export function NotificationsList() {
  const { notifications } = useContext(NotificationContext);
  return (
    <View style={styles.pageElementContainer}>
      {notifications.map((notification, index) => {
        return <NotificationCard notification={notification} key={index} />;
      })}
    </View>
  );
}
