import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import * as Font from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/home';
import ReviewDetailScreen from './screens/reviewDetails';

import AppLoading from 'expo-app-loading';

const getFonts = () =>
  Font.loadAsync({
    'HomemadeApple-Regular': require('./assets/fonts/HomemadeApple-Regular.ttf'),
  });

const Stack = createStackNavigator();

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (fontLoaded) {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ header: () => null }}
          />
          <Stack.Screen
            name="ReviewDetails"
            component={ReviewDetailScreen}
            options={{
              title: 'AweSOME Reviews',
              headerTintColor: '#444',
              headerStyle: { backgroundColor: 'skyblue' },
            }}
          />
        </Stack.Navigator>
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
