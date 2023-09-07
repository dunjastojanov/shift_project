import React from 'react';
import { View, Image } from 'react-native';
import {styles} from '../../Styles'

export function ProfilePortrait(props) {
    const { imageUrl, size = "medium", color="white", editable=false } = props
    
    let profilePortraitStyle = {}
    if (size === "medium") {
      profilePortraitStyle = { width: 100, height: 100, borderRadius: 50, borderWidth: 6, borderColor: color };
    } 
    if (size === "large") {
      profilePortraitStyle = { width: 180, height: 180, borderRadius: 90, borderWidth: 10, borderColor: color };
    } 
  
    return (
        <View style={[styles.profilePortraitContainer, profilePortraitStyle]}>
          <Image source={require("../../../assets/images/sarah.png")} style={styles.profilePortraitImage} />
        </View>
      );
}