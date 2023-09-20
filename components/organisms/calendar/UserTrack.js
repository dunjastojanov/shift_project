import { View, StyleSheet } from "react-native";
import { glow, transparentColors } from "../../../shared/Styles";
import { IconButton } from "../../atoms";
import { ProfilePortrait } from "../../molecules";
import { useState, useEffect, useContext } from "react";
import api from "../../../shared/api";
import { GroupContext } from "../../../shared/context/GroupContext";

export function UserTrack({ select, selected, group }) {
  const [groupUsers, setGroupUsers] = useState([]);
  const { groups } = useContext(GroupContext);

  useEffect(() => {
    g = groups.find((g) => g.id === group);
    api.get("users").then((res) => {
      let users = res.data;
      setGroupUsers(users.filter((user) => g.users.includes(user.id)));
    });
  }, []);

  return (
    <View style={styles.userTrack}>
      {groupUsers.map((user) => {
        return (
          <IconButton
            key={user.id}
            onPress={() => {
              select(user.id);
            }}
          >
            <ProfilePortrait
              size="small"
              style={selected === user.id ? styles.userTrackButtonSelected : {}}
              id={user.id}
              color={user.color}
            />
          </IconButton>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  userTrack: {
    backgroundColor: transparentColors.black,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 30,
    paddingVertical: 5,
    gap: 5,
    minHeight: 70,
  },
  userTrackButtonSelected: {
    ...glow,
    width: 60,
    height: 60,
    borderRadius: 30,
  },
});
