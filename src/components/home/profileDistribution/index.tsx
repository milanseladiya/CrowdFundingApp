import React from 'react';
import {Text, View} from 'react-native';
import {VictoryPie} from 'victory-native';

import ContentContainer from '../../common/contentContainer';
import {colors} from '../../../helper/colors';
import {hp} from '../../../helper/constants';
import {style} from './styles';

interface ProfileDistributionProps {
  commercialProfit: number;
  residentialProfit: number;
}

const ProfileDistribution: React.FC<ProfileDistributionProps> = ({
  commercialProfit,
  residentialProfit,
}) => {
  const chartData = [
    {x: 1, y: commercialProfit, radius: hp(100), innerRadius: hp(60)},
    {x: 2, y: residentialProfit, radius: hp(90), innerRadius: hp(70)},
  ];
  const chartColors = [colors.primaryColor, colors.backgroundColor];

  return (
    <ContentContainer
      title={'Profit Distribution'}
      children={
        <View style={style.container}>
          <VictoryPie
            data={chartData}
            colorScale={chartColors}
            labels={() => ''}
            radius={({datum}) => datum.radius}
            innerRadius={({datum}) => datum.innerRadius}
            height={hp(200)}
            width={hp(200)}
            style={{parent: style.chart}}
          />
          <View style={style.bottomContainer}>
            <View style={style.legendContainer}>
              <View style={style.legend} />
              <Text
                style={
                  style.legendTitleText
                }>{`${commercialProfit}% Commercial`}</Text>
            </View>
            <View style={style.legendContainer}>
              <View style={[style.legend, style.residentialLegend]} />
              <Text
                style={
                  style.legendTitleText
                }>{`${residentialProfit}% Residential`}</Text>
            </View>
          </View>
        </View>
      }
    />
  );
};

export default ProfileDistribution;
