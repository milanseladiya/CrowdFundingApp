import {Alert} from 'react-native';

export const getHitSlop = (val = 10) => ({
  top: val,
  left: val,
  bottom: val,
  right: val,
});

export const showAlert = (message: string) => Alert.alert(message);
