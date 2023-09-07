import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import {HomePage, CalendarPage, GroupPage, NotificationPage, ProfilePage} from './components/pages'
import { NavBar } from './components/NavBar';
import { Text } from 'react-native';

import React, { useEffect, useState } from 'react';
import { Header } from './components/Header';

import axios from 'axios';

const Tab = createBottomTabNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName='home'
        tabBar={(props)=> <NavBar {...props}/>}
        screenOptions={{headerTitle: () => <Header />}}
        >
        <Tab.Screen name="notification" component={NotificationPage}/>
        <Tab.Screen name="calendar" component={CalendarPage}/>
        <Tab.Screen name="home" component={HomePage} options={{
          headerTitle: () => <Header />,
          headerStyle: {height: 160}
        }}/>
        <Tab.Screen name="group" component={GroupPage}/>
        <Tab.Screen name="profile" component={ProfilePage}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}


