import { useContext, useEffect, useState } from "react";
import { ToastAndroid, View, ScrollView } from "react-native";
import { styles } from "../../../../shared/Styles";
import api from "../../../../shared/api";
import { GroupContext } from "../../../../shared/context/GroupContext";
import { Button } from "../../../atoms";
import { Input } from "../../../molecules";
import { ListGroup } from "../../../organisms";

export function GroupForm({ group }) {
  const { groups, setGroups } = useContext(GroupContext);
  const [data, setData] = useState(group);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    api.get("users").then((result) => {
      let data = result.data;
      setUsers(data);
    });
  }, []);

  const onSave = () => {
    let dto = {
      id: data.id,
      name: data.name,
      users: data.users,
    };

    if (!data.id) {
      api.post(`groups`, dto).then((result) => {
        setGroups([...groups, result.data]);
        ToastAndroid.show(
          `Sucessfully added ${result.data.name}`,
          ToastAndroid.SHORT
        );
      });
    }
    api.put(`groups/${data.id}`, dto).then((result) => {
      setGroups([
        ...groups.filter((group) => group.id !== result.data.id),
        result.data,
      ]);
      ToastAndroid.show(
        `Sucessfully updated ${result.data.name}`,
        ToastAndroid.SHORT
      );
    });
  };

  return (
    <ScrollView style={{ ...styles.page }}>
      <View style={{ ...styles.page }}>
        <View style={styles.pageElementContainer}>
          <Input
            label="Name"
            value={data.name}
            onChangeText={(text) => {
              setData({ ...data, name: text });
            }}
          />
        </View>
        <View style={styles.pageElementContainer}>
          <ListGroup group={data} setGroup={setData} users={users} />
        </View>

        <View
          style={{
            ...styles.pageElementContainer,
            ...styles.buttonContainer,
          }}
        >
          <Button text="Save" onPress={onSave} />
        </View>
      </View>
    </ScrollView>
  );
}
