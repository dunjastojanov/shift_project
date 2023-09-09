import { Label } from "../../atoms";
import { styles } from "../../Styles";
import { View } from "react-native";
import { CloseIcon } from "../../atoms/icons/CloseIcon";
import { PlusIcon } from "../../atoms/icons/PlusIcon";
import { IconButton } from "../../atoms";


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
