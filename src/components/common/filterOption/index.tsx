import React from 'react';
import {Image, ImageSourcePropType, Text, TouchableOpacity} from 'react-native';

import {style} from './styles';

interface FilterOptionProps {
  icon: ImageSourcePropType;
  title: string;
  onPress?: () => void;
}

const FilterOption: React.FC<FilterOptionProps> = ({icon, title, onPress}) => {
  return (
    <TouchableOpacity style={style.container} onPress={onPress}>
      <Text style={style.titleText}>{title}</Text>
      <Image source={icon} resizeMode={'contain'} style={style.icon} />
    </TouchableOpacity>
  );
};

export default FilterOption;
