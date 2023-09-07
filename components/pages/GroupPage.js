import { ScrollView, View } from "react-native";
import { OverviewCard } from "../molecules/cards/OverviewCard";
import { styles } from "../Styles";


export function GroupPage() {
  const groups = [
    "Surgery",
    "Pediatrics",
    "Neurology",
    "Dermatology",
    "Psychiatry",
  ];
  return (
    <ScrollView style={{ ...styles.page }}>
      <View style={{ ...styles.page }}>
        <View style={styles.pageElementContainer}>
          {groups.map((group, index) => {
            return <OverviewCard subheader={group} key={index} />;
          })}
        </View>
      </View>
    </ScrollView>
  );
}
