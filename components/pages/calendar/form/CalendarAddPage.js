import { CalendarForm } from "./CalendarForm";
import { ScrollView } from "react-native";
import {styles} from "../../../../shared/Styles"
import { GroupContextProvider } from './../../../../shared/context/GroupContext';

export function CalendarAddPage() {
  return <CalendarForm calendar={{group: "", month: "", schedule: null}} />;
}