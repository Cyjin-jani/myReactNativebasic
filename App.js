import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import * as Font from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/home';
import ReviewDetailScreen from './screens/reviewDetails';

import AppLoading from 'expo-app-loading';
import { FontAwesome5 } from '@expo/vector-icons';

const getFonts = () =>
  Font.loadAsync({
    'HomemadeApple-Regular': require('./assets/fonts/HomemadeApple-Regular.ttf'),
  });

// const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (fontLoaded) {
    return (
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, size, color }) => {
              let iconName;
              if (route.name === 'Home') {
                iconName = 'autoprefixer';
                size = focused ? 25 : 20;
                color = focused ? '#f0f' : '#555';
              } else if (route.name === 'ReviewDetails') {
                iconName = 'btc';
                size = focused ? 25 : 20;
                color = focused ? '#f0f' : '#555';
              }
              return <FontAwesome5 name={iconName} size={size} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: '#f0f',
            inactiveTintColor: '#555',
            activeBackgroundColor: '#fff',
            inactiveBackgroundColor: '#999',
            showLabel: false,
            labelStyle: { fontSize: 14 },
          }}
        >
          <Tab.Screen
            name="Home"
            component={HomeScreen}
            options={{ tabBarBadge: 3 }}
          />
          <Tab.Screen
            name="ReviewDetails"
            component={ReviewDetailScreen}
            options={{
              title: 'AweSOME Reviews',
              headerTintColor: '#444',
              headerStyle: { backgroundColor: 'skyblue' },
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    );
  } else {
    return (
      <AppLoading
        startAsync={getFonts}
        onFinish={() => setFontLoaded(true)}
        onError={() => console.log('err')}
      />
    );
  }
}
