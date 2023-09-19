import { Image } from 'react-native';

export function MoonIcon({style, direction="up"}) {
  return <Image style={style} source={direction === "up" ? require("../../../assets/icons/moon.png"): require("../../../assets/icons/arrow_down.png")}></Image>;
}

