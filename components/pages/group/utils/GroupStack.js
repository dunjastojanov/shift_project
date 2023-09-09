import { createStackNavigator } from "@react-navigation/stack";
import { GroupEditPage } from "../form/GroupEditPage";
import { GroupOverviewPage } from "../overview/GroupOverviewPage";
import { GroupAddPage } from "../form/GroupAddPage";
import { GroupContext } from "./GroupContext";

import { Header } from "../../Header";
import api from "../../api"; 

import { useState } from "react";


const Stack = createStackNavigator();

export const GroupStack = () => {

  const [groups, setGroups] = useState([]);

  function fetchGroups() {
    api.get("groups").then((result) => {
      setGroups(result.data);
    });
  }

 return <GroupContext.Provider value={{groups, fetchGroups, setGroups}}>
  <Stack.Navigator screenOptions={{ headerTitle: () => <Header />, headerLeft: () => null }}>
    <Stack.Screen name="GroupOverviewPage" component={GroupOverviewPage}/>
    <Stack.Screen name="GroupEditPage" component={GroupEditPage} />
    <Stack.Screen name="GroupAddPage" component={GroupAddPage} />
  </Stack.Navigator>
  </GroupContext.Provider>
};


