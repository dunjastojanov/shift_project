import { StyleSheet } from 'react-native';

export const colors = {
  white: "#FFFFFF",
  purple: "#4C0E7D",
  orange: "#FF7A00",
  black: "#000000"
}

const cardPadding = 15;
const cardBorderRadius = 20;
const cardTopMargin = 5;
const gap = 10;

const dropShadow = {
  shadowColor: 'black',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.2,
  shadowRadius: 4,
  elevation: 5,
}
export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    pageElementContainer: {
      marginVertical: 15,
      marginHorizontal: 30
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
      gap: gap,
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
    labelContainer: {
      maxWidth: '100%',
    },
    labelHeader: {
      flexWrap: 'wrap',
      maxWidth: '100%',
    },
    labelSubheaderContainer: {},
    labelSubheader: {
      flexWrap: 'wrap',
      maxWidth: '100%',
    },
    nextShiftCard: {
      backgroundColor: colors.orange,
      padding: cardPadding,
      borderRadius: cardBorderRadius,
      ...dropShadow
    },
    nextShiftCardContainer: {
      marginTop: cardTopMargin
    },
    page: {
      flex: 1,
      paddingBottom: 60
    }, 
    homePage: {
    },
    profilePortraitContainer: {},
    iconPortraitCircle: {
      borderRadius: 75,
      justifyContent: 'center',
      alignItems: 'center',
    },
    iconPortraitImage: {
      resizeMode: 'cover',
      borderRadius: 50, 

    },
    notificationCard: {
      flexDirection: "row",
      backgroundColor: colors.white,
      borderRadius: cardBorderRadius,
      padding: cardPadding,
      marginTop: cardTopMargin,
      alignItems: 'center',
      gap: gap,
      ...dropShadow
    },
    notificationCardLabel: {
      maxWidth: "90%"
    },
    overviewCard: {
      flexDirection: "row",
      backgroundColor: colors.white,
      borderRadius: cardBorderRadius,
      padding: cardPadding,
      marginTop: cardTopMargin,
      justifyContent: "space-between",
      alignItems: "center",
      ...dropShadow
    },
    overviewCardIconsContainer: {
      flexDirection: "row",
      gap: gap,
      alignItems: 'center',

    },
    profileLabelContainer: {
      marginHorizontal: 40,
      gap: 20
    },
    profileIconContainer: {
      alignItems: 'center',
      marginVertical: 30,
    },
    labelTagContainer: {
      flexDirection: "row",
      gap: gap,
      marginTop: 5
    },
    labelTag :{
      borderRadius: 20,
      ...dropShadow,
      paddingHorizontal: 24,
      paddingVertical: 12,
      backgroundColor: colors.white
    },
    primaryButton: {
        backgroundColor: colors.purple,
        color: colors.white,
        borderRadius: 20,
        flex: 1,
        paddingVertical: 12,
        paddingHorizontal: 24,
        alignItems: "center",
        maxHeight: 45,
        ...dropShadow
    },
    primaryButtonText: {
      color: colors.white,
      fontSize: 14
    },
    profileButtonContainer: {
      flexDirection: 'row',
      gap: gap,
      flexGrow: 1,
      marginTop: 80
    }
  });