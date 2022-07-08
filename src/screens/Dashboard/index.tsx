/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {RefreshControl, ScrollView, TextInput, TouchableOpacity, View,} from 'react-native';
import {useTranslation} from 'react-i18next';
import {observer} from 'mobx-react-lite';
import {styles} from './styles';
import {Colors} from 'utils/colors';
import {LargeButton} from 'components/largeButton';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {CryptoService} from "../../services/crypto";
import ListPrices from "../../components/listCoins";
import CONFIG from "../../config";
import {Logs} from "../../services/logs";

const DashboardScreen = observer(() => {
  const {t} = useTranslation();
  const [refreshing, setRefreshing] = useState(false);
  const [coins, setCoins] = useState([]);
  const [wallet, setWallet] = useState<string>(null);

  useEffect(() => {
    retrieveCoins();
  }, []);

  const onRefresh = async () => {
    setRefreshing(true);
    await retrieveCoins();
  };

  const retrieveCoins = async () => {
    Logs.info('wallet: ', wallet);
    const address = wallet ?? CONFIG.DEFAULT_WALLET;
    const coins = await CryptoService.getAllCoins(address);
    setCoins(coins)
    setRefreshing(false);
  };

  const preRender = () => {
    return (
      <View style={styles.container}>
        <View style={{marginTop: 20, width: '100%'}}>
          <View style={styles.searchContainer}>
            <TextInput
              style={styles.input}
              value={wallet}
              onChangeText={v => setWallet(v)}
              autoCorrect={false}
              placeholderTextColor={'gray'}
              placeholder={t('account.wallet_address')}
            />
            <TouchableOpacity
              style={styles.moreBtn}>
              <Icon name="qr-code-scanner" size={20} color={Colors.foreground}/>
            </TouchableOpacity>
          </View>

          <View style={{alignSelf: 'center', marginTop: 40, marginBottom: 60}}>
            <LargeButton
              text={t('account.load_balance')}
              backgroundColor={Colors.waveborder}
              color={Colors.background}
              disabled={!wallet}
              onPress={retrieveCoins}
            />
          </View>

          <ListPrices coins={coins}/>
        </View>
      </View>
    );
  };
  return (
    <ScrollView
      contentContainerStyle={{flexGrow: 1}}
      showsVerticalScrollIndicator={false}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
          tintColor={Colors.lighter}
          colors={[Colors.lighter]}
        />
      }>
      {preRender()}
    </ScrollView>
  );
});

export default React.memo(DashboardScreen);
