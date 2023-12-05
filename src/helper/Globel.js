import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {RFValue} from 'react-native-responsive-fontsize';
export const hp = val => heightPercentageToDP((val * 100) / 890);
export const wp = val => widthPercentageToDP((val * 100) / 420);
export const fs = val => RFValue(val, 812);
