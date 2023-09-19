import { View, StyleSheet, ScrollView } from "react-native";
import { Label } from "../../atoms";
import { getDaysInMonth, generateCalendar } from "../../../shared/utils";
import { colors } from "../../../shared/Styles";

export function Calendar({}) {
  const month = "May";
  const calendar = generateCalendar(getDaysInMonth(month), 0);
  const daysOfWeek = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
  const dayShift = [1, 5, 9, 13, 17, 21, 25, 30];
  const nightShifts = [2, 6, 10, 14, 18, 22, 26, 31];
  const today = 9;

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        flexDirection: "row",
        ...styles.calendarScrollContainer,
      }}
    >
      <View>
        {daysOfWeek.map((weekday) => {
          return (
            <View key={weekday + "_header"} style={styles.row}>
              <View style={styles.field}>
                <Label header={weekday} color="black" />
              </View>

              {calendar[weekday].map((day) => {
                return (
                  <View
                    key={day}
                    style={
                      dayShift.includes(day)
                        ? { ...styles.dayField, ...styles.field }
                        : nightShifts.includes(day)
                        ? { ...styles.nightField, ...styles.field }
                        : { ...styles.field }
                    }
                  >
                    {day === today && (
                      <View
                        style={styles.todayIndicator}
                      ></View>
                    )}
                    <Label
                      header={`${month} ${day}`}
                      color={
                        dayShift.includes(day) || nightShifts.includes(day)
                          ? "white"
                          : "black"
                      }
                    />
                  </View>
                );
              })}
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    width: "100%",
  },
  field: {
    width: "16%",
    margin: 2,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
  },
  dayField: {
    backgroundColor: colors.orange,
  },
  nightField: {
    backgroundColor: colors.navy,
  },
  calendarContainer: {
    width: "100%",
  },
  calendarScrollContainer: {
    width: 750,
  },
  todayIndicator: {
    position: "absolute",
    top: 10,
    left: 10,
    width: 8,
    height: 8,
    borderRadius: 3,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
}
});
