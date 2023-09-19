import { styles } from "../../../../shared/Styles";
import { ScrollView, View } from "react-native";
import { MonthSelect } from "../../../molecules/selects/MonthSelect";
import { useState } from "react";
import { DaySelect } from "../../../molecules/selects/DaySelect";
import { Button, Label, RadioButton } from "../../../atoms";
import { CoworkerSelect } from "../../../molecules/selects/CoworkerSelect";
import { UserContextProvider } from "../../../../shared/context/UserContext";

export function SwitchRequestAddPage({}) {
  const [startMonth, setStartMonth] = useState("January");
  const [endMonth, setEndMonth] = useState("January");
  const [startDay, setStartDay] = useState(1);
  const [endDay, setEndDay] = useState(1);
  const [coworker, setCoworker] = useState({
    firstName: "",
    lastName: "",
    id: "",
    color: "",
  });

  return (
    <ScrollView style={styles.page}>
      <View style={styles.page}>
        <View style={styles.pageElementContainer}>
          <Label subheaders={["From"]} color="black" />
          <MonthSelect
            month={startMonth}
            onMonthChange={(m) => setStartMonth(m)}
          />
          <DaySelect
            month={startMonth}
            day={startDay}
            onDayChange={(d) => setStartDay(d)}
          />
          <View
            style={{
              ...styles.radioButtonContainer,
            }}
          >
            <RadioButton type="day" />
            <RadioButton type="night" />
          </View>
        </View>

        <View style={styles.pageElementContainer}>
          <Label subheaders={["To"]} color="black" />
          <MonthSelect month={endMonth} onMonthChange={(m) => setEndMonth(m)} />
          <DaySelect
            month={endMonth}
            day={endDay}
            onDayChange={(d) => setEndDay(d)}
          />
          <View
            style={{
              ...styles.radioButtonContainer,
            }}
          >
            <RadioButton type="day" />
            <RadioButton type="night" />
          </View>
        </View>

        <View style={styles.pageElementContainer}>
          <UserContextProvider>
            <CoworkerSelect
              coworker={coworker}
              onCoworkerChange={(user) => setCoworker(user)}
            />
          </UserContextProvider>
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
