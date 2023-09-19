import { View, ScrollView } from "react-native";
import { NextShiftCard } from "../../molecules/cards/NextShiftCard";
import { styles } from "../../../shared/Styles";
import { NotificationContextProvider } from "./../../../shared/context/NotificationContext";
import { NotificationsList } from "../../molecules";

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
