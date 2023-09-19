import { createStackNavigator } from "@react-navigation/stack";
import { ProfileOverviewPage } from "../overview/ProfileOverviewPage";
import { ProfileEditPage } from "../form/ProfileEditPage";
import { Header } from "../../../organisms/header/Header";
import api from "../../../../shared/api"; 
import { useState } from "react";
import { ProfileContext } from './ProfileContext';


const Stack = createStackNavigator();

export const ProfileStack = () => {

 return <ProfileContext.Provider value={null}>
  <Stack.Navigator screenOptions={{ headerTitle: () => <Header />, headerLeft: () => null }}>
    <Stack.Screen name="ProfileOverviewPage" component={ProfileOverviewPage}/>
    <Stack.Screen name="ProfileEditPage" component={ProfileEditPage}/>
  </Stack.Navigator>
  </ProfileContext.Provider>
};


