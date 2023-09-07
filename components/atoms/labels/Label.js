import {View} from "react-native"
import {Text} from "../text/Text"
import {styles, colors} from "../../Styles"

export function Label({header, subheaders=[], tags=[], color="white", headerSize=16, subheaderSize=18, style={} }) {

    return <View style={styles.labelContainer}>
        {header && 
        <Text weight="regular" style={{...styles.labelHeader, color: colors[color], fontSize: headerSize, ...style}}>{header}</Text>}
        <View style={styles.labelSubheaderContainer}>
            {subheaders.map((subheader, index)=> {
                return <Text weight="bold" style={{...styles.labelSubheader, color: colors[color],  fontSize: subheaderSize, ...style}} key={index}>{subheader}</Text>
            })}
        </View>

        <View style={styles.labelTagContainer}>
            {tags.map((tag, index) =>{
              return <View style={styles.labelTag} key={index}>
                <Text weight="bold">{tag}</Text>
              </View>  
            })}
        </View>

    </View>
}