import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { View, Text as NativeText} from 'react-native';
import {Text} from "./components/atoms/text/Text"
import {HomePage, CalendarPage, GroupPage, NotificationPage, ProfilePage} from './components/pages'
import { NavBar } from './components/NavBar';
import { useNavigation } from '@react-navigation/native';
import {styles} from './components/Styles';

import React, { useEffect, useState } from 'react';
import { BackIcon } from './components/atoms/icons/BackIcon';
import { ProfilePortrait } from './components/atoms';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName='home'
        tabBar={(props)=> <NavBar {...props}/>}
        screenOptions={{
          headerTitle: () => <Header />,
          
        }}
        >
        <Tab.Screen name="notification" component={NotificationPage}/>
        <Tab.Screen name="calendar" component={CalendarPage}/>
        <Tab.Screen name="home" component={HomePage} options={{
          headerTitle: () => <Header />,
          headerStyle: {
            height: 160,
          }
        }}/>
        <Tab.Screen name="group" component={GroupPage}/>
        <Tab.Screen name="profile" component={ProfilePage}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

function Header() {
  const navigation = useNavigation();
  const [currentTab, setCurrentTab] = useState('');

  useEffect(() => {
    const unsubscribe = navigation.addListener('state', (e) => {
      const activeRoute = e.data.state.routes[e.data.state.index];
      setCurrentTab(activeRoute.name);
    });
    return unsubscribe;
  }, [navigation]);


  if (currentTab === 'home') {
    return (<View style={styles.headerContainer}>
      <ProfilePortrait size={80} borderColor = '#F3E8E8' imageUrl="../../../images/sarah.png"/>
      <View>
        <Text weight="regular" style={styles.headerText}>Welcome</Text>
        <Text weight="bold" style={styles.headerText}>Sarah</Text>
      </View>
      </View>)
  }

  if (currentTab) return <View style={styles.headerContainer}>
    <BackIcon style={styles.headerIcon}/>
    <Text weight="regular" style={styles.headerText}>{currentTab[0].toUpperCase() + currentTab.slice(1) + "s"}</Text>
  
  </View>

}


