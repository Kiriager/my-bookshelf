import { User } from 'src/store/services/user.service';
import {
  LogInFailedAction,
  LogInRequestAction,
  LogInRequestData,
  LogInSuccessAction,
  RestoreUserAction,
  UserProfileFailedAction,
  UserProfileRequestAction,
  UserProfileSuccessAction,
} from './user.types';

export const LOGIN_REQUEST = 'LOGIN_REQUEST' as const;
export const LOGIN_FAILED = 'LOGIN_FAILED' as const;
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS' as const;
export const USER_PROFILE_REQUEST = 'USER_PROFILE_REQUEST' as const;
export const USER_PROFILE_SUCCESS = 'USER_PROFILE_SUCCESS' as const;
export const USER_PROFILE_FAILED = 'USER_PROFILE_FAILED' as const;
export const RESTORE_USER = 'RESTORE_USER' as const;

export function logInRequest(payload: LogInRequestData): LogInRequestAction {
  return { type: LOGIN_REQUEST, payload };
}

export function logInSuccess(payload: User): LogInSuccessAction {
  return { type: LOGIN_SUCCESS, payload };
}

export function logInFailed(payload: any): LogInFailedAction {
  return { type: LOGIN_FAILED, payload };
}

export function getUserProfileRequest(): UserProfileRequestAction {
  return { type: USER_PROFILE_REQUEST };
}

export function getUserProfileSuccess(payload: User): UserProfileSuccessAction {
  return { type: USER_PROFILE_SUCCESS, payload };
}

export function getUserProfileFailed(payload: any): UserProfileFailedAction {
  return { type: USER_PROFILE_FAILED, payload };
}

export function restoreUser(): RestoreUserAction {
  return { type: RESTORE_USER };
}
