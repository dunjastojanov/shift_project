import { Text as NativeText} from 'react-native';
import { useFonts } from 'expo-font';

export function Text(props) {
    const {style, weight, children} = props;

    let [fontsLoaded] = useFonts({
        "regular": require('../../../assets/fonts/Montserrat-Regular.ttf'),
        "bold": require('../../../assets/fonts/Montserrat-Bold.ttf'),
      })

    const textStyle = [{ fontFamily: weight, ...style }];

    if (fontsLoaded) return <NativeText style={textStyle}>{children}</NativeText>
} 