import { Tabs, Redirect } from 'expo-router';
import React, { useContext } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { AuthContext } from '../../context/AuthContext';

export default function AppLayout() {
  const { user, isLoading } = useContext(AuthContext);

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  // Redirect to login if not authenticated
  if (!user) {
    return <Redirect href="/(auth)/login" />;
  }

  const role = user.role;

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
