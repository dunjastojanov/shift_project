import { Image } from 'react-native';

export function SunIcon({style, direction="up"}) {
  return <Image style={style} source={direction === "up" ? require("../../../assets/icons/sun.png"): require("../../../assets/icons/arrow_down.png")}></Image>;
}

