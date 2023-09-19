import { Pressable as NativeButton, StyleSheet } from "react-native";
import { colors } from "../../../shared/Styles";
import { Text } from "../text/Text";

export function Button({ text, onPress, type = "primary", style }) {
  if (type === "primary") {
    return (
      <NativeButton
        onPress={onPress}
        style={{ ...styles.primaryButton, ...style }}
      >
        <Text style={styles.primaryButtonText} weight="bold">
          {text}
        </Text>
      </NativeButton>
    );
  }
}

const styles = StyleSheet.create({
  primaryButton: {
    backgroundColor: colors.purple,
    color: colors.white,
    borderRadius: 20,
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 24,
    alignItems: "center",
    maxHeight: 45,
    ...dropShadow,
  },
  primaryButtonText: {
    color: colors.white,
    fontSize: 14,
  },
});
