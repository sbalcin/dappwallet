import React, {useEffect} from 'react';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {useTranslation} from 'react-i18next';
import {useNavigation} from '@react-navigation/native';
import {styles} from './styles';
import {SetPreference} from 'services/preference';

export default function LanguageScreen() {
  const {t, i18n} = useTranslation();
  const navigation = useNavigation();

  useEffect(() => {}, []);

  const setLanguage = async lng => {
    i18n.changeLanguage(lng);
    await SetPreference('@lng', lng, false);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollview}
        showsVerticalScrollIndicator={false}>
        <View>
          <Text style={styles.subtitle}>{t('language.change_language')}</Text>
          <TouchableOpacity
            style={styles.item}
            onPress={() => setLanguage('en')}>
            <Image
              style={{height: 25, width: 25}}
              resizeMode="contain"
              source={require('../../assets/countries/usa.png')}
            />
            <Text style={styles.textItem}>{t('language.english')}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.item}
            onPress={() => setLanguage('zh')}>
            <Image
              style={{height: 25, width: 25}}
              resizeMode="contain"
              source={require('../../assets/countries/chinese.png')}
            />
            <Text style={styles.textItem}>{t('language.chinese')}</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}
