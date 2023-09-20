import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { NavBar, Header } from "./components/organisms";
import {
  CalendarStack,
  GroupStack,
  HomePage,
  LoginPage,
  NotificationPage,
  ProfileStack,
  RequestStack,
} from "./components/pages";

import React from "react";
import { GroupContextProvider } from "./shared/context/GroupContext";
import {
  LoggedUserContextProvider
} from "./shared/context/LoggedUserContext";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <LoggedUserContextProvider>
      <GroupContextProvider>
        <NavigationContainer>
          <Tab.Navigator
            initialRouteName="home"
            tabBar={(props) => <NavBar {...props} />}
            screenOptions={{ headerTitle: () => <Header /> }}
          >
            <Tab.Screen name="login" component={LoginPage} />
            <Tab.Screen name="notification" component={NotificationPage} />
            <Tab.Screen
              name="calendar"
              component={CalendarStack}
              options={{
                headerShown: false,
              }}
            />
            <Tab.Screen
              name="home"
              component={HomePage}
              options={{
                headerTitle: () => <Header />,
                headerStyle: { height: 160 },
              }}
            />
            <Tab.Screen
              name="group"
              component={GroupStack}
              options={{
                headerShown: false,
              }}
            />

            <Tab.Screen
              name="request"
              component={RequestStack}
              options={{
                headerShown: false,
              }}
            />
            <Tab.Screen
              name="profile"
              component={ProfileStack}
              options={{
                headerShown: false,
              }}
            />
          </Tab.Navigator>
        </NavigationContainer>
      </GroupContextProvider>
    </LoggedUserContextProvider>
  );
}
