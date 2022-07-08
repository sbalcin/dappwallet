import {Appearance} from 'react-native';

const colorScheme = Appearance.getColorScheme();

let theme = {
  black: '#353331',
  foreground: '#353331',
  background: '#F9F7F1',
  inverse: 'white',
  darker: '#f5efe4',
  lighter: '#756156',
  card: 'white',
  brick: '#EDE2C1',
  border: '#f5efe4',
  wave: '#F9F7F1',
  waveborder: '#c4bba7',
  splash: '#fff',
  external: 'white',
};
if (colorScheme === 'dark') {
  theme = {
    black: '#353331',
    foreground: '#f2eded',
    background: '#353331',
    inverse: '#353331',
    darker: '#2e2c2c',
    lighter: '#ada5a5',
    card: '#2e2c2c',
    brick: '#262424',
    border: '#262424',
    wave: '#353333',
    waveborder: '#1c1b1b',
    splash: '#000',
    external: '#2e2c2c',
  };
}

export const Colors = theme;
