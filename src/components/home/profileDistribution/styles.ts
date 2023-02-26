import {StyleSheet} from 'react-native';

import {colors} from '../../../helper/colors';
import {fontFamily, fontSize, hp, wp} from '../../../helper/constants';

export const style = StyleSheet.create({
  container: {
    padding: hp(32),
  },
  chart: {
    alignSelf: 'center',
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
  bottomContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: hp(34),
  },
  legendContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  legend: {
    height: hp(16),
    width: hp(16),
    borderRadius: hp(16),
    backgroundColor: colors.primaryColor,
    marginRight: wp(4),
  },
  residentialLegend: {
    backgroundColor: colors.backgroundColor,
  },
  legendTitleText: {
    fontFamily: fontFamily.AvenirBook,
    fontWeight: '400',
    fontSize: fontSize(12),
    color: colors.textColor,
  },
});
