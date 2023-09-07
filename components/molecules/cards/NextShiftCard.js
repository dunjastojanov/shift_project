import {View} from "react-native";
import {Text, Label} from "../../atoms"
import {styles} from "../../Styles"

export function NextShiftCard() {
    return (<View style={styles.nextShiftCardContainer}>
        <Label color="black" header="Your next shift is" headerSize={17}/>
        <View style={styles.nextShiftCard}>
            <Label header="TODAY, TUESDAY" subheaders={["MAY 15", "07:00"]}/>
        </View>
    </View>)
}