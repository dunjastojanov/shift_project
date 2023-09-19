import { ScrollView, View } from "react-native";
import { OverviewCard } from "../../../molecules/cards/OverviewCard";
import { styles } from "../../../../shared/Styles";
import { Button } from "../../../atoms/buttons/Button";
import { useContext, useEffect, useState } from "react";
import api from './../../../../shared/api';
import { GroupContext } from "../../../../shared/context/GroupContext";

export function CalendarOverviewPage({navigation}) {
  const [calendars, setCalendars] = useState([])

  const {findGroupById} = useContext(GroupContext)

  useEffect(()=> {
    api.get("/schedules").then(res=> {
      setCalendars(res.data)
    })
  })

  return (
    <ScrollView style={{ ...styles.page }}>
      <View style={{ ...styles.page }}>
        <View style={styles.pageElementContainer}>
          {calendars.map((calendar, index) => {
            return (
              <OverviewCard
                header={findGroupById(calendar.group).name}
                subheader={calendar.month}
                key={index}
              />
            );
          })}
        </View>
        <View style={{...styles.buttonContainer, ...styles.pageElementContainer}}>
          <Button text="Add New Schedule" onPress={()=>{navigation.navigate("CalendarAddPage")}}/>
        </View>
      </View>
    </ScrollView>
  );
}
