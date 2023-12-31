import { useState } from "react";
import { Modal, Pressable, StyleSheet, View } from "react-native";
import {
  styles as globalStyles,
  colors,
  transparentColors,
  dropShadow,
} from "../../../shared/Styles";
import { Button, Label } from "../../atoms";
import { IconPortrait } from "../../molecules";

export function NotificationCard(props) {
  const { notification } = props;
  const [show, setShow] = useState(false);
  if (notification) {
  }
  return (
    <View>
      <Pressable style={styles.notificationCard} onPress={() => setShow(true)}>
        <IconPortrait />
        <Label
          header={notification.header}
          color="black"
          style={styles.notificationCardLabel}
        />
      </Pressable>

      <Modal
        animationType="slide"
        transparent={true}
        visible={show}
        onRequestClose={() => setShow(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Label header={notification.header} headerSize={28} color="black" />

            <Label
              header={notification.text}
              headerSize={18}
              color="black"
              style={styles.modalContentText}
            />

            {notification.type === "basic" && (
              <View style={globalStyles.buttonContainer}>
                <Button text="OK" onPress={() => setShow(false)} />
              </View>
            )}

            {notification.type === "request" && (
              <View style={globalStyles.buttonContainer}>
                <Button text="ACCEPT" onPress={() => setShow(false)} />
                <Button text="DENY" onPress={() => setShow(false)} />
              </View>
            )}
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  notificationCard: {
    flexDirection: "row",
    backgroundColor: colors.white,
    borderRadius: 20,
    padding: 15,
    marginTop: 5,
    alignItems: "center",
    gap: 10,
    ...dropShadow,
  },
  notificationCardLabel: {
    maxWidth: "90%",
  },

  modalContainer: {
    backgroundColor: transparentColors.black,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 30,
  },
  modalContent: {
    backgroundColor: colors.white,
    paddingHorizontal: 30,
    paddingVertical: 60,
    borderRadius: 10,
    gap: 20,
    flexDirection: "column",
    alignItems: "center",
    minWidth: "90%",
    ...dropShadow,
  },
  modalContentText: {
    padding: 7.45,
  },
});
