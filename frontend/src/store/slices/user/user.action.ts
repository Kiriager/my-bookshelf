import { User } from 'src/store/services/user.service';
import {
  LogInFailedAction,
  LogInRequestAction,
  LogInRequestData,
  LogInSuccessAction,
} from './user.types';

export const LOGIN_REQUEST = 'LOGIN_REQUEST' as const;
export const LOGIN_FAILED = 'LOGIN_FAILED' as const;
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS' as const;

export function logInRequest(payload: LogInRequestData): LogInRequestAction {
  return { type: LOGIN_REQUEST, payload };
}

export function logInSuccess(payload: User): LogInSuccessAction {
  return { type: LOGIN_SUCCESS, payload };
}

export function logInFailed(payload: any): LogInFailedAction {
  return { type: LOGIN_FAILED, payload };
}
