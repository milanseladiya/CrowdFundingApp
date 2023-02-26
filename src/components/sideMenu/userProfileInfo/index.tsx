import React from 'react';
import {View, Image, Text, ImageSourcePropType} from 'react-native';

import {style} from './styles';

interface UserProfileInfoProps {
  profilePicture: ImageSourcePropType;
  name: string;
  designation: string;
}

const UserProfileInfo: React.FC<UserProfileInfoProps> = ({
  profilePicture,
  name,
  designation,
}) => {
  return (
    <View style={style.container}>
      <Image
        source={profilePicture}
        resizeMode={'contain'}
        style={style.profilePicture}
      />
      <Text style={style.nameText}>{name}</Text>
      <Text style={style.designationText}>{designation}</Text>
    </View>
  );
};

export default UserProfileInfo;
