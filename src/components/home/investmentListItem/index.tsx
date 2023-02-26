import React from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  ImageSourcePropType,
} from 'react-native';
import moment from 'moment';

import {icons} from '../../../helper/iconConstants';
import {style} from './styles';

interface InvestmentListItemProps {
  picture: ImageSourcePropType;
  title: string;
  value: string;
  type: string;
  maturityDate: string;
  returnValue: number;
  onSellPress?: () => void;
  onMorePress?: () => void;
}

const InvestmentListItem: React.FC<InvestmentListItemProps> = ({
  picture,
  title,
  value,
  type,
  maturityDate,
  returnValue,
  onSellPress,
  onMorePress,
}) => {
  return (
    <View style={style.container}>
      <View style={style.topContainer}>
        <Image
          source={picture}
          resizeMode={'contain'}
          style={style.investmentImage}
        />
        <View style={style.titleContainer}>
          <Text style={style.titleText}>{title}</Text>
          <Text style={style.valueText}>
            {value}
            <Text style={style.subTitleText}>{`  |  ${type}`}</Text>
          </Text>
        </View>
        <TouchableOpacity onPress={onMorePress}>
          <Image
            source={icons.more}
            resizeMode={'contain'}
            style={style.moreIcon}
          />
        </TouchableOpacity>
      </View>
      <View style={style.divider} />
      <View style={style.bottomContainer}>
        <View style={style.infoContainer}>
          <Text style={style.infoTitleText}>{'Maturity date'}</Text>
          <Text style={style.infoValueText}>
            {moment(maturityDate, 'DD/MM/YYYY').format('MMM DD, YYYY')}
          </Text>
        </View>
        <View style={style.infoContainer}>
          <Text style={style.infoTitleText}>{'Return'}</Text>
          <Text style={style.infoValueText}>{`${returnValue}%`}</Text>
        </View>
        <TouchableOpacity
          style={style.sellButtonContainer}
          onPress={onSellPress}>
          <Text style={style.sellButtonText}>{'Sell'}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default InvestmentListItem;
