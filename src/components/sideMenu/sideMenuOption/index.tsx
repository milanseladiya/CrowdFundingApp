import React from 'react';
import {
  View,
  Image,
  Text,
  ImageSourcePropType,
  TouchableOpacity,
} from 'react-native';

import {style} from './styles';

interface SideMenuOptionProps {
  icon: ImageSourcePropType;
  title: string;
  bedgeCount?: number;
  onPress?: () => void;
}

const SideMenuOption: React.FC<SideMenuOptionProps> = ({
  icon,
  title,
  bedgeCount,
  onPress,
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={style.container}>
      <Image source={icon} resizeMode={'contain'} style={style.icon} />
      <Text style={style.titleText}>{title}</Text>
      {bedgeCount ? (
        <View style={style.bedgeCountContainer}>
          <Text style={style.bedgeCountText}>{bedgeCount}</Text>
        </View>
      ) : null}
    </TouchableOpacity>
  );
};

export default SideMenuOption;
