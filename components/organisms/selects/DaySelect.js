import { View, Pressable } from "react-native";
import { styles } from "../../../shared/Styles";
import { Label } from "../../atoms";
import { Select } from "./Select";
import {getDaysInMonth, getDays} from  "../../../shared/utils"
import { useEffect, useState } from 'react';

export function DaySelect({ month, day, onDayChange }) {
  const [days, setDays] = useState(Array.from({ length: getDaysInMonth(month) }, (_, i) => i + 1));

  useEffect(()=>{
    setDays(Array.from({ length: getDaysInMonth(month) }, (_, i) => i + 1))
  }, [month])

  function getButtonStyle(d) {
    if (d === day) {
      return {
        ...styles.selectButton,
        ...styles.daySelectButton,
        ...styles.selectButtonSelected,
      };
    }
    return {...styles.selectButton, ...styles.daySelectButton};
  }

  return (
    <Select label="Day" value={day}>
      <View style={styles.selectButtonContainer}>
        {days.map((d) => {
          return (
            <Pressable
              style={getButtonStyle(d)}
              key={d}
              onPress={() => onDayChange(d)}
            >
              <Label style={styles.selectText} header={d} />
            </Pressable>
          );
        })}
      </View>
    </Select>
  );
}


