import React from 'react';
import {Platform, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {MenuProvider} from 'react-native-popup-menu';
import {NavigationScreens} from './src/routes';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import FlashMessage from 'react-native-flash-message';
import {Colors} from './src/utils/colors';

function App() {
  const AppTheme = {
    colors: {
      background: Colors.background,
    },
  };

  if (Platform.OS === 'android') {
    StatusBar.setBackgroundColor('black');
  }

  return (
      <SafeAreaProvider>
        <NavigationContainer theme={AppTheme}>
          <MenuProvider>
            <NavigationScreens/>
          </MenuProvider>
          <FlashMessage position="top"/>
        </NavigationContainer>
      </SafeAreaProvider>
  );
}

export default React.memo(App);