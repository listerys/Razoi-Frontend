import React from 'react';
import { StatusBar, View, Animated } from 'react-native';
import { Tabs } from 'expo-router';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'; // Import Material Icons

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

            let iconName = 'home';

            if (route.name === 'index') {
              iconName = focused ? 'home' : 'home-outlined';
            } else if (route.name === 'browseMenu') {
              iconName = focused ? 'restaurant' : 'restaurant-menu';
            } else if (route.name === 'account') {
              iconName = focused ? 'account-circle' : 'person-outline';
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
    </View>
  );
}
