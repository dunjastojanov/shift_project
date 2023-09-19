import { View, StyleSheet } from "react-native";

import { IconButton, PlusIcon, CloseIcon, Label } from "../../atoms";

export function ListGroupCardItem({ header, type, onPress }) {
  return (
    <View style={styles.listGroupCardItem}>
      <Label header={header} />
      {type === "remove" && (
        <IconButton onPress={onPress}>
          <CloseIcon />
        </IconButton>
      )}
      {type === "add" && (
        <IconButton onPress={onPress}>
          <PlusIcon />
        </IconButton>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  listGroupCardItem: {
    margin: 15,
    flexDirection: "row",
    justifyContent: "space-between",
  }
});
