import { GroupForm } from "./GroupForm";

export function GroupEditPage({ route, navigation }) {
  const { group } = route.params;
  return <GroupForm group={group}/>
}
