import { useNavigation } from "@react-navigation/native";
import React, { useContext, useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { colors } from "../../../shared/Styles";
import { LoggedUserContext } from "../../../shared/context/LoggedUserContext";
import { BackIcon, IconButton, Text } from "../../atoms";
import { ProfilePortrait } from "../../molecules";

const headerTranslation = {
  GroupOverviewPage: "Groups",
  GroupEditPage: "Edit Group",
  GroupAddPage: "Add New Group",
  ProfileOverviewPage: "Profile",
  ProfileEditPage: "Edit Profile",
  CalendarOverviewPage: "Schedules",
  CalendarEditPage: "Edit Schedule",
  CalendarAddPage: "Add New Schedule",
  RequestOverviewPage: "Create a Request",
  SwitchRequestAddPage: "Add New Request",
  SickDayRequestAddPage: "Add New Request",
  VacationRequestAddPage: "Add New Request",
};

export function Header() {
  const navigation = useNavigation();
  const [currentTab, setCurrentTab] = useState("");

  const { loggedUser } = useContext(LoggedUserContext);

  function getHeaderText() {
    const text = currentTab;

    if (text in headerTranslation) return headerTranslation[text];
    return text[0].toUpperCase() + currentTab.slice(1) + "s";
  }

  useEffect(() => {
    const unsubscribe = navigation.addListener("state", (e) => {
      const activeRoute = e.data.state.routes[e.data.state.index];
      setCurrentTab(activeRoute.name);
    });
    return unsubscribe;
  }, [navigation]);

  const goBack = () => {
    if (navigation.canGoBack() && currentTab in headerTranslation) {
      navigation.goBack();
    }
  };

  if (currentTab === "home") {
    return (
      <View style={styles.headerContainer}>
        <ProfilePortrait
          size="medium"
          borderColor={loggedUser.color}
          id={loggedUser.id}
        />
        <View>
          <Text weight="regular" style={styles.headerText}>
            Welcome
          </Text>
          <Text weight="bold" style={styles.headerText}>
            {loggedUser.firstName}
          </Text>
        </View>
      </View>
    );
  }

  if (currentTab && currentTab !== "login")
    return (
      <View style={styles.headerContainer}>
        {navigation.canGoBack() && (
          <IconButton onPress={goBack}>
            <BackIcon />
          </IconButton>
        )}
        <Text weight="regular" style={styles.headerText}>
          {getHeaderText()}
        </Text>
      </View>
    );
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    backgroundColor: colors.white,
  },
  headerText: {
    fontSize: 34,
    paddingBottom: 3,
  },
});
