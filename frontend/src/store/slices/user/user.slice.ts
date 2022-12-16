import { Reducer } from 'redux';
import { User } from 'src/store/services/user.service';
import { LOGIN_FAILED, LOGIN_REQUEST, LOGIN_SUCCESS } from './user.action';
import { UserActionTypes } from './user.types';

export interface UserStateError {
  type: 'unregistered email' | 'incorrect password' | 'unknown error';
}

export interface UserState {
  status: 'authorized' | 'registration' | 'unauthorized' | 'restoring' | 'loggingIn';
  user: User | null;
  error: UserStateError | null;
}

const initialState: UserState = { status: 'unauthorized', user: null, error: null };

export const userReducer: Reducer<UserState, UserActionTypes> = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        status: 'authorized',
        user: action.payload,
        error: null,
      };
    case LOGIN_REQUEST:
      return { status: 'loggingIn', user: null, error: null };
    case LOGIN_FAILED:
      return {
        status: 'unauthorized',
        user: null,
        error: action.payload,
      };
    default:
      return { ...state };
  }
};
