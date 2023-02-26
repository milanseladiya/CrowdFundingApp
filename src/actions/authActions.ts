import {SET_USER_DATA} from './types';
import {icons} from '../helper/iconConstants';

export const setUserData = () => async (dispatch: any) => {
  const userData = {
    name: 'Cameron Williamson',
    designation: 'Co-Founder at ZeeBrooks',
    profilePicture: icons.defaultUser,
  };
  dispatch({type: SET_USER_DATA, payload: userData});
};
