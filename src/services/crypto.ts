import CONFIG from "../config";
import {Logs} from '../services/logs';
import Web3 from "web3";
import axios from 'axios';

const BALANCE_ABI = require('abi/balance.json');

export type MarketCapCoinType = {
  id: string;
  symbol: string;
  name: string;
  price_change_percentage_24h: number;
  current_price: number;
  balance: number;
  image: string;
};

class CryptoService {

  getAllCoins = async (wallet) => {
    const coins = ['ethereum', 'tether', 'usd-coin']

    const url =
      CONFIG.COINGECKO_URI +
      '/coins/markets?vs_currency=usd&order=market_cap_desc&' +
      `ids=${coins.join(',')}` +
      '&sparkline=true';

    Logs.info('full uri:' + url);

    const params: object = {
      method: 'get',
      url: url,
    };
    try {
      const response = await axios(params);
      await this.processBalances(response.data, wallet)
      return response.data;
    } catch (error) {
      return false;
    }
  };

  processBalances = async (coins, wallet) => {
    try {
      const provider = await new Web3.providers.HttpProvider(CONFIG.HTTP_PROVIDER);
      const web3 = new Web3(provider);

      let balance = await web3.eth.getBalance(wallet)
      balance = web3.utils.fromWei(balance, 'ether')
      const eth = coins.filter(coin => coin.id == 'ethereum');
      if (eth.length > 0)
        eth[0].balance = parseFloat(balance)

      const contractUSDT = new web3.eth.Contract(BALANCE_ABI, CONFIG.USDT_CONTRACT);
      const balanceUSDTWei = await contractUSDT.methods.balanceOf(wallet).call();
      const balanceUSDT = web3.utils.fromWei(balanceUSDTWei, 'ether')

      const usdt = coins.filter(coin => coin.id == 'tether');
      if (usdt.length > 0)
        usdt[0].balance = parseFloat(balanceUSDT)

      const contractUSDC = new web3.eth.Contract(BALANCE_ABI, CONFIG.USDC_CONTRACT);
      const balanceUSDCWei = await contractUSDC.methods.balanceOf(wallet).call();
      const balanceUSDC = web3.utils.fromWei(balanceUSDCWei, 'ether')

      const usdc = coins.filter(coin => coin.id == 'usd-coin');
      if (usdc.length > 0)
        usdc[0].balance = parseFloat(balanceUSDC)

    } catch (error) {
      console.log(error)
    }
  }
}

let service = new CryptoService();
export {service as CryptoService};
