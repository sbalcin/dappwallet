import React from 'react';
import {Platform, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {MenuProvider} from 'react-native-popup-menu';
import {NavigationScreens} from './src/routes';
import {Web3ContextProvider} from './src/context/web3';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import FlashMessage from 'react-native-flash-message';
import {Colors} from './src/utils/colors';
import WalletConnectProvider from '@walletconnect/react-native-dapp';
import AsyncStorage from '@react-native-async-storage/async-storage';


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
        <WalletConnectProvider
            storageOptions={{
                asyncStorage: AsyncStorage as any,
            }}>
            <Web3ContextProvider>
                <SafeAreaProvider>
                    <NavigationContainer theme={AppTheme}>
                        <MenuProvider>
                            <NavigationScreens/>
                        </MenuProvider>
                        <FlashMessage position="top"/>
                    </NavigationContainer>
                </SafeAreaProvider>
            </Web3ContextProvider>
        </WalletConnectProvider>


    );
}

export default React.memo(App);