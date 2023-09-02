import { StyleSheet } from 'react-native';

const colors = {
  lightGrey: "#F3E8E8",
  purple: "#4C0E7D"
}

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    navBar: {
      width: '100%',
      height: 60,
      position: 'absolute',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-evenly',
      bottom: 0,
      paddingHorizontal: 15,
      backgroundColor: colors.lightGrey
    },
    navIcon: {
      width: 30,
      height: 30
    }
  });