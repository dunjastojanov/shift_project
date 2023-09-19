import { View } from "react-native";
import { styles } from "../../../shared/Styles";
import { useState } from "react";
import {Label, IconButton, ArrowIcon, Text} from "../../atoms"


export function Select({ children, value, label }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <View>
      <Text weight="regular" style={styles.inputLabel}>
        {label}
      </Text>
      <View style={styles.selectContainer}>
        <View style={styles.selectSelected}>
          <Label subheaders={[value]} subheaderSize={16} />
          {expanded === false && (
            <IconButton onPress={() => setExpanded(true)}>
              <ArrowIcon style={styles.arrowIcon} direction="down" />
            </IconButton>
          )}

          {expanded === true && (
            <IconButton onPress={() => setExpanded(false)}>
              <ArrowIcon style={styles.arrowIcon} direction="up" />
            </IconButton>
          )}
        </View>
        {expanded === true && children}
      </View>
    </View>
  );
}
