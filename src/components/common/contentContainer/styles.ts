import {StyleSheet} from 'react-native';

import {fontFamily, fontSize, hp, wp} from '../../../helper/constants';
import {colors} from '../../../helper/colors';

export const style = StyleSheet.create({
  container: {
    marginVertical: hp(12),
    backgroundColor: colors.secondaryBgColor,
    borderRadius: hp(16),
  },
  titleContainer: {
    padding: hp(16),
    borderBottomWidth: 1,
    borderBottomColor: colors.borderColor,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  titleText: {
    fontFamily: fontFamily.AvenirBook,
    fontWeight: '500',
    fontSize: fontSize(14),
    color: colors.titleTextColor,
  },
});
