import { View, Image, StyleSheet } from 'react-native';

export function ProfilePortrait(props) {
    const { size = "medium", color="white", editable=false, style={}, id=1} = props
    
    let profilePortraitStyle = {}
    if (size === "tiny") {
      profilePortraitStyle = { width: 30, height: 30, borderRadius: 15, borderWidth: 2, borderColor: color };
    } 
    if (size === "small") {
      profilePortraitStyle = { width: 50, height: 50, borderRadius: 25, borderWidth: 2, borderColor: color };
    } 
    if (size === "medium") {
      profilePortraitStyle = { width: 100, height: 100, borderRadius: 50, borderWidth: 6, borderColor: color };
    } 
    if (size === "large") {
      profilePortraitStyle = { width: 180, height: 180, borderRadius: 90, borderWidth: 10, borderColor: color };
    } 
  
    return (
        <View style={[styles.profilePortraitContainer, profilePortraitStyle, style]}>

          {id === 1 && <Image source={require("../../../assets/images/1.jpg")} style={{...styles.profilePortraitImage, borderRadius: profilePortraitStyle.borderRadius}} />}
          {id === 2 && <Image source={require("../../../assets/images/2.jpg")} style={{...styles.profilePortraitImage, borderRadius: profilePortraitStyle.borderRadius}}/>}
          {id === 3 && <Image source={require("../../../assets/images/3.jpg")} style={{...styles.profilePortraitImage, borderRadius: profilePortraitStyle.borderRadius}}/>}
          {id === 4 && <Image source={require("../../../assets/images/4.jpg")} style={{...styles.profilePortraitImage, borderRadius: profilePortraitStyle.borderRadius}}/>}
          {id === 5 && <Image source={require("../../../assets/images/5.jpg")} style={{...styles.profilePortraitImage, borderRadius: profilePortraitStyle.borderRadius}} />}
          {id === 6 && <Image source={require("../../../assets/images/6.jpg")} style={{...styles.profilePortraitImage, borderRadius: profilePortraitStyle.borderRadius}} />}
          {id === 7 && <Image source={require("../../../assets/images/7.jpg")} style={{...styles.profilePortraitImage, borderRadius: profilePortraitStyle.borderRadius}} />}
          {id === 8 && <Image source={require("../../../assets/images/8.jpg")} style={{...styles.profilePortraitImage, borderRadius: profilePortraitStyle.borderRadius}} />}
          {id === 9 && <Image source={require("../../../assets/images/9.jpg")} style={{...styles.profilePortraitImage, borderRadius: profilePortraitStyle.borderRadius}} />}
          {id === 10 && <Image source={require("../../../assets/images/10.jpg")} style={{...styles.profilePortraitImage, borderRadius: profilePortraitStyle.borderRadius}} />}
          
        </View>
      );
}

const styles = StyleSheet.create({
  profilePortraitContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  profilePortraitImage: {
    width: "100%",
    height: "100%",
    overflow: "hidden",
  },
  
})