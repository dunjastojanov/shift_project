import { useContext, useEffect } from "react";
import { ScrollView, View } from "react-native";
import { styles } from "../../../../shared/Styles";
import { OverviewCard } from "../../../organisms";
import { GroupContext } from "../../../../shared/context/GroupContext";
import { Button } from "../../../atoms"

export function GroupOverviewPage({ navigation }) {
  const {groups, setGroups, fetchGroups} = useContext(GroupContext);

  useEffect(() => {
    fetchGroups();
  }, []);

  const onDelete = (group) => {
    setGroups(groups.filter(g => g.id !== group.id));
  }

  const onEdit = (group) => {
    navigation.navigate("GroupEditPage", { group: group });
  };

  return (
    <ScrollView style={{ ...styles.page }}>
      <View style={{ ...styles.page}}>
        <View style={styles.pageElementContainer}>
          {groups.map((group, index) => {
            return (
              <OverviewCard
                subheader={group.name}
                key={index}
                onEdit={() => onEdit(group)}
                onDelete={()=> onDelete(group)}
                />
            );
          })}
        </View>

        <View style={{...styles.buttonContainer, ...styles.pageElementContainer}}>
          <Button text="Create New Group" onPress={()=> {navigation.navigate("GroupAddPage")}}/>
        </View>
      </View>
    
    </ScrollView>
  );
}


