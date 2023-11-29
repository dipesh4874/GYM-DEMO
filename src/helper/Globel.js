import {RFValue} from 'react-native-responsive-screen';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
export const hp = val => heightPercentageToDP((val * 100) / 890);
export const wp = val => widthPercentageToDP((val * 100) / 420);
export const fs = val => RFValue(val, 812);
