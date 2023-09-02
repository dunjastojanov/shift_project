import { Image } from 'react-native';
import { styles } from './components/Styles';

export function ProfileIcon({style}) {
  return <Image style={style} source={require("./assets/icons/profile.png")}></Image>;
}
