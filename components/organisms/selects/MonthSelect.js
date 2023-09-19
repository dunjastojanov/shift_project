import { View, Pressable } from "react-native";
import { styles } from "../../../shared/Styles";
import { Label } from "../../atoms";
import { Select } from "./Select";

export function MonthSelect({ month, onMonthChange }) {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  function getButtonStyle(m) {
    if (m === month) {
      return {
        ...styles.selectButton,
        ...styles.selectButtonSelected,
      };
    }
    return styles.selectButton;
  }

  return (
    <Select label="Month" value={month}>
      <View style={styles.selectButtonContainer}>
        {months.map((m) => {
          return (
            <Pressable
              style={getButtonStyle(m)}
              key={m.toLocaleLowerCase()}
              onPress={() => onMonthChange(m)}
            >
              <Label style={styles.selectText} header={m} />
            </Pressable>
          );
        })}
      </View>
    </Select>
  );
}


