import { useContext } from "react";
import { View } from "react-native";
import { styles } from "../../../../shared/Styles";
import { GroupContext } from "../../../../shared/context/GroupContext";
import { LoggedUserContext } from "../../../../shared/context/LoggedUserContext";
import { Button, Label } from "../../../atoms";
import { ProfilePortrait } from "../../../molecules";

export function ProfileOverviewPage({navigation}) {
  const {loggedUser, logOutUser} = useContext(LoggedUserContext);
  const {groups} = useContext(GroupContext);

  const userGroups = groups.filter(group => group.users.includes(loggedUser.id)).map(userGroup => userGroup.name)

  function onEdit() {
    navigation.navigate("ProfileEditPage", {user: loggedUser})
  }

  function onLogout() {
    logOutUser()
    navigation.navigate("login")
  }

  return (
    <View>
      <View
        style={{
          ...styles.pageElementContainer,
          ...styles.profileIconContainer,
        }}
      >
        <ProfilePortrait size="large" color={loggedUser.color} id={loggedUser.id}/>
      </View>

      <View
        style={{
          ...styles.pageElementContainer,
          ...styles.profileLabelContainer,
        }}
      >
        <Label
          header={"First Name"}
          subheaders={[loggedUser.firstName]}
          color="black"
        />
        <Label
          header={"Last Name"}
          subheaders={[loggedUser.lastName]}
          color="black"
        />
        <Label header={"Groups"} tags={userGroups} color="black" />
      </View>

      <View
        style={{ ...styles.pageElementContainer, ...styles.buttonContainer }}
      >
        <Button text="Edit" onPress={onEdit}/>
        <Button text="Logout" onPress={onLogout}/>
      </View>
    </View>
  );
}
