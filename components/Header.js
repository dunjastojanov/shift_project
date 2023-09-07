import { View } from 'react-native';
import { Text } from "./atoms/text/Text";
import { useNavigation } from '@react-navigation/native';
import { styles } from './Styles';
import React, { useEffect, useState } from 'react';
import { BackIcon } from './atoms/icons/BackIcon';
import { ProfilePortrait } from './atoms';

export function Header() {
  const navigation = useNavigation();
  const [currentTab, setCurrentTab] = useState('');

  useEffect(() => {
    const unsubscribe = navigation.addListener('state', (e) => {
      const activeRoute = e.data.state.routes[e.data.state.index];
      setCurrentTab(activeRoute.name);
    });
    return unsubscribe;
  }, [navigation]);


  if (currentTab === 'home') {
    return (<View style={styles.headerContainer}>
      <ProfilePortrait size="medium" borderColor='#F3E8E8' imageUrl="../../../images/sarah.png" />
      <View>
        <Text weight="regular" style={styles.headerText}>Welcome</Text>
        <Text weight="bold" style={styles.headerText}>Sarah</Text>
      </View>
    </View>);
  }

  if (currentTab) return <View style={styles.headerContainer}>
    <BackIcon style={styles.headerIcon} />
    <Text weight="regular" style={styles.headerText}>{currentTab[0].toUpperCase() + currentTab.slice(1) + "s"}</Text>

  </View>;

}
