import { useContext } from "react";
import { Pressable, View } from "react-native";
import { styles } from "../../../shared/Styles";
import { Label, ProfilePortrait } from "../../atoms";
import { UserContext } from "./../../../shared/context/UserContext";
import { Select } from "./Select";

export function CoworkerSelect({ coworker, onCoworkerChange }) {
  const { users } = useContext(UserContext);

  function getButtonStyle(user) {
    if (user.id === coworker.id) {
      return {
        ...styles.selectButton,
        ...styles.selectButtonSelected,
        ...styles.coworkerSelectButton,
      };
    }
    return { ...styles.selectButton, ...styles.coworkerSelectButton };
  }

  return (<Select label="Coworker" value={`${coworker.firstName} ${coworker.lastName}`}>
    <View style={styles.selectButtonContainer}>
      {users.map((user) => {
        return (
          <Pressable
            style={getButtonStyle(user)}
            key={user.id}
            onPress={() => onCoworkerChange(user)}
          >
            <ProfilePortrait size="tiny" id={user.id} color={user.color} />
            <Label
              style={styles.selectText}
              header={`${user.firstName} ${user.lastName}`}
            />
          </Pressable>
        );
      })}
    </View>
  </Select>);
}
