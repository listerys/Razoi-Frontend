import React from 'react';
import { StatusBar, View } from 'react-native';
import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function TabLayout() {
  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      {/* Adjust the status bar */}
      <StatusBar barStyle="dark-content" backgroundColor="#fff" translucent={false} />

      <Tabs
        screenOptions={({ route }) => ({
          tabBarActiveTintColor: '#B71C1C',
          tabBarInactiveTintColor: '#999999',
          tabBarStyle: {
            backgroundColor: '#FFFFFF',
            borderTopWidth: 1,
            elevation: 0, // Removes shadow on Android
            height: 100,
            borderTopColor: '#ddd',
          },
          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: '600',
            marginBottom: 5,
          },
          tabBarIcon: ({ focused, color }) => {
            let iconName: keyof typeof Ionicons.glyphMap = 'home-outline'; // Default icon name

            if (route.name === 'index') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'browseMenu') {
              iconName = focused ? 'restaurant' : 'restaurant-outline';
            } else if (route.name === 'account') {
              iconName = focused ? 'person' : 'person-outline';
            }

            return <Ionicons name={iconName} size={24} color={color} />;
          },
          headerShown: false,
        })}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: 'Home',
          }}
        />
        <Tabs.Screen
          name="browseMenu"
          options={{
            title: 'Browse Menu',
          }}
        />
        <Tabs.Screen
          name="account"
          options={{
            title: 'Account',
          }}
        />
      </Tabs>
    </View>
  );
}
