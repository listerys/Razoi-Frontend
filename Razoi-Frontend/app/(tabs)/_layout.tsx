import React from 'react';
import { Tabs } from 'expo-router';
import { Animated } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'; // Import Material Icons

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: '#B71C1C',
        tabBarInactiveTintColor: '#999999',
        tabBarStyle: {
          backgroundColor: '#FFFFFF',
          borderTopWidth: 1,
          borderTopColor: '#E0E0E0',
          height: 60,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '600',
          marginBottom: 5,
        },
        tabBarIcon: ({ focused, color }) => {
          const scaleValue = new Animated.Value(1);

          if (focused) {
            Animated.spring(scaleValue, {
              toValue: 1.2,
              friction: 4,
              useNativeDriver: true,
            }).start(() => {
              Animated.spring(scaleValue, {
                toValue: 1,
                friction: 4,
                useNativeDriver: true,
              }).start();
            });
          }

          // Define the iconName with Material Icons
          let iconName = 'home';

          if (route.name === 'index') {
            iconName = focused ? 'home' : 'home-outlined'; // Material Icon variations
          } else if (route.name === 'browseMenu') {
            iconName = focused ? 'restaurant' : 'restaurant-menu'; // Menu icon
          } else if (route.name === 'account') {
            iconName = focused ? 'account-circle' : 'person-outline'; // Account icon
          }

          return (
            <Animated.View style={{ transform: [{ scale: scaleValue }] }}>
              <MaterialIcons name={iconName} size={24} color={color} />
            </Animated.View>
          );
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
  );
}
