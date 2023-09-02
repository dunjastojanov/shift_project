import React from 'react';
import { View, Image } from 'react-native';
import {styles} from '../../Styles'

export function ProfilePortrait(props) {
    const { imageUrl, size = 100, borderWidth = 6, borderColor = 'white', editable=false } = props
    
    return (
        <View style={[styles.profilePortraitContainer, { width: size, height: size, borderRadius: size / 2, borderWidth, borderColor }]}>
          <Image source={require("../../../assets/images/sarah.png")} style={styles.profilePortraitImage} />
        </View>
      );
}