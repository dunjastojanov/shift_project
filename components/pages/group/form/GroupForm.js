import { View } from "react-native";
import { styles } from "../../Styles";
import { Input, Button } from "../../atoms";
import { useState, useEffect, useContext } from "react";
import api from "../../api";
import { ListGroup } from "../../molecules";
import { GroupContext } from "./GroupContext";

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
      selected: selected.map((selected) => selected.id),
    };

    if (!data.id) {
      api.post(`groups`, dto).then((result) => {
        setGroups([...groups, result.data]);
      });
    }
    api.put(`groups/${data.id}`, dto).then((result) => {
      setGroups([...groups.filter((group) => group.id !== result.data.id), result.data]);
    });
  };

  return (
    <View style={{ ...styles.page }}>
      <View style={styles.pageElementContainer}>
        <Input
          label="Name"
          value={data.name}
          onChangeText={(text) => {
            setData({ ...data, name: text });
          }} />
      </View>
      <View style={styles.pageElementContainer}>
        <ListGroup
          group={data}
          setGroup={setData}
          users={users} />
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
  );
}
