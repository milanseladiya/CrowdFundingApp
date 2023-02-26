import React from 'react';
import {Image, TouchableOpacity, View, ViewStyle} from 'react-native';

import {getHitSlop} from '../../../helper/global';
import {icons} from '../../../helper/iconConstants';
import {style} from './styles';

interface HeaderProps {
  showMenu?: boolean;
  onMenuPress?: () => void;
  showFullLogo?: boolean;
  showNotifications?: boolean;
  onNotificationsPress?: () => void;
  showClose?: boolean;
  onClosePress?: () => void;
  containerStyle?: ViewStyle;
}

const Header: React.FC<HeaderProps> = ({
  showMenu,
  onMenuPress,
  showFullLogo,
  showNotifications,
  onNotificationsPress,
  showClose,
  onClosePress,
  containerStyle,
}) => {
  return (
    <View style={[style.container, containerStyle]}>
      <View style={style.leftContainer}>
        {showMenu ? (
          <TouchableOpacity
            style={style.menuIconContainer}
            onPress={onMenuPress}
            hitSlop={getHitSlop()}>
            <Image
              source={icons.menu}
              resizeMode={'contain'}
              style={style.icon}
            />
          </TouchableOpacity>
        ) : null}

        {showFullLogo ? (
          <Image
            source={icons.logoName}
            resizeMode={'contain'}
            style={style.fullLogo}
          />
        ) : (
          <Image
            source={icons.logo}
            resizeMode={'contain'}
            style={style.icon}
          />
        )}
      </View>

      {showNotifications ? (
        <TouchableOpacity onPress={onNotificationsPress} hitSlop={getHitSlop()}>
          <Image
            source={icons.notification}
            resizeMode={'contain'}
            style={style.icon}
          />
        </TouchableOpacity>
      ) : null}

      {showClose ? (
        <TouchableOpacity onPress={onClosePress} hitSlop={getHitSlop()}>
          <Image
            source={icons.close}
            resizeMode={'contain'}
            style={style.icon}
          />
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

export default Header;
