import React from 'react';
import {View} from 'react-native';
import {
  VictoryArea,
  VictoryAxis,
  VictoryChart,
  VictoryScatter,
  VictoryTheme,
} from 'victory-native';

import ContentContainer from '../../common/contentContainer';
import FilterOption from '../../common/filterOption';
import {ChartData} from '../../../types';
import {icons} from '../../../helper/iconConstants';
import {colors} from '../../../helper/colors';
import {hp, wp} from '../../../helper/constants';
import {style} from './styles';

interface AnalysisProps {
  chartData: ChartData[];
}

const Analysis: React.FC<AnalysisProps> = ({chartData}) => {
  return (
    <ContentContainer
      title={'Analysis'}
      rightContent={
        <FilterOption title={'Weekly'} icon={icons.dropDownArrow} />
      }
      children={
        <View style={style.container}>
          <VictoryChart
            padding={style.chartPadding}
            theme={VictoryTheme.material}
            height={hp(200)}
            width={wp(340)}
            maxDomain={{y: 100}}>
            <VictoryArea
              interpolation={'natural'}
              style={{
                data: {
                  fill: colors.graphBgColor,
                  fillOpacity: 0.2,
                  stroke: colors.graphBgColor,
                  strokeWidth: 3,
                },
              }}
              data={chartData}
            />

            <VictoryScatter
              style={{
                data: {
                  fill: colors.secondaryBgColor,
                  stroke: colors.graphBgColor,
                  strokeWidth: 2,
                },
              }}
              size={5}
              data={chartData}
            />
            <VictoryAxis
              style={{
                axis: {stroke: colors.transparent},
                grid: {stroke: colors.graphGridColor},
                tickLabels: style.tickLabelText,
              }}
            />
            <VictoryAxis
              dependentAxis={true}
              style={{
                axis: {stroke: colors.transparent},
                grid: {stroke: colors.graphGridColor},
                tickLabels: style.tickLabelText,
              }}
            />
          </VictoryChart>
        </View>
      }
    />
  );
};

export default Analysis;
