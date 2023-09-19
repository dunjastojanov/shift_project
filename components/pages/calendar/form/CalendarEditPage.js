import { CalendarForm } from "./CalendarForm";

export function CalendarEditPage({route}) {
  const { calendar } = route.params;
  return <CalendarForm calendar={calendar} />;
}
