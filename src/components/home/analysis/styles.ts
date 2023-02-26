import {StyleSheet} from 'react-native';
import {colors} from '../../../helper/colors';

import {fontFamily, fontSize, hp, wp} from '../../../helper/constants';

export const style = StyleSheet.create({
  container: {
    paddingVertical: hp(32),
    paddingHorizontal: wp(20),
  },
  chartPadding: {
    left: wp(30),
    right: wp(50),
    top: hp(15),
    bottom: hp(30),
  },
  tickLabelText: {
    font: fontFamily.AvenirBook,
    fontSize: fontSize(12),
    fill: colors.textColor,
  },
});
