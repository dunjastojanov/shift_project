import { Pressable as NativeButton } from "react-native";
import { styles, colors } from "./../../Styles";
import { Text } from "../text/Text";

export function Button({ text, onPress, type = "primary" }) {
  return (
    <NativeButton onPress={onPress} style={styles.primaryButton}>
      <Text style={styles.primaryButtonText} weight="bold">{text}</Text>
    </NativeButton>
  );
}
