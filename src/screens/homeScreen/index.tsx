import React from 'react';
import {FlatList, ScrollView, View} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {
  Analysis,
  ContentContainer,
  FilterOption,
  Header,
  InvestmentListItem,
  OverViewCard,
  ProfileDistribution,
  SearchBar,
  TitleContainer,
} from '../../components';
import {useAppSelector} from '../../reducers/reduxHooks';
import {AppStackParamList} from '../../navigation/rootNavigator';
import {icons} from '../../helper/iconConstants';
import {style} from './styles';

type HomeScreenProps = NativeStackScreenProps<AppStackParamList, 'HomeScreen'>;

const HomeScreen = ({navigation}: HomeScreenProps) => {
  const {overviewData, analysisData, profit, investmentsList} = useAppSelector(
    state => state.home,
  );

  const onMenuPress = () => navigation.navigate('SideMenuScreen');

  return (
    <View style={style.mainContainer}>
      <Header
        showMenu={true}
        onMenuPress={onMenuPress}
        showNotifications={true}
      />
      <ScrollView
        style={style.contentContainer}
        showsVerticalScrollIndicator={false}>
        <TitleContainer userName={'Cameron'} />
        <SearchBar />
        <OverViewCard
          icon={icons.totalInvested}
          value={overviewData.totalInvested}
          title={'Total Invested'}
        />
        <OverViewCard
          icon={icons.currentValue}
          value={overviewData.currentValue}
          title={'Current Value'}
          change={1.1}
        />
        <OverViewCard
          icon={icons.averageReturn}
          value={overviewData.avgReturn}
          title={'Average Return'}
          change={-1.1}
        />
        <Analysis chartData={analysisData} />
        <ProfileDistribution
          commercialProfit={profit.commercial}
          residentialProfit={profit.residential}
        />
        <ContentContainer
          title={'List of Investments'}
          rightContent={
            <View style={style.investmentsFilterContainer}>
              <FilterOption title={'Sort by'} icon={icons.dropDownArrow} />
              <FilterOption title={'Filter '} icon={icons.filter} />
            </View>
          }
          children={
            <FlatList
              data={investmentsList}
              scrollEnabled={false}
              ItemSeparatorComponent={() => (
                <View style={style.listItemSeparator} />
              )}
              renderItem={({item}) => (
                <InvestmentListItem
                  title={item.title}
                  picture={item.picture}
                  value={item.value}
                  type={item.type}
                  maturityDate={item.maturityDate}
                  returnValue={item.returnValue}
                />
              )}
              keyExtractor={item => item.id}
            />
          }
        />
        <View style={style.screenFooter} />
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
