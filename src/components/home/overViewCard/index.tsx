import React from 'react';
import {View, Image, Text, ImageSourcePropType} from 'react-native';

import {icons} from '../../../helper/iconConstants';
import {style} from './styles';

interface OverViewCardProps {
  icon: ImageSourcePropType;
  value: string;
  title: string;
  change?: number;
}

const OverViewCard: React.FC<OverViewCardProps> = ({
  icon,
  value,
  title,
  change,
}) => {
  const isPotiveChange = change && change > 0;

  return (
    <View style={style.container}>
      <Image source={icon} resizeMode={'contain'} style={style.mainIcon} />
      <View style={style.titleContainer}>
        <View style={style.valueContainer}>
          <Text style={style.valueText}>{value}</Text>
          {change ? (
            <View
              style={[
                style.changeContainer,
                !isPotiveChange && style.downChangeContainer,
              ]}>
              <Text
                style={[
                  style.changeText,
                  !isPotiveChange && style.downChangeText,
                ]}>{`${isPotiveChange ? '+' : ''}${change}%`}</Text>
              <Image
                source={isPotiveChange ? icons.upChange : icons.downChange}
                resizeMode={'contain'}
                style={style.changeIcon}
              />
            </View>
          ) : null}
        </View>
        <Text style={style.titleText}>{title}</Text>
      </View>
    </View>
  );
};

export default OverViewCard;
