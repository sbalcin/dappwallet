/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-hooks/exhaustive-deps */
import React, {FC, useEffect} from 'react';
import {Image, ImageBackground, StyleSheet, View} from 'react-native';
import {CommonActions, useNavigation} from '@react-navigation/native';
import SS from 'react-native-splash-screen';
import * as RNLocalize from 'react-native-localize';
import {useTranslation} from 'react-i18next';
import {Colors} from 'utils/colors';
import {GetPreference} from 'services/preference';

const SplashScreen: FC = () => {
  const navigation = useNavigation();
  const {i18n} = useTranslation();

  useEffect(() => {
    check();
  }, []);

  const check = async () => {
    const lng = await GetPreference('@lng', false);
    if (lng) {
      //@ts-ignore
      i18n.changeLanguage(lng);
    } else {
      const local = RNLocalize.getLocales();
      if (local.length > 0 && local[0].languageCode) {
        i18n.changeLanguage(local[0].languageCode);
      }
    }
    navigation.dispatch(
      CommonActions.reset({
        index: 1,
        routes: [{name: 'HomeScreens'}],
      }),
    );

    SS.hide();
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        style={{height: 84,
          width: 64,}}
        resizeMode="contain"
        source={require('../../assets/logo.png')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.splash,
  },
  logo: {
    fontFamily: 'RobotoSlab-Bold',
    fontSize: 40,
    letterSpacing: 1,
  },
});

export default SplashScreen;
