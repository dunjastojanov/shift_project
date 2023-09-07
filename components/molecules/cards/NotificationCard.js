import { IconPortrait, Label } from "../../atoms";
import {View } from "react-native";
import {styles} from "../../Styles"

export function NotificationCard(props) {

    const {text} = props;
    return (<View style={styles.notificationCard}>
        <IconPortrait/>
        <Label header={text} color="black" style={styles.notificationCardLabel}/>
    </View>)
}