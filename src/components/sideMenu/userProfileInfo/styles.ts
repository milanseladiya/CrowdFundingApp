import {StyleSheet} from 'react-native';

import {fontFamily, fontSize, hp, wp} from '../../../helper/constants';
import {colors} from '../../../helper/colors';

export const style = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: hp(8),
    marginBottom: hp(16),
  },
  profilePicture: {
    height: hp(100),
    width: hp(100),
    marginRight: wp(12),
  },
  nameText: {
    fontFamily: fontFamily.AvenirBook,
    fontWeight: '500',
    fontSize: fontSize(18),
    color: colors.textColor,
    marginTop: hp(16),
    marginBottom: hp(4),
  },
  designationText: {
    fontFamily: fontFamily.AvenirBook,
    fontWeight: '400',
    fontSize: fontSize(12),
    color: colors.labelTextColor,
  },
});
