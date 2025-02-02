import { View, Image } from 'react-native';
import { Tabs } from 'expo-router';
import React from 'react';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarPosition: 'bottom',
      }}
    >
      <Tabs.Screen
        name="Course"
        options={{
          title: 'Course',
          tabBarIcon: ({ color }) => (
            <Image
              source={require('../../assets/images/key.png')}
              style={{ width: 24, height: 24, tintColor: color }}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Upcoming"
        options={{
          title: 'Upcoming',
          tabBarIcon: ({ color }) => (
            <Image
              source={require('../../assets/images/technology.png')}
              style={{ width: 24, height: 24, tintColor: color }}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Settings"
        options={{
          title: 'Settings',
          tabBarIcon: ({ color }) => (
            <Image
              source={require('../../assets/images/technology.png')} // Make sure to add your settings icon in the assets folder
              style={{ width: 24, height: 24, tintColor: color }}
            />
          ),
        }}
      />
    </Tabs>
  );
}
