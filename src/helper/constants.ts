import {Platform} from 'react-native';
import {
  widthPercentageToDP,
  heightPercentageToDP,
} from 'react-native-responsive-screen';
import {RFValue} from 'react-native-responsive-fontsize';
import {getStatusBarHeight} from 'react-native-status-bar-height';

export const wp = (value: number) => widthPercentageToDP((value * 100) / 375);

export const hp = (value: number) => heightPercentageToDP((value * 100) / 812);

export const fontSize = (size: number) => RFValue(size, 812);

export const isIos = Platform.OS === 'ios';

export const statusBarHeight = getStatusBarHeight();

export const fontFamily = {
  AvenirBook: 'Avenir-Book',
};
