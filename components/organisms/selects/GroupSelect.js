import { View } from "react-native";
import { styles } from "../../../shared/Styles";
import api from "../../../shared/api";
import { Select } from "./Select";
import { useState, useEffect, useContext } from "react";
import { GroupSelectItem } from "./GroupSelectItem";
import { GroupContext } from './../../../shared/context/GroupContext';

export function GroupSelect({ group, onGroupChange }) {
  const {groups} = useContext(GroupContext)
  const [selected, setSelected] = useState("");

  useEffect(() => {
    const g = groups.find((g) => g.id === group);
    if (g) {
      setSelected(g.name);
    }
  }, [group, groups]);

  function getButtonStyle(id) {
    if (id === group) {
      return {
        ...styles.groupSelectButton,
        ...styles.groupSelectButtonSelected,
      };
    }
    return styles.groupSelectButton;
  }

  return (
    <Select label="Group" value={selected}>
      <View style={styles.groupSelectButtonContainer}>
        {groups.map((g) => {
          return (
            <GroupSelectItem
              style={getButtonStyle(g.id)}
              group={g}
              onGroupChange={onGroupChange}
              key={g.id}
            />
          );
        })}
      </View>
    </Select>
  );
}
