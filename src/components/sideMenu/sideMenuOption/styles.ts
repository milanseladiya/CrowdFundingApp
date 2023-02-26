import {StyleSheet} from 'react-native';

import {fontFamily, fontSize, hp, wp} from '../../../helper/constants';
import {colors} from '../../../helper/colors';

export const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: hp(16),
  },
  icon: {
    height: hp(20),
    width: hp(20),
  },
  titleText: {
    fontFamily: fontFamily.AvenirBook,
    fontWeight: '500',
    fontSize: fontSize(16),
    color: colors.optionTitleColor,
    marginHorizontal: wp(16),
  },
  bedgeCountContainer: {
    padding: hp(4),
    borderRadius: hp(8),
    backgroundColor: colors.backgroundColor,
  },
  bedgeCountText: {
    fontFamily: fontFamily.AvenirBook,
    fontWeight: '400',
    fontSize: fontSize(10),
    color: colors.labelTextColor,
  },
});
