import { createStackNavigator } from "@react-navigation/stack";
import { GroupEditPage } from "../form/GroupEditPage";
import { GroupOverviewPage } from "../overview/GroupOverviewPage";
import { GroupAddPage } from "../form/GroupAddPage";
import { GroupContextProvider } from "../../../../shared/context/GroupContext";
import { Header } from "../../../organisms/header/Header";

const Stack = createStackNavigator();

export const GroupStack = () => {

 return <GroupContextProvider>
  <Stack.Navigator screenOptions={{ headerTitle: () => <Header />, headerLeft: () => null }}>
    <Stack.Screen name="GroupOverviewPage" component={GroupOverviewPage}/>
    <Stack.Screen name="GroupEditPage" component={GroupEditPage} />
    <Stack.Screen name="GroupAddPage" component={GroupAddPage} />
  </Stack.Navigator>
  </GroupContextProvider>
};


