import {StyleSheet} from 'react-native';

import {fontFamily, fontSize, hp, wp} from '../../../helper/constants';
import {colors} from '../../../helper/colors';

export const style = StyleSheet.create({
  container: {
    paddingVertical: hp(4),
    paddingHorizontal: wp(12),
    marginLeft: wp(8),
    borderRadius: hp(8),
    borderWidth: 1,
    borderColor: colors.borderColor,
    backgroundColor: colors.secondaryBgColor,
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    height: hp(16),
    width: hp(16),
    marginLeft: wp(8),
  },
  titleText: {
    fontFamily: fontFamily.AvenirBook,
    fontWeight: '400',
    fontSize: fontSize(12),
    color: colors.optionTitleColor,
  },
});
