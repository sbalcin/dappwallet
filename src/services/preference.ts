import AsyncStorage from '@react-native-async-storage/async-storage';
import EncryptedStorage from 'react-native-encrypted-storage';

export async function SetPreference(
  key: string,
  value: string,
  encrypted: boolean = true,
) {
  if (encrypted) {
    try {
      await EncryptedStorage.setItem(key, value);
      return true;
    } catch (error) {
      return error;
    }
  } else {
    try {
      await AsyncStorage.setItem(key, value);
      return true;
    } catch (error) {
      return error;
    }
  }
}

export async function GetPreference(key: string, encrypted: boolean = true) {
  if (encrypted) {
    try {
      const value = await EncryptedStorage.getItem(key);
      if (value !== undefined) {
        return value;
      }
    } catch (error) {
      return error;
    }
  } else {
    try {
      const value = await AsyncStorage.getItem(key);
      if (value !== undefined) {
        return value;
      }
    } catch (error) {
      return error;
    }
  }
}