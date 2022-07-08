import React, {useEffect} from 'react';
import {ScrollView, Switch, Text, TouchableOpacity, View,} from 'react-native';
import {SettingsStore} from 'stores/settings';
import Icon from 'react-native-vector-icons/Ionicons';
import {useTranslation} from 'react-i18next';
import {useNavigation} from '@react-navigation/native';
import {Colors} from 'utils/colors';
import {styles} from './styles';
import {observer} from 'mobx-react-lite';

const SettingScreen = observer(() => {
  const {t} = useTranslation();
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerTitle: t('title.settings')
    });
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollview}
        showsVerticalScrollIndicator={false}>
        <View>
          <TouchableOpacity
            style={styles.item}
            onPress={() => navigation.navigate('LanguageScreen')}>
            <Icon name="language" size={23} color={Colors.foreground} />
            <Text style={styles.textItem}>{t('settings.change_language')}</Text>
            <Icon name="arrow-forward" size={20} color="gray" />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.item}
            onPress={() =>
              SettingsStore.setDisplayZeroBalance(!SettingsStore.displayZeroBalance)
            }>
            <Icon name="checkmark-circle" size={23} color={Colors.foreground} />
            <Text style={styles.textItem}>{t('settings.display_zero_balances')}</Text>
            <Switch
              trackColor={{false: Colors.background, true: Colors.background}}
              thumbColor={
                SettingsStore.displayZeroBalance
                  ? '#5cb85c'
                  : Colors.background
              }
              ios_backgroundColor={
                SettingsStore.displayZeroBalance
                  ? '#5cb85c'
                  : Colors.background
              }
              onValueChange={() =>
                SettingsStore.setDisplayZeroBalance(
                  !SettingsStore.displayZeroBalance,
                )
              }
              value={SettingsStore.displayZeroBalance}
            />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
});

export default SettingScreen;
