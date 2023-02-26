import React from 'react';
import {View, Text} from 'react-native';

import {style} from './styles';

interface ContentContainerProps {
  title: string;
  rightContent?: React.ReactNode;
  children: React.ReactNode;
}

const ContentContainer: React.FC<ContentContainerProps> = ({
  title,
  rightContent,
  children,
}) => {
  return (
    <View style={style.container}>
      <View style={style.titleContainer}>
        <Text style={style.titleText}>{title}</Text>
        <View>{rightContent}</View>
      </View>
      {children}
    </View>
  );
};

export default ContentContainer;
