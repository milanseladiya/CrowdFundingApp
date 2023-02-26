import React, {useEffect} from 'react';
import {ScrollView, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {useAppDispatch, useAppSelector} from '../../reducers/reduxHooks';
import {Header, SideMenuOption, UserProfileInfo} from '../../components';
import {setUserData} from '../../actions';
import {icons} from '../../helper/iconConstants';
import {style} from './styles';

const SideMenuScreen = () => {
  const {userDetails} = useAppSelector(state => state.auth);

  const dispatch = useAppDispatch();

  const {goBack} = useNavigation();

  useEffect(() => {
    dispatch(setUserData());
  }, []);

  return (
    <View style={style.mainContainer}>
      <Header
        showFullLogo={true}
        showClose={true}
        onClosePress={goBack}
        containerStyle={style.header}
      />
      <ScrollView
        style={style.contentContainer}
        showsVerticalScrollIndicator={false}>
        <UserProfileInfo
          profilePicture={userDetails.profilePicture}
          name={userDetails.name}
          designation={userDetails.designation}
        />
        <View style={style.divider} />
        <SideMenuOption icon={icons.overview} title={'Overview'} />
        <SideMenuOption
          icon={icons.investments}
          title={'Investments'}
          bedgeCount={14}
        />
        <SideMenuOption icon={icons.transactions} title={'Transactions'} />
        <SideMenuOption icon={icons.explore} title={'Explore'} />
        <SideMenuOption icon={icons.taxCenter} title={'Tax Center'} />
        <View style={style.divider} />
        <SideMenuOption icon={icons.messages} title={'Messages'} />
        <SideMenuOption icon={icons.profile} title={'Profile'} />
        <SideMenuOption icon={icons.settings} title={'Settings'} />
        <View style={style.screenFooter} />
      </ScrollView>
    </View>
  );
};

export default SideMenuScreen;
