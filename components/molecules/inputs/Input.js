import { useFonts } from "expo-font";
import { StyleSheet, TextInput, View } from "react-native";
import { dropShadow } from "../../../shared/Styles";
import { Text } from "../atoms";

export const Input = ({
  label,
  value,
  onChangeText,
  secureTextEntry = false,
}) => {
  let [fontsLoaded] = useFonts({
    regular: require("../../../assets/fonts/Montserrat-Regular.ttf"),
  });

  return (
    <View style={styles.inputContainer}>
      <Text weight="regular" style={styles.inputLabel}>
        {label}
      </Text>
      <TextInput
        secureTextEntry={secureTextEntry}
        value={value}
        onChangeText={onChangeText}
        style={{ fontFamily: "regular", ...styles.input }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: colors.white,
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginVertical: 10,
    fontSize: 16,
    ...dropShadow,
  },
  inputLabel: {
    fontSize: 16,
    paddingHorizontal: 10,
  },
});
