/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {RefreshControl, ScrollView, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {useTranslation} from 'react-i18next';
import {observer} from 'mobx-react-lite';
import {styles} from './styles';
import {Colors} from 'utils/colors';
import {LargeButton} from 'components/largeButton';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {CryptoService} from "../../services/crypto";
import ListPrices from "../../components/listCoins";
import CONFIG from "../../config";
import {useWalletConnect} from "@walletconnect/react-native-dapp";
import {shortenAddress} from "../../utils";
import {useNavigation} from '@react-navigation/native';
import {Logs} from "../../services/logs";


const DashboardScreen = observer(() => {
    const {t} = useTranslation();
    const [refreshing, setRefreshing] = useState(false);
    const [coins, setCoins] = useState([]);
    const [wallet, setWallet] = useState<string>(null);
    const navigation = useNavigation();
    const connector = useWalletConnect();

    useEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <TouchableOpacity
                    style={styles.connectWalletContainer}
                    onPress={connector.connected ? killSession : connectWallet}>
                    <Text
                        style={styles.connectWalletText}>
                        {connector.connected ? t('account.disconnect') : t('account.connect_to_wallet')}
                    </Text>
                    <Icon name="cast-connected" size={20} style={styles.connectWalletTextIcon}/>
                </TouchableOpacity>
            ),
        });
        retrieveCoins();
    }, []);

    const onRefresh = async () => {
        setRefreshing(true);
        await retrieveCoins();
        setRefreshing(false);
    };

    const retrieveCoins = async () => {
        const address = wallet ?? CONFIG.DEFAULT_WALLET;
        const coins = await CryptoService.getAllCoins(address);
        if(coins)
            setCoins(coins)
    };

    const connectWallet = React.useCallback(() => {
        return connector.connect();
    }, [connector]);

    const killSession = React.useCallback(() => {
        setWallet(null);
        return connector.killSession();
    }, [connector]);

    useEffect(() => {
        if (connector.connected) {
            setWallet(connector.accounts[0]);
        }
    }, [connector]);

    useEffect(() => {
        onRefresh();
    }, [wallet]);

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

                    <View style={{alignSelf: 'center', marginTop: 60, marginBottom: 50}}>
                        <LargeButton
                            text={t('account.load_balance')}
                            backgroundColor={Colors.waveborder}
                            color={Colors.foreground}
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
