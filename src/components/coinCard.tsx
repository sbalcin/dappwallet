import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {observer} from 'mobx-react-lite';
import {CoinsAvatar} from 'components/coinsAvatar';
import {LineChart} from 'react-native-chart-kit';
import {formatCoins, formatPrice} from '../utils';
import {Colors} from 'utils/colors';

const CoinCard = observer(
  (props: {
    coin: string;
    key: string;
    name: string;
    price: number;
    balance: number;
    data: [];
    image: string;
    change: number;
    onPress?: any;
  }) => {
    return (
      <TouchableOpacity onPress={props.onPress ? props.onPress : null}>
        <View style={styles.container}>
          <View style={styles.card}>
            <View style={styles.logo}>
              <CoinsAvatar
                style={styles.logoimg}
                coin={props.coin}
                source={props.image}
              />
            </View>
            <View style={styles.mcontainer}>
              <Text style={styles.balance}>{formatCoins(props.balance)}</Text>
              <Text style={styles.balance}>{formatPrice(formatCoins(props.balance * props.price))}</Text>
            </View>
            <View style={styles.chartContainer}>
              <View style={{justifyContent: 'center', alignSelf: 'flex-end'}}>
                <LineChart
                  withVerticalLabels={false}
                  withHorizontalLabels={false}
                  withHorizontalLines={false}
                  width={90}
                  height={30}
                  bezier
                  withDots={false}
                  withVerticalLines={false}
                  withOuterLines={false}
                  chartConfig={{
                    color: () => Colors.lighter,
                    backgroundGradientFromOpacity: 0,
                    backgroundGradientToOpacity: 0,
                    fillShadowGradient: Colors.background,
                  }}
                  style={styles.chart}
                  data={{
                    datasets: [
                      {
                        data: props.data.slice(
                          props.data.length - Math.round(props.data.length / 7),
                          props.data.length,
                        ),
                      },
                    ],
                  }}
                />
              </View>
            </View>
            <View style={styles.rcontainer}>
              <View style={styles.bgprice}>
                <Text style={styles.price}>{formatPrice(props.price)}</Text>
              </View>
              <Text
                style={[
                  styles.price,
                  {color: props.change > 0 ? '#5cb85c' : '#d9534f'},
                ]}>
                {props.change.toFixed(2)}%
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  },
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  logoimg: {
    width: 30,
    height: 30,
    justifyContent: 'center',
  },
  coinSymbol: {
    fontSize: 13,
    marginBottom: 5,
    color: Colors.lighter,
  },
  chart: {
    paddingRight: 0,
    paddingBottom: 20,
    paddingTop: 20,
  },
  mcontainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    marginLeft: 10,
    flex: 1,
  },
  chartContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    marginLeft: 0,
    flex: 1,
  },
  coinName: {
    fontSize: 15,
    marginBottom: 2,
    fontWeight: 'bold',
    color: Colors.foreground,
  },
  price: {
    fontSize: 13,
    textAlign: 'center',
    fontWeight: 'bold',
    color: Colors.foreground,
    marginVertical: 3,
  },
  balance: {
    fontSize: 13,
    textAlign: 'left',
    fontWeight: 'bold',
    color: Colors.foreground,
    marginVertical: 3,
  },
  logo: {
    width: 35,
    height: 35,
    alignSelf: 'center',
    backgroundColor: Colors.background,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 0,
  },
  bgprice: {
    padding: 2,
    backgroundColor: Colors.background,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  rcontainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    marginLeft: 15,
    flex: 0.9,
  },
  card: {
    flexDirection: 'row',
    flex: 1,
    height: 90,
    borderRadius: 10,
    padding: 10,
    backgroundColor: Colors.card,
    justifyContent: 'center',
    marginHorizontal: 15,
    marginVertical: 3,
  },
});

export default React.memo(CoinCard);
