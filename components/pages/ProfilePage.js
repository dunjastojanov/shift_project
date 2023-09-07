import { Text, View } from "react-native";
import { styles } from "../Styles"
import { Button, Label, ProfilePortrait } from "../atoms";

export function ProfilePage() {
  return (
    <View>

      <View style={{...styles.pageElementContainer, ...styles.profileIconContainer}}>
        <ProfilePortrait size="large"/>
      </View>

      <View style={{...styles.pageElementContainer, ...styles.profileLabelContainer}}>
        <Label header={"First Name"} subheaders={["Dunja"]} color="black"/>
        <Label header={"Last Name"} subheaders={["Stojanov"]} color="black"/>
        <Label header={"Groups"} tags={["Surgery", "Pediatrics"]} color="black"/>
      </View>

      <View style={{...styles.pageElementContainer, ...styles.profileButtonContainer}}>

        <Button text="Edit"/>
        <Button text="Delete"/>
      </View>
    </View>
  );
}
