import { View, Pressable, StyleSheet } from "react-native";
import { colors, dropShadow } from "../../../shared/Styles";
import { Text } from "../../atoms";

export function ColorInput({ label, value: color, onChangeValue }) {
  function getStyle(key, value) {
    if (key === color)
      return {
        backgroundColor: value,
        ...styles.colorButton,
        ...styles.colorButtonSelected,
      };
    return {
      backgroundColor: value,
      ...styles.colorButton,
      ...styles.colorButtonUnselected,
    };
  }
  return (
    <View>
      <Text weight="regular" style={styles.inputLabel}>
        {label}
      </Text>

      <View style={styles.colorInputButtonContainer}>
        {Object.entries(colors).map(([key, value]) => (
          <View key={key}>
            <Pressable
              style={getStyle(key, value)}
              onPress={() => {
                onChangeValue(key);
              }}
            ></Pressable>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  colorInputButtonContainer: {
    gap: 12,
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 10,
  },
  colorButton: {
    height: 30,
    width: 30,
    borderRadius: 5,
  },
  colorButtonSelected: {
    borderWidth: 3,
    borderColor: colors.white,
    ...dropShadow,
  },
  colorButtonUnselected: {
    ...dropShadow,
  },
});
