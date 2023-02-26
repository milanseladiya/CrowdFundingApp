import {StyleSheet} from 'react-native';

import {fontSize, hp, wp} from '../../../helper/constants';
import {colors} from '../../../helper/colors';

export const style = StyleSheet.create({
  mainContainer: {
    backgroundColor: colors.secondaryBgColor,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: wp(8),
    paddingHorizontal: wp(8),
    paddingVertical: hp(12),
    marginVertical: hp(16),
  },
  icon: {
    height: hp(20),
    width: hp(20),
    marginRight: wp(8),
  },
  textInput: {
    flex: 1,
    paddingVertical: 0,
    fontSize: fontSize(16),
    fontWeight: '400',
    color: colors.textColor,
  },
});
