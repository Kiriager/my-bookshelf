import { Reducer } from 'redux';
import { User } from 'src/store/services/user.service';
import {
  AUTHORIZE_USER,
  UNAUTHORIZE_USER,
  USER_PROFILE_FAILED,
  USER_PROFILE_REQUEST,
  USER_PROFILE_SUCCESS,
} from './user.action';
import { UserActionTypes } from './user.types';

export interface UserState {
  user: User | null;
}

const initialState: UserState = { user: null };

export const userReducer: Reducer<UserState, UserActionTypes> = (state = initialState, action) => {
  switch (action.type) {
    case AUTHORIZE_USER:
      return {
        user: action.payload,
      };
    case UNAUTHORIZE_USER:
      return {
        user: null,
      };
    case USER_PROFILE_REQUEST:
      return {
        ...state,
      };
    case USER_PROFILE_FAILED:
      return {
        ...state,
        user: null,
      };
    case USER_PROFILE_SUCCESS:
      return {
        user: action.payload,
      };
    default:
      return { ...state };
  }
};
