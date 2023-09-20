import { View } from "react-native";
import { Button, Label } from "../../atoms";
import { IconPortrait, Input } from "../../molecules";
import { styles } from "../../../shared/Styles";
import { useContext, useEffect, useState } from "react";
import { LoggedUserContext } from "../../../shared/context/LoggedUserContext";

export function LoginPage({ navigation }) {
  const [data, setData] = useState({ email: "", password: "" });

  const { logInUser, isLoggedIn } = useContext(LoggedUserContext);

  useEffect(() => {
    if (isLoggedIn) {
      navigation.navigate("home");
    }
  }, [isLoggedIn]);

  {
     


  }

  return (
    <View style={{ ...styles.page, ...styles.loginPage }}>
      <View style={{ ...styles.pageElementContainer, ...styles.logoContainer }}>
        <IconPortrait type="logo" size={150} />
        <Label header={"Shift"} color="black" headerSize={34} />
      </View>
      <View style={styles.pageElementContainer}>
        <Input label="Email" value={data.email} onChangeText={(text)=>setData({...data, email: text})}/>
      </View>

      <View style={styles.pageElementContainer}>
        <Input label="Password" secureTextEntry={true} value={data.password} onChangeText={(text)=>setData({...data, password: text})}/>
      </View>

      <View
        style={{ ...styles.pageElementContainer, ...styles.buttonContainer }}
      >
        <Button
          text="Login"
          onPress={() => {
            logInUser(data);
          }}
        />
      </View> 
    </View>
  );
}
