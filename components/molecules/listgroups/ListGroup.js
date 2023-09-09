import { useEffect, useState } from "react";
import { styles } from "../../Styles";
import { View } from "react-native";
import { ListGroupCard } from "../cards/ListGroupCard";

export function ListGroup(props) {
  const { group, setGroup, users } = props;

  const select = (user) => {
    setGroup({...group, users: [...group.users, user.id]})
  };

  const unselect = (user) => {
    setGroup({...group, users: group.users.filter(id => user.id !== id)})
  };

  const selected = users.filter(user => group.users.includes(user.id))
  const unselected = users.filter(user => !group.users.includes(user.id))

  return (
    <View style={styles.listGroupCardContainer}>
      <ListGroupCard header="Workers in Group" users={selected} onPress={unselect} iconType="remove"/>
      <ListGroupCard header="Other Workers" users={unselected} onPress={select} iconType="add"/>
    </View>
  );
}


