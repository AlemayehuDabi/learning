import { useTheme } from '@/hooks/useTheme';
import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import React from 'react';

export default function TabsLayout() {
  const { colors } = useTheme();

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.textMuted,
        tabBarStyle: {
          backgroundColor: colors.surface,
          borderTopWidth: 1,
          borderTopColor: colors.border,
          height: 90,
          paddingTop: 10,
          paddingBottom: 30,
        },
        tabBarLabelStyle: {
          fontSize: 16,
          fontWeight: '600',
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Todos',
          tabBarIcon: ({ color, size }) => {
            return <Ionicons name="flash-outline" color={color} size={size} />;
          },
        }}
      />

      <Tabs.Screen
        name="setting"
        options={{
          title: 'Settings',
          tabBarIcon: ({ color, size }) => {
            return <Ionicons name="settings" color={color} size={size} />;
          },
        }}
      />
    </Tabs>
  );
}
