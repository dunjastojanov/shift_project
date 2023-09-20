import { useContext } from "react";
import { Pressable, StyleSheet, View } from "react-native";
import { colors } from "../../../shared/Styles";
import { LoggedUserContext } from "../../../shared/context/LoggedUserContext";
import {
  CalendarIcon,
  GroupIcon,
  HomeIcon,
  NotificationIcon,
  ProfileIcon,
  RequestIcon,
} from "../../atoms/icons";

export function NavBar({ state, descriptors, navigation }) {
  const { isLoggedIn, isManager, isWorker } = useContext(LoggedUserContext);
  const navBarIcons = {
    notification: <NotificationIcon style={styles.navIcon} />,
    home: <HomeIcon style={styles.navIcon} />,
    calendar: <CalendarIcon style={styles.navIcon} />,
    group: <GroupIcon style={styles.navIcon} />,
    profile: <ProfileIcon style={styles.navIcon} />,
    request: <RequestIcon style={styles.navIcon} />,
  };

  if (state.routes[state.index].name === "login") {
    return;
  }

  if (isLoggedIn)
    return (
      <View style={styles.navBar}>
        {state.routes.map((route, index) => {
          if (route.name === "request" && isManager()) return;

          if (route.name === "group" && isWorker()) return;

          const { options } = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: "tabPress",
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate({ name: route.name, merge: true });
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: "tabLongPress",
              target: route.key,
            });
          };

          if (navBarIcons[route.name])
            return (
              <Pressable
                key={index}
                accessibilityRole="button"
                accessibilityState={isFocused ? { selected: true } : {}}
                accessibilityLabel={options.tabBarAccessibilityLabel}
                testID={options.tabBarTestID}
                onPress={onPress}
                onLongPress={onLongPress}
              >
                {navBarIcons[route.name]}
              </Pressable>
            );
        })}
      </View>
    );
}

const styles = StyleSheet.create({
  navBar: {
    width: "100%",
    height: 60,
    position: "absolute",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    bottom: 0,
    paddingHorizontal: 15,
    backgroundColor: colors.white,
  },
  navIcon: {
    width: 30,
    height: 30,
  },
});
