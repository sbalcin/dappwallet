import i18next from 'i18next';
import BigNumber from 'bignumber.js';

export const formatPrice = (nr, limitDigits = false) => {
  if (nr === 0 || isNaN(nr)) {
    return '$0';
  }
  if (limitDigits) {
    const bgn = new BigNumber(nr);
    if (bgn.isLessThan(new BigNumber(1e-2))) {
      return '\u2248 $0.00'; // ≈ unicode
    }
  }
  let newNr = i18next.format(nr, '$0,0[.][00]');
  if (newNr === '$NaN' || newNr === '$0') {
    newNr = '$' + nr;
  }
  return newNr;
};

export const formatNumber = nr => {
  return i18next.format(nr, '0,0.[00]a');
};

export const formatCoins = (nr, digits = 4) => {
  if (nr === 0 || isNaN(nr))
    return '0';
  var re = new RegExp('^-?\\d+(?:\.\\d{0,' + (digits || -1) + '})?');
  return nr.toString().match(re)[0];
};