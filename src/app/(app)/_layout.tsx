import { Tabs } from 'expo-router';
import React from 'react';

// Simulated Auth Hook
function useAuth() {
  // In a real application, you would pull this from a global state/context
  // 'admin', 'teacher', or 'student'
  return { role: 'admin' }; 
}

export default function AppLayout() {
  const { role } = useAuth();

  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Dashboard',
        }}
      />
      <Tabs.Screen
        name="admin-settings"
        options={{
          title: 'Admin',
          href: role === 'admin' ? '/(app)/admin-settings' : null,
        }}
      />
      <Tabs.Screen
        name="classes"
        options={{
          title: 'Classes',
          href: role === 'teacher' ? '/(app)/classes' : null,
        }}
      />
      <Tabs.Screen
        name="quizzes"
        options={{
          title: 'Quizzes',
          href: role === 'student' ? '/(app)/quizzes' : null,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
        }}
      />
    </Tabs>
  );
}
