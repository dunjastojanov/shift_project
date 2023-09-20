import { View, ToastAndroid } from "react-native";
import { styles } from "../../../../shared/Styles";

import {  Button } from "../../../atoms";
import {ColorInput, Input, ProfilePortrait} from "../../../molecules"
import { useState } from "react";

export function ProfileForm({ user }) {
  const [data, setData] = useState(user);
  const [page, setPage] = useState(1);

  function onSave() {

    if (data.password !== data.repeatPassword) {
      ToastAndroid.show("Passwords do not match", ToastAndroid.SHORT);
      return;
    }

    let dto = {
      id: data.id,
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      color: data.color
    }

    if (data.password === data.repeatPassword){
      dto[password] = data.password
    }
    
    api.put("/users/" + dto.id, dto).then(()=> {
      ToastAndroid.show("User updated", ToastAndroid.SHORT);
    })
    
  }

  return (
    <View>
      {page === 1 && (
        <View style={styles.page}>
          <View
            style={{
              ...styles.pageElementContainer,
              ...styles.profileIconContainer,
            }}
          >
            <ProfilePortrait size="large" color={data.color} />
          </View>

          <View style={styles.pageElementContainer}>
            <Input
              label="First Name"
              value={data.firstName}
              onChangeText={(text) => {
                setData({ ...data, firstName: text });
              }}
            />

            <Input
              label="Last Name"
              value={data.lastName}
              onChangeText={(text) => {
                setData({ ...data, lastName: text });
              }}
            />
          </View>
          <View style={styles.pageElementContainer}>
            <ColorInput
              label="Color"
              value={data.color}
              onChangeValue={(value) => {
                setData({ ...data, color: value })
              }}
            />
          </View>

          <View
            style={{
              ...styles.buttonContainer,
              ...styles.pageElementContainer,
            }}
          >
            <Button
              type="primary"
              text="Next"
              onPress={() => {
                setPage(2);
              }}
            ></Button>
          </View>
        </View>
      )}

      {page === 2 && (
        <View style={styles.page}>
          <View style={styles.pageElementContainer}>
            <Input
              label="Email"
              value={data.email}
              onChangeText={(text) => {
                setData({ ...data, email: text });
              }}
            />

            <Input
              label="Password"
              value={""}
              secureTextEntry={true}
              onChangeText={(text) => {
                setData({ ...data, password: text });
              }}
            />

            <Input
              label="Repeat Password"
              value={""}
              secureTextEntry={true}
              onChangeText={(text) => {
                setData({ ...data, repeatPassword: text });
              }}
            />
          </View>

          <View
            style={{
              ...styles.buttonContainer,
              ...styles.pageElementContainer,
            }}
          >
            <Button
              type="primary"
              text="Previous"
              onPress={() => {
                setPage(1);
              }}
            ></Button>
            <Button type="primary" text="Save" onPress={onSave}></Button>
          </View>
        </View>
      )}
    </View>
  );
}
