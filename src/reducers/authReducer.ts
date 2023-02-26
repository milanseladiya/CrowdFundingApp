import {AnyAction} from '@reduxjs/toolkit';

import {AUTH_LOADING, RESET_STORE, SET_USER_DATA} from '../actions/types';
import {icons} from '../helper/iconConstants';
import {User} from '../types';

interface AuthState {
  loading: boolean;
  userDetails: User;
}

const INITIAL_STATE: AuthState = {
  loading: false,
  userDetails: {
    name: 'Cameron Williamson',
    designation: 'Co-Founder at ZeeBrooks',
    profilePicture: icons.defaultUser,
  },
};

export default (state = INITIAL_STATE, action: AnyAction) => {
  switch (action.type) {
    case AUTH_LOADING:
      return {
        ...state,
        loading: action.payload.loading,
      };

    case SET_USER_DATA:
      return {
        ...state,
        userDetails: action.payload as User,
      };

    case RESET_STORE:
      return INITIAL_STATE;

    default:
      return state;
  }
};
