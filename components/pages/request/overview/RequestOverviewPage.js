import { View } from "react-native";
import { styles } from "../../../../shared/Styles";
import { Button } from "../../../atoms";

export function RequestOverviewPage({navigation}) {

  function goTo(path) {
    navigation.navigate(path);
  }

  return (
    <View style={styles.page}>
      <View style={{ ...styles.pageElementContainer, ...styles.buttonContainer }}>
        <Button text={"Add Switch Request"} onPress={()=>goTo("SwitchRequestAddPage")}/>
      </View>
      <View style={{ ...styles.pageElementContainer, ...styles.buttonContainer }}>
        <Button text={"Add Vacation Request"} onPress={()=>goTo("VacationRequestAddPage")}/>
      </View>
      <View style={{ ...styles.pageElementContainer, ...styles.buttonContainer }}>
        <Button text={"Add Sick Day Request"} onPress={()=>goTo("SickDayRequestAddPage")} />
      </View>
    </View>
  );
}
