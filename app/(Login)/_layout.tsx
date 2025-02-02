import { View, Image } from 'react-native'
import { Tabs } from 'expo-router'
import React from 'react'
export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarPosition: 'bottom'
      }}
    >
      <Tabs.Screen 
        name="login"
        options={{
          title: 'login',
          tabBarIcon: ({ color }) => (
            <Image 
              source={require('../../assets/images/key.png')}
              style={{width: 24, height: 24, tintColor: color}}
            />
          )
        }}
      />
       <Tabs.Screen 
        name="setting"
        options={{
          title: 'setting',
          tabBarIcon: ({ color }) => (
            <Image
              source={require('../../assets/images/technology.png')}
              style={{width: 24, height: 24, tintColor: color}}
            />
          )
        }}
      />
    </Tabs>
  )
}