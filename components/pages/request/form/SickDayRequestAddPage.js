import { styles } from "../../../../shared/Styles";
import {View} from "react-native"
import { MonthSelect } from "../../../molecules/selects/MonthSelect";
import { useState } from "react";
import { DaySelect } from "../../../molecules/selects/DaySelect";
import { Button, Label } from "../../../atoms";

export function SickDayRequestAddPage({}){
    const [startMonth, setStartMonth] = useState("January")
    const [endMonth, setEndMonth] = useState("January")
    const [startDay, setStartDay] = useState(1)
    const [endDay, setEndDay] = useState(1)


    return (<View style={styles.page}>

        <View style={styles.pageElementContainer}>
            <Label subheaders={["Start"]} color="black"/>
            <MonthSelect month={startMonth} onMonthChange={(m)=> setStartMonth(m)}/>
            <DaySelect month={startMonth} day={startDay} onDayChange={(d)=> setStartDay(d)}/>
        </View>

        <View style={styles.pageElementContainer}>
            <Label subheaders={["End"]} color="black"/>
            <MonthSelect month={endMonth} onMonthChange={(m)=>setEndMonth(m)}/>
            <DaySelect month={endMonth} day={endDay} onDayChange={(d)=> setEndDay(d)}/>
        </View>

        <View style={{...styles.buttonContainer, ...styles.pageElementContainer}}>
            <Button text={"Add"}/>
        </View>

    </View>)
}