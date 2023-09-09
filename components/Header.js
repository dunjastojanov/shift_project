import { View } from 'react-native';
import { Text } from "./atoms/text/Text";
import { useNavigation } from '@react-navigation/native';
import { styles } from './Styles';
import React, { useEffect, useState } from 'react';
import { BackIcon } from './atoms/icons/BackIcon';
import { ProfilePortrait, IconButton } from './atoms';


const headerTranslation = {
  "GroupOverviewPage": "Groups",
  "GroupEditPage": "Edit Group",
  "GroupAddPage": "Add New Group"
}

export function Header() {
  const navigation = useNavigation();
  const [currentTab, setCurrentTab] = useState('');

  function getHeaderText() {
    const text = currentTab;

    if (text in headerTranslation) 
      return headerTranslation[text];
    return text[0].toUpperCase() + currentTab.slice(1) + "s";
  }
  

  useEffect(() => {
    const unsubscribe = navigation.addListener('state', (e) => {
      const activeRoute = e.data.state.routes[e.data.state.index];
      setCurrentTab(activeRoute.name);
    });
    return unsubscribe;
  }, [navigation]);

  const goBack = () => {
    if (navigation.canGoBack()) {
      navigation.goBack();
    }
  }


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
    {navigation.canGoBack() && <IconButton onPress={goBack}><BackIcon style={styles.headerIcon} /></IconButton>}
    <Text weight="regular" style={styles.headerText}>
      {getHeaderText()}
    </Text>
  </View>;

}
