import { createStackNavigator } from "@react-navigation/stack";
import { Header } from "../../../organisms/header/Header";
import { SwitchRequestAddPage } from "../form/SwitchRequestAddPage";
import { SickDayRequestAddPage } from "../form/SickDayRequestAddPage";
import { VacationRequestAddPage } from "../form/VacationRequestAddPage";
import { RequestOverviewPage } from "./../overview/RequestOverviewPage";

const Stack = createStackNavigator();

export const RequestStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerTitle: () => <Header />, headerLeft: () => null }}
    >
      <Stack.Screen name="RequestOverviewPage" component={RequestOverviewPage} />
      <Stack.Screen name="SwitchRequestAddPage" component={SwitchRequestAddPage} />
      <Stack.Screen name="SickDayRequestAddPage" component={SickDayRequestAddPage} />
      <Stack.Screen name="VacationRequestAddPage" component={VacationRequestAddPage} />
    </Stack.Navigator>
  );
};
