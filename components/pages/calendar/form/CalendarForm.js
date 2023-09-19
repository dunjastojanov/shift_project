import { View, ScrollView } from "react-native";
import { useState, useEffect } from "react";
import {
  MonthSelect,
  GroupSelect,
  Legend,
  UserTrack,
} from "../../../molecules";
import { styles } from "../../../../shared/Styles";
import { Button, IconButton, Label, ProfilePortrait } from "../../../atoms";
import { getDaysInMonth } from "./../../../../shared/utils";
import { getDays } from "../../../../shared/utils";

export function CalendarForm({ calendar }) {
  const [data, setData] = useState({
    month: "May",
    group: 1,
    schedule: getDays(getDaysInMonth("May")),
  });
  
  const [page, setPage] = useState(1);

  const [selected, setSelected] = useState(null);
  const [expanded, setExpanded] = useState({ index: null, time: null });

  function select(id) {
    if (id !== selected) setSelected(id);
    else setSelected(null);
  }

  function onPress(time, index) {
    if (selected) {
      if (!data.schedule[index][time].includes(selected))
        setData({
          ...data,
          schedule: {
            ...data.schedule,
            [index]: {
              ...data.schedule[index],
              [time]: [...data.schedule[index][time], selected],
            },
          },
        });
    } else setExpanded({ time: time, index: index });
  }

  useEffect(()=>{
    console.log(JSON.stringify(data))
  }, [data])

  return (
    <ScrollView style={styles.page}>
      <View style={styles.page}>
        {page === 1 && (
          <View>
            <View style={styles.pageElementContainer}>
              <MonthSelect
                month={data.month}
                onMonthChange={(month) => {
                  setData({
                    ...data,
                    schedule: getDays(getDaysInMonth(month)),
                    month: month,
                  });
                }}
              />
            </View>

            <View style={styles.pageElementContainer}>
              <GroupSelect
                group={data.group}
                onGroupChange={(group) => {
                  setData({ ...data, group: group.id });
                }}
              />
            </View>

            {data.month && data.group && (
              <View
                style={{
                  ...styles.pageElementContainer,
                  ...styles.buttonContainer,
                }}
              >
                <Button text={"Next"} onPress={() => setPage(2)} />
              </View>
            )}
          </View>
        )}

        {page === 2 && (
          <View>
            <View style={styles.pageElementContainer}>
              <Label
                subheaders={[`${data.group}, ${data.month}`]}
                subheaderSize={34}
                color="black"
              />
            </View>

            <UserTrack select={select} selected={selected} group={data.group} />
            <View style={styles.pageElementContainer}>
              <Legend />
            </View>

            <View>
              {data.schedule !== null &&
                Object.entries(data.schedule).map(([day, daySchedule]) => {
                  return (
                    <View key={day} style={styles.dayElement}>
                      <Label
                        header={day}
                        color="black"
                        style={styles.dayElementHeader}
                      />
                      <View style={styles.dayPill}>
                        <IconButton
                          style={
                            expanded.index === day
                              ? expanded.time === "day"
                                ? {
                                    ...styles.dayPillDay,
                                    ...styles.dayPillExpanded,
                                  }
                                : {
                                    ...styles.dayPillDay,
                                    ...styles.dayPillCollapsed,
                                  }
                              : styles.dayPillDay
                          }
                          onPress={() => onPress("day", day)}
                        >
                          {daySchedule.day.map((user) => {
                            return (
                              <ProfilePortrait
                                size="tiny"
                                style={styles.dayPillIcon}
                                key={user}
                                id={user}
                              />
                            );
                          })}
                        </IconButton>
                        <IconButton
                          style={
                            expanded.index === day
                              ? expanded.time === "night"
                                ? {
                                    ...styles.dayPillNight,
                                    ...styles.dayPillExpanded,
                                  }
                                : {
                                    ...styles.dayPillNight,
                                    ...styles.dayPillCollapsed,
                                  }
                              : styles.dayPillNight
                          }
                          onPress={() => {
                            onPress("night", day);
                          }}
                        >
                          {daySchedule.night.map((user) => {
                            return (
                              <ProfilePortrait
                                size="tiny"
                                style={styles.dayPillIcon}
                                id={user}
                                key={user}
                              />
                            );
                          })}
                        </IconButton>
                      </View>
                    </View>
                  );
                })}
            </View>

            <View
              style={{
                ...styles.pageElementContainer,
                ...styles.buttonContainer,
              }}
            >
              <Button text="Add Schedule" />
            </View>
          </View>
        )}
      </View>
    </ScrollView>
  );
}
