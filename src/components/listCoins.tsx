/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View} from 'react-native';
import {observer} from 'mobx-react-lite';
import SmallCard from './coinCard';
import {MarketCapCoinType} from "../services/crypto";
import {SettingsStore} from "../stores/settings";

const ListCoins = observer(
  (props: {
    coins: MarketCapCoinType[];
  }) => {
    if (!SettingsStore.displayZeroBalance)
      props.coins = props.coins.filter(coin => Number(coin.balance) > 0);
    return (
      <View style={{flex: 1}}>
        {props.coins.length > 0
          ? props.coins.map(i => (
            <SmallCard
              coin={i.symbol}
              key={i.id}
              name={i.name}
              price={i.current_price}
              balance={i.balance}
              data={i.sparkline_in_7d.price}
              image={i.image}
              change={i.price_change_percentage_24h}
            />
          ))
          : null}
      </View>
    );
  });

export default React.memo(ListCoins);
