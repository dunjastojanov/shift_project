import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { getHeaderTitle } from '@react-navigation/elements';
import { Text, View} from 'react-native';

import {HomePage, CalendarPage, GroupPage, NotificationPage, ProfilePage} from './components/pages'
import { NavBar } from './components/NavBar';


const Tab = createBottomTabNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName='home'
        tabBar={(props)=> <NavBar {...props}/>}
        options={{headerTitle: (props)=> <Header {...props}/>}}
        >
        <Tab.Screen name="notification" component={NotificationPage}/>
        <Tab.Screen name="calendar" component={CalendarPage}/>
        <Tab.Screen name="home" component={HomePage}/>
        <Tab.Screen name="group" component={GroupPage}/>
        <Tab.Screen name="profile" component={ProfilePage}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

function Header({navigations, route, options}) {

  const title = getHeaderTitle(options, route.name);

  return <Text>{title}!</Text>

}


