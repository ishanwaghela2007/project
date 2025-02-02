import { View } from 'react-native'
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
        name="index"
        options={{
          title: 'login'
        }}
      />
    </Tabs>
  )
}