import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { RootStackParamsList } from './Routes';
import { Profile, Home } from '../screens';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ProfileTabContent, ProfileTabTitle } from '../screens/profile';

const Stack = createStackNavigator<RootStackParamsList>();
const Drawer = createDrawerNavigator<RootStackParamsList>();
const ProfileTabs = createMaterialTopTabNavigator();

const renderTabBarLabel =
  (title: string) =>
  ({ focused }: { focused: boolean }) => (
    <ProfileTabTitle title={title} isFocused={focused} />
  );
export const ProfileTabsNavigation = () => {
  return (
    <ProfileTabs.Navigator
      screenOptions={{
        tabBarIndicatorStyle: { backgroundColor: 'transparent' },
        tabBarStyle: { zIndex: 0, elevation: 0 },
      }}>
      <ProfileTabs.Screen
        name="Tab1"
        options={{ tabBarLabel: renderTabBarLabel('Photos') }}
        component={ProfileTabContent}
      />
      <ProfileTabs.Screen
        name="Tab2"
        options={{ tabBarLabel: renderTabBarLabel('Videos') }}
        component={ProfileTabContent}
      />
      <ProfileTabs.Screen
        name="Tab3"
        options={{ tabBarLabel: renderTabBarLabel('Saved') }}
        component={ProfileTabContent}
      />
    </ProfileTabs.Navigator>
  );
};

const MainMenuNavigation = () => {
  return (
    <Drawer.Navigator
      screenOptions={{ header: () => null, headerShown: false }}>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Profile" component={Profile} />
    </Drawer.Navigator>
  );
};

const MainNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{ header: () => null, headerShown: false }}
      initialRouteName="Drawer">
      <Stack.Screen name="Drawer" component={MainMenuNavigation} />
    </Stack.Navigator>
  );
};

export default MainNavigation;
