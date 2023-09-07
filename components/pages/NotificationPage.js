import { View, ScrollView} from 'react-native';
import { NextShiftCard } from '../molecules/cards/NextShiftCard';
import {styles} from "../Styles"
import { NotificationCard } from '../molecules/cards/NotificationCard';

export function NotificationPage() {
  const notifications= [
    "Schedule for next week has been altered",
    "New schedule is due in 3 days",
    "Schedule for next week has been altered",
    "Schedule for next week has been altered",
    "Schedule for next week has been altered",
    "Schedule for next week has been altered",
    "Schedule for next week has been altered",
    "Schedule for next week has been altered",
    "Schedule for next week has been altered",
    "Schedule for next week has been altered",
    "Schedule for next week has been altered",
    "Schedule for next week has been altered",
    "Schedule for next week has been altered",
  ]
  
  return ( <ScrollView style={{...styles.page}}>
    <View style={{...styles.page}}>     
      <View style={styles.pageElementContainer}>
        {notifications.map((notification,index) => {
        return <NotificationCard text={notification} key={index}/>
        })}
      </View>
      </View>
    </ScrollView>)
}