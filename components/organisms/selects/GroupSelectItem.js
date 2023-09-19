import { View, Pressable } from "react-native";
import { styles } from "../../../shared/Styles";
import api from "../../../shared/api";
import { ArrowIcon, IconButton, Label, ProfilePortrait } from "../../atoms";
import { useState, useEffect } from "react";

export function GroupSelectItem({ group, onGroupChange, style }) {
  const [users, setUsers] = useState([]);
  const [expanded, setExpanded] = useState(false);

  const groupUsers = users.filter((user) => group.users.includes(user.id));

  useEffect(() => {
    api.get("users").then((res) => {
      setUsers(res.data);
    });
  }, []);

  return (
    <View>
      <View style={style}>
        <Pressable
          onPress={() => onGroupChange(group)}
          style={{ height: "100%", padding: 10, width: "80%" }}
        >
          <Label style={styles.groupSelectText} header={group.name} />
        </Pressable>
        {expanded === false && (
          <IconButton onPress={() => setExpanded(true)}>
            <ArrowIcon style={styles.arrowIcon} direction="down" />
          </IconButton>
        )}

        {expanded === true && (
          <IconButton onPress={() => setExpanded(false)}>
            <ArrowIcon style={styles.arrowIcon} direction="up" />
          </IconButton>
        )}
      </View>

      {expanded === true && (
        <View style={styles.groupSelectItemContainer}>
          {groupUsers.map((user) => {
            return (
              <View key={user.id} style={styles.groupSelectItem}>
                <ProfilePortrait size="tiny" id={user.id} color={user.color}/>
                <Label header={`${user.firstName} ${user.lastName}`} headerSize={14} />
              </View>
            );
          })}
        </View>
      )}
    </View>
  );
}
