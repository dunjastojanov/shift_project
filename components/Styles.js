import { StyleSheet } from 'react-native';

const colors = {
  white: "#FFFFFF",
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
      backgroundColor: colors.white
    },
    navIcon: {
      width: 30,
      height: 30
    },
    headerContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 10,
      backgroundColor: colors.white
    },
    headerText: {
      fontSize: 34,
      paddingBottom: 3
    },
    profilePortraitContainer: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    profilePortraitImage: {
      width: '100%',
      height: '100%',
      borderRadius: 50,
      overflow: 'hidden',
    },
  });