import { useState } from "react";
import { ScrollView, View, StyleSheet } from "react-native";
import { colors, dropShadow, styles as globalStyles } from "../../../../shared/Styles";
import { getDays } from "../../../../shared/utils";
import { Button, IconButton, Label } from "../../../atoms";
import { ProfilePortrait } from "../../../molecules";
import {
  GroupSelect,
  Legend,
  MonthSelect,
  UserTrack,
} from "../../../organisms";
import { getDaysInMonth } from "./../../../../shared/utils";

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

  return (
    <ScrollView style={globalStyles.page}>
      <View style={globalStyles.page}>
        {page === 1 && (
          <View>
            <View style={globalStyles.pageElementContainer}>
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

            <View style={globalStyles.pageElementContainer}>
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
                  ...globalStyles.pageElementContainer,
                  ...globalStyles.buttonContainer,
                }}
              >
                <Button text={"Next"} onPress={() => setPage(2)} />
              </View>
            )}
          </View>
        )}

        {page === 2 && (
          <View>
            <View style={globalStyles.pageElementContainer}>
              <Label
                subheaders={[`${data.group}, ${data.month}`]}
                subheaderSize={34}
                color="black"
              />
            </View>

            <UserTrack select={select} selected={selected} group={data.group} />
            <View style={globalStyles.pageElementContainer}>
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
                ...globalStyles.pageElementContainer,
                ...globalStyles.buttonContainer,
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

const styles = StyleSheet.create({
  dayElement: {
    flexDirection: "row",
    alignItems: "center",
  },
  dayPill: {
    flexDirection: "row",
    width: "80%",
    marginVertical: 5,
    marginHorizontal: 15,
    minHeight: 36,
  },
  dayPillDay: {
    flexDirection: "row",
    backgroundColor: colors.orange,
    width: "50%",
    overflow: "hidden",
    paddingVertical: 5,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    ...dropShadow,
  },
  dayPillNight: {
    flexDirection: "row",
    overflow: "hidden",
    backgroundColor: colors.navy,
    width: "50%",
    paddingVertical: 5,
    ...dropShadow,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
  },
  dayElementHeader: {
    width: 45,
    textAlign: "right",
  },
  dayPillCollapsed: {
    width: 0,
    borderRadius: 0,
  },
  dayPillExpanded: {
    width: "100%",
    borderRadius: 20,
    overflow: "visible",
    flexWrap: "wrap",
  },
  dayPillIcon: {
    marginHorizontal: 5,
  },
});
