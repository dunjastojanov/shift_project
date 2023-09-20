import { useContext, useEffect, useState } from "react";
import { ScrollView, View } from "react-native";
import { styles } from "../../../../shared/Styles";
import { GroupContext } from "../../../../shared/context/GroupContext";
import { LoggedUserContext } from "../../../../shared/context/LoggedUserContext";
import { Button } from "../../../atoms";
import { OverviewCard } from "../../../organisms";
import api from './../../../../shared/api';

export function CalendarOverviewPage({navigation}) {
  const [calendars, setCalendars] = useState([])

  const {findGroupById} = useContext(GroupContext)
  const {isManager} = useContext(LoggedUserContext)

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
                onEdit={isManager() ? ()=> {}: null}
                onDelete={isManager() ? ()=> {}: null}
                onExport={isManager() ? ()=> {}: ()=>{}}
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
