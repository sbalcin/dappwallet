import {action, makeAutoObservable} from 'mobx';
import {makePersistable} from 'mobx-persist-store';
import AsyncStorage from '@react-native-async-storage/async-storage';

class settingsStore {
  displayZeroBalance: boolean;

  constructor() {
    this.displayZeroBalance = true;
    makeAutoObservable(this);
    makePersistable(this, {
      name: 'SettingsStore',
      properties: ['displayZeroBalance'],
      storage: AsyncStorage,
    });
  }

  setDisplayZeroBalance = action((value: boolean) => {
    this.displayZeroBalance = value;
  });
}

export const SettingsStore: settingsStore = new settingsStore();
