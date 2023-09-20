import { useState } from "react";
import { View, ScrollView } from "react-native";
import { styles } from "../../../../shared/Styles";
import { Button, Label } from "../../../atoms";
import { DaySelect, MonthSelect } from "../../../organisms";
export function VacationRequestAddPage({}) {
  const [startMonth, setStartMonth] = useState("January");
  const [endMonth, setEndMonth] = useState("January");
  const [startDay, setStartDay] = useState(1);
  const [endDay, setEndDay] = useState(1);

  return (
    <ScrollView style={styles.page}>
      <View style={styles.page}>
        <View style={styles.pageElementContainer}>
          <Label subheaders={["Start"]} color="black" />
          <MonthSelect
            month={startMonth}
            onMonthChange={(m) => setStartMonth(m)}
          />
          <DaySelect
            month={startMonth}
            day={startDay}
            onDayChange={(d) => setStartDay(d)}
          />
        </View>

        <View style={styles.pageElementContainer}>
          <Label subheaders={["End"]} color="black" />
          <MonthSelect month={endMonth} onMonthChange={(m) => setEndMonth(m)} />
          <DaySelect
            month={endMonth}
            day={endDay}
            onDayChange={(d) => setEndDay(d)}
          />
        </View>

        <View
          style={{ ...styles.buttonContainer, ...styles.pageElementContainer }}
        >
          <Button text={"Add"} />
        </View>
      </View>
    </ScrollView>
  );
}
