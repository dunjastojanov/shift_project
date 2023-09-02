import { View, Pressable } from 'react-native';
import { styles } from './Styles';
import { NotificationIcon, HomeIcon, CalendarIcon, GroupIcon, ProfileIcon } from './atoms/icons'

export function NavBar({ state, descriptors, navigation }) {
  const navBarIcons = {
    notification: <NotificationIcon style={styles.navIcon}/>,
    home: <HomeIcon style={styles.navIcon}/>,
    calendar: <CalendarIcon style={styles.navIcon}/>,
    group: <GroupIcon style={styles.navIcon}/>,
    profile: <ProfileIcon style={styles.navIcon}/>
  };

  return (<View style={styles.navBar}>
    {state.routes.map((route, index) => {

      const { options } = descriptors[route.key];
      const label = options.tabBarLabel !== undefined
        ? options.tabBarLabel
        : options.title !== undefined
          ? options.title
          : route.name;

      const isFocused = state.index === index;

      const onPress = () => {
        const event = navigation.emit({
          type: 'tabPress',
          target: route.key,
          canPreventDefault: true,
        });

        if (!isFocused && !event.defaultPrevented) {
          navigation.navigate({ name: route.name, merge: true });
        }
      };

      const onLongPress = () => {
        navigation.emit({
          type: 'tabLongPress',
          target: route.key,
        });
      };

      return (
        <Pressable key={index}
          accessibilityRole="button"
          accessibilityState={isFocused ? { selected: true } : {}}
          accessibilityLabel={options.tabBarAccessibilityLabel}
          testID={options.tabBarTestID}
          onPress={onPress}
          onLongPress={onLongPress}
        >
          {navBarIcons[route.name]}
        </Pressable>
      );
    })}
  </View>);
}
