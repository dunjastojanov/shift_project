import { View, StyleSheet } from "react-native";
import { dropShadow } from "../../../shared/Styles";
import { Label } from "../../atoms";
import { HalfDayPill } from "./HalfDayPill";


export function DayPill({ key, value, onPress, expanded }) {
  return (
    <View key={key} style={styles.dayElement}>
      <Label header={key} color="black" style={styles.dayElementHeader} />
      <View style={styles.dayPill}>
        <HalfDayPill
          value={value}
          onPress={onPress}
          time="day"
          expanded={expanded}
          style={styles.dayPillDay} />
        <HalfDayPill
          value={value}
          onPress={onPress}
          time="night"
          expanded={expanded}
          style={styles.dayPillNight} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  dayElement: {
    flexDirection: "row",
    alignItems: "center",
  },
  dayPill: {
    flexDirection: "row",
    width: "80%",
    marginVertical: 5,
    marginHorizontal: 15,
    minHeight: 36,
  },
  dayPillDay: {
    flexDirection: "row",
    backgroundColor: colors.orange,
    width: "50%",
    overflow: "hidden",
    paddingVertical: 5,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    ...dropShadow,
  },
  dayPillNight: {
    flexDirection: "row",
    overflow: "hidden",
    backgroundColor: colors.navy,
    width: "50%",
    paddingVertical: 5,
    ...dropShadow,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
  },
  dayElementHeader: {
    width: 45,
    textAlign: "right",
  }
})