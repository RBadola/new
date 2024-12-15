import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';



export default function TabLayout() {

  return (
    <Tabs
      screenOptions={{
        // tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
       
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: 'absolute',
          },
          default: {},
        }),
      }}>
      {/* <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          // tabBarIcon: ({ color }) => ,
        }}
      /> */}
      <Tabs.Screen
        name="RegisterForm"
        options={{
          title: 'Form',
          // tabBarIcon: ({ color }) => <IconSymbol size={28} name="paperplane.fill" color={color} />,
        }}
      />
    </Tabs>
  );
}
