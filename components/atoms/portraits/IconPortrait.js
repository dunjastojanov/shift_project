import React from 'react';
import { View , StyleSheet, Image} from 'react-native';
import { colors, styles} from '../../Styles'

export function IconPortrait(props) {
    const {size=40, color="purple", iconColor= "white"} = props
    return (
          <View style={{...styles.iconPortraitCircle, width: size, height: size, backgroundColor: colors[color]}}>
            <Image source={require("../../../assets/icons/notification.png")} style={{...styles.iconPortraitImage, width: size/2, height: size/2, tintColor: colors[iconColor]}} />
          </View>
      );
    };
