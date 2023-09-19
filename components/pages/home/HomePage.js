import { useContext, useEffect } from "react";
import { ScrollView, View } from "react-native";
import { styles } from "../../../shared/Styles";
import { LoggedUserContext } from "../../../shared/context/LoggedUserContext";
import { NotificationContextProvider } from "../../../shared/context/NotificationContext";
import { Legend, NotificationsList } from "../../molecules";
import { NextShiftCard } from "../../molecules/cards/NextShiftCard";
import { Calendar } from "../../molecules/calendar/Calendar";

export function HomePage({ navigation }) {
  const { isLoggedIn, isWorker } = useContext(LoggedUserContext);
  useEffect(() => {
    if (!isLoggedIn) navigation.navigate("login");
  });
  return (
    <ScrollView style={{ ...styles.page, ...styles.homePage }}>
      <View style={{ ...styles.page, ...styles.homePage }}>
        <View style={styles.pageElementContainer}>
          <NextShiftCard />
        </View>

        {isWorker && (
          <View>
            <View style={styles.pageElementContainer}>
              <Legend />
            </View>
            <View >
              <Calendar />
            </View>
          </View>
        )}

        <NotificationContextProvider>
          <NotificationsList />
        </NotificationContextProvider>
      </View>
    </ScrollView>
  );
}
