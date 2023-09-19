import {ScrollView} from "react-native"
import { ProfileForm } from "./ProfileForm";
import {styles} from "../../../../shared/Styles"

export function ProfileEditPage({route}) {
    const {user} = route.params;
    return <ScrollView style={{...styles.page}}><ProfileForm user={user}/></ScrollView>
} 