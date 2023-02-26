import {StyleSheet} from 'react-native';

import {hp} from '../../helper/constants';
import {colors} from '../../helper/colors';

export const style = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.backgroundColor,
  },
  contentContainer: {
    flex: 1,
    padding: hp(16),
  },
  listHeader: {
    height: hp(12),
  },
  listFooter: {
    height: hp(30),
  },
  screenFooter: {
    height: hp(30),
  },
  listItemSeparator: {
    height: 1,
    backgroundColor: colors.borderColor,
  },
  investmentsFilterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
