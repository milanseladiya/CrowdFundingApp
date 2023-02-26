import {StyleSheet} from 'react-native';

import {colors} from '../../../helper/colors';
import {fontFamily, fontSize, hp, wp} from '../../../helper/constants';

export const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: hp(24),
    marginVertical: hp(8),
    backgroundColor: colors.secondaryBgColor,
    borderRadius: hp(16),
  },
  mainIcon: {
    height: hp(48),
    width: hp(48),
    marginRight: wp(12),
  },
  titleContainer: {
    flex: 1,
  },
  valueContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: hp(4),
  },
  valueText: {
    fontFamily: fontFamily.AvenirBook,
    fontWeight: '500',
    fontSize: fontSize(18),
    color: colors.textColor,
  },
  changeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: hp(4),
    paddingHorizontal: wp(8),
    marginLeft: wp(12),
    borderRadius: hp(24),
    backgroundColor: colors.upChangeBgColor,
  },
  downChangeContainer: {
    backgroundColor: colors.downChangeBgColor,
  },
  changeText: {
    fontFamily: fontFamily.AvenirBook,
    fontWeight: '400',
    fontSize: fontSize(12),
    color: colors.upChangeTextColor,
  },
  downChangeText: {
    color: colors.downChangeTextColor,
  },
  changeIcon: {
    height: hp(16),
    width: hp(16),
    marginLeft: wp(2),
  },
  titleText: {
    fontFamily: fontFamily.AvenirBook,
    fontWeight: '400',
    fontSize: fontSize(14),
    color: colors.labelTextColor,
  },
});
