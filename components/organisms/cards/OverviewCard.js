import { View, StyleSheet } from "react-native";
import { dropShadow, colors } from "../../../shared/Styles";
import {
  DeleteIcon,
  EditIcon,
  ExportIcon,
  IconButton,
  Label,
} from "../../atoms";

export function OverviewCard(props) {
  const { header, subheader, onEdit, onDelete, onExport } = props;

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

        {onExport && (
          <IconButton onPress={onExport}>
            <ExportIcon />
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
    borderRadius: 20,
    padding: 15,
    marginTop: 5,
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
