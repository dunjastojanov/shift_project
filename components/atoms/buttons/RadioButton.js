import { StyleSheet } from "react-native";
import { Button } from "./Button";
import { colors } from "../../../shared/Styles";

export function RadioButton({ type, onPress }) {
  if (type === "day")
    return (
      <Button
        style={{ ...styles.dayRadioButton, ...styles.radioButton }}
        text={"Day"}
        onPress={onPress}
      />
    );
  if (type === "night")
    return (
      <Button
        style={{ ...styles.nightRadioButton, ...styles.radioButton }}
        text={"Night"}
        onPress={onPress}
      />
    );
}

const styles = StyleSheet.create({
  dayRadioButton: {
    backgroundColor: colors.orange,
  },
  nightRadioButton: {
    backgroundColor: colors.navy,
  },
  radioButton: {
    flex: 0,
  },
});
