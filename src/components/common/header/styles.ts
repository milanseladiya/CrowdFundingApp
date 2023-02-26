import {StyleSheet} from 'react-native';

import {hp, wp, statusBarHeight} from '../../../helper/constants';
import {colors} from '../../../helper/colors';

export const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: statusBarHeight + hp(12),
    paddingBottom: hp(16),
    paddingHorizontal: wp(16),
    backgroundColor: colors.secondaryBgColor,
    borderBottomColor: colors.borderColor,
    borderBottomWidth: 0.5,
  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuIconContainer: {
    marginRight: wp(12),
  },
  icon: {
    height: hp(24),
    width: hp(24),
  },
  fullLogo: {
    height: hp(35),
    width: hp(155),
  },
});
