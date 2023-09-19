import { View, StyleSheet } from "react-native";
import { dropShadow } from "../../../shared/Styles";
import { DeleteIcon, EditIcon, IconButton, Label } from "../../atoms";

export function OverviewCard(props) {
  const { header, subheader, onEdit, onDelete } = props;

  return (
    <View style={styles.overviewCard}>
      <Label
        header={header}
        subheaders={[subheader]}
        subheaderSize={16}
        color="black"
      />

      <View style={styles.overviewCardIconsContainer}>
        {onDelete && (
          <IconButton onPress={onDelete}>
            <DeleteIcon />
          </IconButton>
        )}

        {onEdit && (
          <IconButton onPress={onEdit}>
            <EditIcon />
          </IconButton>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  overviewCard: {
    flexDirection: "row",
    backgroundColor: colors.white,
    borderRadius: cardBorderRadius,
    padding: cardPadding,
    marginTop: cardTopMargin,
    justifyContent: "space-between",
    alignItems: "center",
    ...dropShadow,
  },
  overviewCardIconsContainer: {
    flexDirection: "row",
    gap: 20,
    alignItems: "center",
  },
});
