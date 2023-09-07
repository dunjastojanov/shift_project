import { Label } from "../../atoms";
import {View } from "react-native";
import {styles} from "../../Styles"
import { DeleteIcon } from "../../atoms/icons/DeleteIcon";
import { EditIcon } from "../../atoms/icons/EditIcon";

export function OverviewCard(props) {
    const {header, subheader} = props;


    return (<View style={styles.overviewCard}>

        <Label header={header} subheaders={[subheader]} subheaderSize={16} color="black"/>
        
        
        <View style={styles.overviewCardIconsContainer}>
            <DeleteIcon/>
            <EditIcon/>
        </View>

    </View>)
}