import { Label } from "../../atoms";
import { colors } from "../../../shared/Styles";
import { View, StyleSheet } from "react-native";
import { ListGroupCardItem } from "./ListGroupCardItem";

export function ListGroupCard(props) {
  const { header, users, onPress, iconType } = props;
  return (
    <View>
      <Label header={header} color="black" />
      <View style={styles.listGroupCard}>
        {users.length === 0 && <ListGroupCardItem header={`No ${header}`} />}
        {users.map((user) => (
          <ListGroupCardItem
            key={user.id}
            header={`${user.firstName} ${user.lastName}`}
            type={iconType}
            onPress={() => onPress(user)}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  listGroupCard: {
    backgroundColor: colors.purple,
    borderRadius: 25,
    padding: 10,
  },
});
