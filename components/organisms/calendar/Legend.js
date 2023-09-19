import { View, StyleSheet } from "react-native";
import { IconPortrait, Label } from "../../atoms";

export function Legend({}) {
  return (
    <View style={styles.legendContainer}>
      <View style={styles.legendIconContainer}>
        <IconPortrait color="orange" type="day" size={28} />
        <Label header={"Day"} color="black" />
      </View>
      <View style={styles.legendIconContainer}>
        <IconPortrait color="navy" type="night" size={28} />
        <Label header={"Night"} color="black" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  legendContainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 15,
  },
  legendIconContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
});
