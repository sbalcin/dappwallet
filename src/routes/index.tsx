/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import 'react-native-gesture-handler';
import {Image, ImageBackground, Platform, Text, View} from 'react-native';
import {createStackNavigator,} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import {withTranslation} from 'react-i18next';
import SplashScreen from 'screens/Splash';
import DashboardScreen from 'screens/Dashboard';
import SettingScreen from 'screens/Settings';
import LanguageScreen from 'screens/Language';
import {Colors} from 'utils/colors';
import styles from './styles';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function BottomTabs() {
  return (
    <Tab.Navigator
      initialRouteName="DashboardScreen"
      //@ts-ignore
      headerMode="screen"
      screenOptions={({route}) => ({
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#FFFFFF',
        tabBarActiveBackgroundColor: Colors.foreground,
        tabBarStyle: {
          borderTopWidth: 0,
          elevation: 0,
          height: Platform.OS === 'android' ? 55 : 75,
          marginTop: 3,
        },
        tabBarItemStyle: {
          marginHorizontal: 20,
          borderRadius: 40,
          paddingVertical: 5,
          marginBottom: Platform.OS === 'android' && 5,
        },
        tabBarIcon: ({focused}) => {
          if (route.name === 'DashboardScreen') {
            return focused ? (
              <Icon name="wallet" size={25} color={Colors.inverse}/>
            ) : (
              <Icon name="wallet" size={25} color={Colors.foreground}/>
            );
          } else if (route.name === 'SettingScreen') {
            return focused ? (
              <Icon name="settings" size={24} color={Colors.inverse}/>
            ) : (
              <Icon name="settings" size={24} color={Colors.foreground}/>
            );
          }
          return null;
        },
      })}>
      <Tab.Screen
        name="DashboardScreen"
        component={DashboardScreen}
        options={{
          headerShown: true,
          headerTitleAlign: 'left',
          headerTitle: () => <SmallLogo/>,
          headerStyle: {
            shadowColor: 'transparent',
            elevation: 0,
          },
          headerTintColor: Colors.foreground,
          headerTitleStyle: {
            fontWeight: '400',
            fontFamily: 'RobotoSlab-Regular',
            fontSize: 19,
            justifyContent: 'center',
          },
        }}
      />

      <Tab.Screen
        name="SettingScreen"
        component={SettingScreen}
        options={{
          headerShown: true,
          headerTitle: '',
          headerStyle: {
            backgroundColor: Colors.darker,
            shadowColor: 'transparent',
            elevation: 0,
          },
          headerTintColor: Colors.foreground,
          headerBackTitleVisible: false,
          headerBackTitleStyle: {
            fontFamily: 'RobotoSlab-Regular',
          },
          headerTitleStyle: {
            fontWeight: '400',
            fontFamily: 'RobotoSlab-Regular',
            fontSize: 19,
            justifyContent: 'center',
          },
        }}
      />
    </Tab.Navigator>
  );
}

function NavigationStack({t}) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={styles.noAnim}
      />
      <Stack.Screen
        name="HomeScreens"
        component={BottomTabs}
        options={styles.noAnim}
      />
      <Stack.Screen
        name="LanguageScreen"
        component={LanguageScreen}
        options={{
          presentation: 'modal',
          headerBackImage: () => (
            <Icon
              name="close"
              size={30}
              color={Colors.foreground}
              style={{paddingLeft: 10}}
            />
          ),
          headerShown: true,
          headerTitle: t('settings.change_language'),
          headerStyle: {
            backgroundColor: Colors.darker,
            shadowColor: 'transparent',
            elevation: 0,
          },
          headerTintColor: Colors.foreground,
          headerBackTitleVisible: false,
          headerBackTitleStyle: {
            fontFamily: 'RobotoSlab-Regular',
          },
          headerTitleStyle: {
            fontWeight: '400',

            fontFamily: 'RobotoSlab-Regular',
            fontSize: 19,
            justifyContent: 'center',
          },
        }}
      />
    </Stack.Navigator>
  );
}

const SmallLogo = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10
      }}>
      <ImageBackground
        source={require('../assets/logo_small.png')}
        resizeMode='contain'
        style={{
          height: 42,
          width: 32,
        }}
      />
      <Text style={{
        fontSize: 24,
        fontFamily: 'RobotoSlab-Bold',
        color: Colors.foreground,
        marginTop: 0,
        marginLeft: 10,
      }}>Strips</Text>
    </View>
  );
};

export const NavigationScreens = withTranslation()(NavigationStack);
