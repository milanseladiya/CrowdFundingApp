import React from 'react';
import {View, TextInput, Image, ViewStyle} from 'react-native';

import {icons} from '../../../helper/iconConstants';
import {style} from './styles';

interface SearchBarProps {
  placeholder?: string;
  value?: string;
  onChangeText?: (value: string) => void;
  containerStyle?: ViewStyle;
}

const SearchBar: React.FC<SearchBarProps> = ({
  placeholder,
  value,
  onChangeText,
  containerStyle,
}) => {
  return (
    <View style={[style.mainContainer, containerStyle]}>
      <Image source={icons.search} resizeMode={'contain'} style={style.icon} />
      <TextInput
        placeholder={placeholder ?? 'Search'}
        value={value}
        onChangeText={onChangeText}
        style={style.textInput}
      />
    </View>
  );
};

export default SearchBar;
