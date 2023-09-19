import { StyleSheet } from "react-native";
import { IconButton, ProfilePortrait } from "../../atoms";

export function HalfDayPill({ key, onPress, value, style, time, expanded }) {
  return (
    <IconButton
      style={expanded.index === key
        ? expanded.time === time
          ? {
            ...style,
            ...styles.dayPillExpanded,
          }
          : {
            ...style,
            ...styles.dayPillCollapsed,
          }
        : style}
      onPress={() => onPress(time, key)}
    >
      {value[time].map((user) => {
        return (
          <ProfilePortrait
            size="tiny"
            style={styles.dayPillIcon}
            key={user}
            id={user} />
        );
      })}
    </IconButton>
  );
}

const styles = StyleSheet.create({
  dayPillCollapsed: {
    width: 0,
    borderRadius: 0,
  },
  dayPillExpanded: {
    width: "100%",
    borderRadius: 20,
    overflow: "visible",
    flexWrap: "wrap",
  },
  dayPillIcon: {
    marginHorizontal: 5,
  }
})