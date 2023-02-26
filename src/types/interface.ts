import {ImageSourcePropType} from 'react-native/types';

export interface User {
  name: string;
  designation: string;
  profilePicture: ImageSourcePropType;
}

export interface OverviewData {
  totalInvested: string;
  currentValue: string;
  avgReturn: string;
}

export interface ChartData {
  x: string | number;
  y: string | number;
}

export interface Investment {
  id: string;
  picture: ImageSourcePropType;
  title: string;
  value: string;
  type: string;
  maturityDate: string;
  returnValue: number;
}
