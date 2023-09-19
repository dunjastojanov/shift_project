import { Image } from 'react-native';

export function ArrowIcon({style, direction="up"}) {
  return <Image style={style} source={direction === "up" ? require("../../../assets/icons/arrow_up.png"): require("../../../assets/icons/arrow_down.png")}></Image>;
}

