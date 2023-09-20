import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { colors } from "../../../shared/Styles";

export function IconPortrait(props) {
  const {
    size = 40,
    color = "purple",
    iconColor = "white",
    type = "notification",
  } = props;
  return (
    <View
      style={{
        ...styles.iconPortraitCircle,
        width: size,
        height: size,
        backgroundColor: colors[color],
        borderRadius: size,
      }}
    >
      {type === "notification" && (
        <Image
          source={require("../../../assets/icons/notification.png")}
          style={{
            ...styles.iconPortraitImage,
            width: size / 2,
            height: size / 2,
            tintColor: colors[iconColor],
          }}
        />
      )}
      {type === "logo" && (
        <Image
          source={require("../../../assets/icons/calendar_white.png")}
          style={{
            ...styles.iconPortraitImage,
            width: size / 2,
            height: size / 2,
            tintColor: colors[iconColor],
          }}
        />
      )}
      {type === "day" && (
        <Image
          source={require("../../../assets/icons/sun.png")}
          style={{
            ...styles.iconPortraitImage,
            width: (size * 3) / 4,
            height: (size * 3) / 4,
            tintColor: colors[iconColor],
          }}
        />
      )}
      {type === "night" && (
        <Image
          source={require("../../../assets/icons/moon.png")}
          style={{
            ...styles.iconPortraitImage,
            width: (size * 3) / 4,
            height: (size * 3) / 4,
            tintColor: colors[iconColor],
          }}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  iconPortraitCircle: {
    justifyContent: "center",
    alignItems: "center",
  },
  iconPortraitImage: {
    resizeMode: "cover",
    borderRadius: 50,
  },
});
