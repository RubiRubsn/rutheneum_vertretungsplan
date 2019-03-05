import React from 'react';
import { createBottomTabNavigator, createAppContainer, createStackNavigator  } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';
import { settingsScreen } from './components/einstellungen.js';
import { homeScreen } from './components/homescreen.js';
import { KursScreen } from './components/Einstellungen/KursEinstellungen.js'
import { UeberScreen } from './components/Einstellungen/ueber.js'
import { StundenScreen } from './components/StundenScreen.js';
import { Benachrichtigung } from './components/Einstellungen/Benachrichtigung.js';

const getTabBarIcon = (navigation, focused, tintColor) => {
  const { routeName } = navigation.state;
  let IconComponent = Ionicons;
  let iconName;
  if (routeName === 'Home') {
    iconName = `ios-home${focused ? '' : ''}`;
  } else if (routeName === 'Einstellungen') {
    iconName = `ios-construct${focused ? '' : ''}`;
  }
  else if (routeName === 'Stundenplan')  {
    iconName = `ios-clipboard${focused ? '' : ''}`;
  }
  return <IconComponent name={iconName} size={25} color={tintColor} />;
};

export default createAppContainer(
  
  createBottomTabNavigator(
    {
      Home: { screen: homeScreen },
      Stundenplan: {screen: StundenScreen},
      Einstellungen: { screen: createStackNavigator({
        Einstellung2: settingsScreen,
        Über: UeberScreen,
        Kurse:KursScreen,
        Benachrichtigungen: Benachrichtigung
      })
        },
    },
    {
      defaultNavigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, tintColor }) =>
          getTabBarIcon(navigation, focused, tintColor),
      }),
      tabBarOptions: {
        activeTintColor: '#dd6422' ,
        inactiveTintColor: '#999999',
        activeBackgroundColor: "white",
        inactiveBackgroundColor: "white"
      },
      
    },
   
  ),

);
