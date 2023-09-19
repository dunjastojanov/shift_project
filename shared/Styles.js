import { StyleSheet } from "react-native";

export const colors = {
  red: "#FF0000",
  tomato: "#FF6347",
  coral: "#FF6F61",
  orange: "#FF7A00",
  gold: "#FFD700",
  peach: "#FFDAB9",
  yellow: "#FFFF00",
  green: "#00FF00",
  teal: "#008080",
  blue: "#0000FF",
  navy: "#000080",
  indigo: "#4B0082",
  violet: "#EE82EE",
  white: "#FFFFFF",
  black: "#000000",
  purple: "#4C0E7D",
  pink: "#FF69B4",
  lavender: "#E6E6FA",
  slateGray: "#708090",
  turquoise: "#40E0D0",
};

const transparentColors = {
  black: "#00000066",
  white: "#FFFFFF66",
};

const cardPadding = 15;
const cardBorderRadius = 20;
const cardTopMargin = 5;
const gap = 10;

export const dropShadow = {
  shadowColor: "black",
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.2,
  shadowRadius: 4,
  elevation: 5,
};

export const glow = {
  shadowColor: colors.white,
  shadowOpacity: 0.9,
  shadowRadius: 20,
  elevation: 5,
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  pageElementContainer: {
    marginVertical: 15,
    marginHorizontal: 30,
  },


  profilePortraitContainerSelected: {
    justifyContent: "center",
    alignItems: "center",
  },
  profilePortraitImage: {
    width: "100%",
    height: "100%",
    overflow: "hidden",
  },

  page: {
    flex: 1,
    paddingBottom: 100,
    flexDirection: "column",
  },
  homePage: {},

  profileLabelContainer: {
    marginHorizontal: 40,
    gap: 20,
  },
  profileIconContainer: {
    alignItems: "center",
    marginVertical: 30,
  },

  buttonContainer: {
    flexDirection: "row",
    gap: gap,
  },


  selectContainer: {
    backgroundColor: colors.purple,
    borderRadius: 20,
  },
  selectSelected: {
    marginHorizontal: 20,
    marginTop: 15,
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  selectButtonContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    paddingBottom: 10,
  },
  daySelectButton: {
    width: "14%",
  },
  coworkerSelectButton: {
    width: "90%",
    flexDirection: "row",
    gap: 10,
    justifyContent: "flex-start",
    marginLeft: 15,
  },
  selectButton: {
    padding: 10,
    justifyContent: "center",
    width: "33%",
    borderRadius: 20,
  },
  selectButtonSelected: {
    backgroundColor: transparentColors.white,
  },
  selectText: {
    color: colors.white,
    fontSize: 14,
    textAlign: "center",
  },
  groupSelectText: {
    color: colors.white,
    fontSize: 14,
  },
  arrowIcon: {
    width: 20,
    height: 20,
  },
  groupSelectButton: {
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  groupSelectButtonContainer: {
    paddingBottom: 10,
  },
  groupSelectButtonSelected: {
    backgroundColor: transparentColors.white,
  },
  groupSelectItem: {
    paddingHorizontal: 30,
    paddingVertical: 5,
    flexDirection: "row",
    gap: 20,
    alignItems: "center",
  },
  groupSelectItemContainer: {
    paddingBottom: 20,
  },

  loginPage: {
    flexDirection: "column",
    justifyContent: "center",
  },
  logoContainer: {
    alignItems: "center",
  },
  radioButtonContainer: {
    flexDirection: "row",
    alignItems: "start",
    gap: 10,
    paddingVertical: 15,
  },
});
