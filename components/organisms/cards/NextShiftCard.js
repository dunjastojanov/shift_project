import { View, StyleSheet } from "react-native";
import { Label } from "../../atoms";
import { dropShadow } from "../../../shared/Styles";

export function NextShiftCard() {
  return (
    <View style={styles.nextShiftCardContainer}>
      <Label color="black" header="Your next shift is" headerSize={17} />
      <View style={styles.nextShiftCard}>
        <Label header="TODAY, TUESDAY" subheaders={["MAY 15", "07:00"]} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  nextShiftCard: {
    backgroundColor: colors.orange,
    padding: cardPadding,
    borderRadius: cardBorderRadius,
    ...dropShadow,
  },
  nextShiftCardContainer: {
    marginTop: cardTopMargin,
  },
});
