import {AnyAction} from '@reduxjs/toolkit';

import {RESET_STORE} from '../actions/types';
import {icons} from '../helper/iconConstants';
import {ChartData, Investment, OverviewData} from '../types';

interface HomeState {
  loading: boolean;
  overviewData: OverviewData;
  analysisData: ChartData[];
  profit: {commercial: number; residential: number};
  investmentsList: Investment[];
}

const INITIAL_STATE: HomeState = {
  loading: false,
  overviewData: {
    totalInvested: '$320,654.00',
    currentValue: '$320,654.00',
    avgReturn: '17%',
  },
  analysisData: [
    {x: 'Mon', y: 15},
    {x: 'Tue', y: 30},
    {x: 'Wed', y: 50},
    {x: 'Thu', y: 70},
    {x: 'Fri', y: 20},
    {x: 'Sat', y: 40},
    {x: 'Sun', y: 60},
  ],
  profit: {commercial: 42.85, residential: 57.15},
  investmentsList: [
    {
      id: '1',
      picture: icons.sampleInvestment,
      title: '762 D R Placerville',
      value: '$150,000',
      type: 'Commercial',
      maturityDate: '23/12/2023',
      returnValue: 20,
    },
    {
      id: '2',
      picture: icons.sampleInvestment,
      title: '15 Lakewood',
      value: '$280,000',
      type: 'Commercial',
      maturityDate: '23/12/2023',
      returnValue: 20,
    },
    {
      id: '3',
      picture: icons.sampleInvestment,
      title: '762 D R Placerville',
      value: '$150,000',
      type: 'Commercial',
      maturityDate: '23/12/2023',
      returnValue: 20,
    },
    {
      id: '4',
      picture: icons.sampleInvestment,
      title: '762 D R Placerville',
      value: '$150,000',
      type: 'Commercial',
      maturityDate: '23/12/2023',
      returnValue: 20,
    },
    {
      id: '5',
      picture: icons.sampleInvestment,
      title: '762 D R Placerville',
      value: '$150,000',
      type: 'Commercial',
      maturityDate: '23/12/2023',
      returnValue: 20,
    },
  ],
};

export default (state = INITIAL_STATE, action: AnyAction) => {
  switch (action.type) {
    case RESET_STORE:
      return INITIAL_STATE;

    default:
      return state;
  }
};
