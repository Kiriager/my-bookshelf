import { Reducer } from 'redux';
import {
  LOGIN_FAILED,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  RESTORE_SESSION_FAILED,
  RESTORE_SESSION_REQUEST,
  RESTORE_SESSION_SUCCESS,
} from './auth.action';
import { AuthActionTypes } from './auth.types';

export interface AuthError {
  type: 'unregistered email' | 'incorrect password' | 'unknown error';
}

export interface AuthState {
  status: 'authorized' | 'unauthorized' | 'restoring' | 'loggingIn';
  error: AuthError | null;
}

const initialState: AuthState = { status: 'unauthorized', error: null };

export const authReducer: Reducer<AuthState, AuthActionTypes> = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return { status: 'loggingIn', error: null };
    case LOGIN_SUCCESS:
      return {
        status: 'authorized',
        error: null,
      };
    case LOGIN_FAILED:
      return {
        status: 'unauthorized',
        error: action.payload,
      };
    case RESTORE_SESSION_REQUEST:
      return { status: 'restoring', error: null };
    case RESTORE_SESSION_SUCCESS:
      return {
        status: 'authorized',
        error: null,
      };
    case RESTORE_SESSION_FAILED:
      return {
        status: 'unauthorized',
        error: action.payload,
      };
    default:
      return { ...state };
  }
};
