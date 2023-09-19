import { createStackNavigator } from "@react-navigation/stack";

import { CalendarOverviewPage } from "../overview/CalendarOverviewPage";
import { CalendarAddPage } from "../form/CalendarAddPage";
import { Header } from "../../../organisms/header/Header";

const Stack = createStackNavigator();

export const CalendarStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerTitle: () => <Header />, headerLeft: () => null }}
    >
      <Stack.Screen
        name="CalendarOverviewPage"
        component={CalendarOverviewPage}
      />
      <Stack.Screen name="CalendarAddPage" component={CalendarAddPage} />
    </Stack.Navigator>
  );
};
