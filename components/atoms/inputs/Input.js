
import {View, TextInput} from 'react-native';
import {Text} from "../text/Text"
import { useFonts } from 'expo-font';
import {styles} from "../../Styles"


export const Input = ({ label, value, onChangeText }) => {

    let [fontsLoaded] = useFonts({
        "regular": require('../../../assets/fonts/Montserrat-Regular.ttf'),
      })

    return (
      <View style={styles.inputContainer}>
        <Text weight="regular" style={styles.inputLabel}>{label}</Text>
        <TextInput
        
          value={value}
          onChangeText={onChangeText}
          style={{fontFamily: "regular", ...styles.input}}
        />
      </View>
    );
  };