import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import * as Font from 'expo-font';

import Home from './screens/home';

import AppLoading from 'expo-app-loading';

const getFonts = () =>
  Font.loadAsync({
    'HomemadeApple-Regular': require('./assets/fonts/HomemadeApple-Regular.ttf'),
  });

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (fontLoaded) {
    return <Home />;
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
