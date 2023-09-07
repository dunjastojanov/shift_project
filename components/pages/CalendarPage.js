import { ScrollView, View} from 'react-native';
import { OverviewCard } from '../molecules/cards/OverviewCard';
import {styles} from "../Styles"

export function CalendarPage() {

    const calendars =[{group: "Surgery", month: "May"}, {group: "Pediatrics", month: "April"}]
    return (
      
      <ScrollView style={{...styles.page}}>
    <View style={{...styles.page}}>     
      <View style={styles.pageElementContainer}>
      {calendars.map((calendar, index) =>{
        return <OverviewCard header={calendar.group} subheader={calendar.month} key={index}/>
      })}
      </View>
      </View>
    </ScrollView>
      
    )
}