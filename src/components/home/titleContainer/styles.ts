import {StyleSheet} from 'react-native';

import {colors} from '../../../helper/colors';
import {fontFamily, fontSize, hp, wp} from '../../../helper/constants';

export const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: hp(8),
  },
  titleContainer: {
    flex: 1,
  },
  titleText: {
    fontFamily: fontFamily.AvenirBook,
    fontWeight: '500',
    fontSize: fontSize(20),
    color: colors.textColor,
    marginBottom: hp(4),
  },
  subTitleText: {
    fontFamily: fontFamily.AvenirBook,
    fontWeight: '400',
    fontSize: fontSize(16),
    color: colors.labelTextColor,
  },
  browseButtonContainer: {
    paddingVertical: hp(8),
    paddingHorizontal: wp(16),
    borderRadius: hp(8),
    backgroundColor: colors.primaryColor,
    flexDirection: 'row',
    alignItems: 'center',
  },
  browseIcon: {
    height: hp(20),
    width: hp(20),
    marginRight: wp(4),
  },
  browseButtonText: {
    fontFamily: fontFamily.AvenirBook,
    fontWeight: '500',
    fontSize: fontSize(16),
    color: colors.btnTextColor,
  },
});
