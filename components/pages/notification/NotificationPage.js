import { ScrollView, View } from "react-native";
import { styles } from "../../../shared/Styles";
import { NotificationsList } from "../../organisms";
import { NotificationContextProvider } from "./../../../shared/context/NotificationContext";

export function NotificationPage() {
  return (
    <ScrollView style={{ ...styles.page }}>
      <View style={{ ...styles.page }}>

        <NotificationContextProvider>
          <NotificationsList />
        </NotificationContextProvider>
        
      </View>
    </ScrollView>
  );
}
