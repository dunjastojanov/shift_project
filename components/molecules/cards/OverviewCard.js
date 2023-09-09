import { Label } from "../../atoms";
import {View } from "react-native";
import {styles} from "../../Styles"
import { DeleteIcon } from "../../atoms/icons/DeleteIcon";
import { EditIcon } from "../../atoms/icons/EditIcon";
import { IconButton } from "../../atoms/buttons/IconButton";

export function OverviewCard(props) {
    const {header, subheader, onEdit, onDelete} = props;

    return (<View style={styles.overviewCard}>

        <Label header={header} subheaders={[subheader]} subheaderSize={16} color="black"/>
        
        
        <View style={styles.overviewCardIconsContainer}>
            {onDelete && <IconButton onPress={onDelete}>
                <DeleteIcon/>
            </IconButton>}
            
            {onEdit && <IconButton onPress={onEdit}>
                <EditIcon/>
            </IconButton>}
        </View>

    </View>)
}