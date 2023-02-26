import {StyleSheet} from 'react-native';

import {fontFamily, fontSize, hp, wp} from '../../../helper/constants';
import {colors} from '../../../helper/colors';

export const style = StyleSheet.create({
  container: {
    padding: hp(16),
  },
  topContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  investmentImage: {
    height: hp(48),
    width: hp(80),
    borderRadius: hp(4),
  },
  titleContainer: {
    flex: 1,
    marginHorizontal: wp(12),
  },
  titleText: {
    fontFamily: fontFamily.AvenirBook,
    fontWeight: '400',
    fontSize: fontSize(14),
    color: colors.listTitleColor,
    marginBottom: hp(2),
  },
  valueText: {
    fontFamily: fontFamily.AvenirBook,
    fontWeight: '400',
    fontSize: fontSize(12),
    color: colors.textColor,
  },
  subTitleText: {
    fontFamily: fontFamily.AvenirBook,
    fontWeight: '400',
    fontSize: fontSize(12),
    color: colors.optionTitleColor,
  },
  moreIcon: {
    height: hp(20),
    width: hp(20),
  },
  divider: {
    height: 1,
    backgroundColor: colors.borderColor,
    marginVertical: hp(16),
  },
  bottomContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  infoContainer: {
    flex: 1,
  },
  infoTitleText: {
    fontFamily: fontFamily.AvenirBook,
    fontWeight: '500',
    fontSize: fontSize(14),
    color: colors.textColor,
    marginBottom: hp(4),
  },
  infoValueText: {
    fontFamily: fontFamily.AvenirBook,
    fontWeight: '500',
    fontSize: fontSize(14),
    color: colors.listTitleColor,
    marginBottom: hp(4),
  },
  sellButtonContainer: {
    padding: hp(8),
    borderRadius: hp(8),
    backgroundColor: colors.primaryBgColor,
  },
  sellButtonText: {
    fontFamily: fontFamily.AvenirBook,
    fontWeight: '500',
    fontSize: fontSize(14),
    color: colors.primaryColor,
  },
});
