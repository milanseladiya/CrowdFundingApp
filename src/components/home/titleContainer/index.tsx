import React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';

import {icons} from '../../../helper/iconConstants';
import {style} from './styles';

interface TitleContainerProps {
  userName: string;
  onBrowsePress?: () => void;
}

const TitleContainer: React.FC<TitleContainerProps> = ({
  userName,
  onBrowsePress,
}) => {
  return (
    <View style={style.container}>
      <View style={style.titleContainer}>
        <Text style={style.titleText}>{'Property Dashboard'}</Text>
        <Text style={style.subTitleText}>{`Welcome, ${userName}!`}</Text>
      </View>
      <TouchableOpacity
        style={style.browseButtonContainer}
        onPress={onBrowsePress}>
        <Image
          source={icons.browse}
          resizeMode={'contain'}
          style={style.browseIcon}
        />
        <Text style={style.browseButtonText}>{'Browse'}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TitleContainer;
