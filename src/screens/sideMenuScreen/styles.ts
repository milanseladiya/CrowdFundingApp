import {StyleSheet} from 'react-native';

import {hp} from '../../helper/constants';
import {colors} from '../../helper/colors';

export const style = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.secondaryBgColor,
  },
  header: {
    borderBottomWidth: 0,
  },
  contentContainer: {
    flex: 1,
    padding: hp(16),
  },
  divider: {
    height: 1,
    backgroundColor: colors.borderColor,
    marginVertical: hp(24),
  },
  screenFooter: {
    height: hp(50),
  },
});
